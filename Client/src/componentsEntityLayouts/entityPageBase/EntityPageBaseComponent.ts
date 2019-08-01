import { EnumModalButton }                      from '../../componentsCommonGui/dialogs/commonAppDialog/CommonAppDialogOptions';
import { EnumModalIcon }                        from '../../componentsCommonGui/dialogs/commonAppDialog/CommonAppDialogOptions';
import { EnumModalWidth }                       from '../../componentsCommonGui/dialogs/constants/StandardDialogWidth';
import { IApiModel }                            from '@/repositories/models/interfaces/IApiModel';
import { IComponentMetaData }                   from '@/components/interfaces/ComponentMetaDataInterfaces';
import { IDataIsActive }                        from '../../repositories/models/interfaces/IDataIsActive';
import { IModelFactory }                        from '@/repositories/modelFactories/interfaces/IModelFactory';
import { IRouteBeforeNavigationCheck }          from '@/router/interfaces/NavigationCheckInterfaces';
import { Prop }                                 from  'vue-property-decorator';
import { ValidationMessage }                    from '@/repositories/contracts/ApiResponseContract';
import { Watch }                                from 'vue-property-decorator';
import CommonAppDialogController                from '@/componentsCommonGui/dialogs/commonAppDialog/CommonAppDialogController';
import ContractListener                         from '@/repositories/contracts/ContractListener';
import EntityPageModel                          from '../models/EntityPageModel';
import GenericApiRepository                     from '@/repositories/apiBase/GenericApiRepository';
import IsActiveDataInterfaceGuards              from '@/repositories/models/interfaces/IDataIsActive';
import Vue from 'vue';

/**
 * E = EntityType
 * T = EntityPageModel
 */
export default class EntityPageBaseComponent<E extends IApiModel, T extends EntityPageModel<E>>
    extends Vue implements IComponentMetaData, IRouteBeforeNavigationCheck {

    @Prop() public id!: string;

    public entityModel!: T;
    public backupOfEntityModel?: E;

    public repository: GenericApiRepository<any, E, any>;

    // IComponentMetaData
    public componentName: string = 'EntityPageBaseComponent';
    public componentDescription: string = 'Entity Page Base Component';
    // IComponentMetaData

    private modelFactory: IModelFactory<E>;

    constructor(
        entityPageModel: T,
        repository: GenericApiRepository<any, E, any>,
        modelFactory: IModelFactory<E>) {
        super();
        this.modelFactory = modelFactory;
        this.entityModel = entityPageModel;
        this.repository = repository;
        this.entityModel.id = this.id;
        this.entityModel.entity = this.modelFactory.create();
        this.dataGet();
    }

    @Watch('entityModel.entity', { deep: true })
    public onModelChanged(newValue: T, oldValue: T) {
        // check to see if the object has returned to its original value
        this.entityModel.changeTracker.evaluateHasObjectChanged(this.entityModel.entity);
    }

    @Watch('id')
    public watchPropertyId() {
        this.entityModel.id = this.id;
        this.dataGet();
    }

    /** Event Handler - user cancelled the edit */
    public onCancel() {
        this.entityRestoreFromMemory();
    }

    /** Event Handler - user has started editing the entity */
    public onEditBegins() {
        this.entityBackupToMemory();
    }

    /** Event Handler - user has finished editing the entity and wants to save it. */
    public onSave() {
        this.saveData();
    }

    public onRestore() {
        this.dataRestore();
    }

    public onArchive() {
        this.dataArchive();
    }

     // IRouteBeforeNavigationCheck
  //
  // this is called by the router before navigation to ensure its ok
  // to navigate away from this screen
  //
  public canCloseComponentBeforeNavigation(): boolean {
    if (this.entityModel.changeTracker != null) {
      return this.entityModel.changeTracker.isObjectSameAsOriginal;
    }
    return false;
  }
  // IRouteBeforeNavigationCheck

    /**
     * This is a place holder that can be overridden by subclasses.
     * This method is called when an entity is loaded, this gives the opportunity
     * to load additional data. This has the benefit of the framework handling
     * the 'isLoading' boolean.
     * @param contractListener - api contract - keeps track of all api operations
     */
    public retrieveSecondaryData(contractListener: ContractListener) {

    }

    private entityBackupToMemory() {
        this.backupOfEntityModel = Object.assign(this.modelFactory.create(), this.entityModel.entity);
    }

    private entityRestoreFromMemory() {
        if (this.entityBackupToMemory !== null) {
            this.entityModel.entity = this.backupOfEntityModel!;
        }
    }

    private dataGet() {

        const listener = new ContractListener();

        listener.monitor()
            .onAllResponded(() => {
                this.entityModel.isLoading = false;
            });

        this.entityModel.isLoading = true;

        this.retrieveSecondaryData(listener);
        this.repository
            .getById(this.entityModel.id)
            .onSuccess((data) => {

                if (data !== null) {
                    this.entityModel.entity = data as E;
                    this.entityModel.resetTracker();

                    if (IsActiveDataInterfaceGuards.doesSupportIDataIsActive(this.entityModel.entity)) {
                        const isActiveDataSet = this.entityModel.entity as IDataIsActive;
                        this.entityModel.canArchive = true;
                        this.entityModel.isActive = isActiveDataSet.isActive;
                    } else {
                        this.entityModel.canArchive = false;
                    }
                }

                this.$forceUpdate();
            })
            .contractListener(listener);
    }

    // the save button has been pressed by the users
    //
    private saveData() {
        //
        // validate the page, is all is valid then save, otherwise
        // do nothing and wait for the user to correct the
        // validation issues
        //
        this.$validator.validateAll().then((result) => {

            if (result) {
                // save data to server
                this.repository.save(this.entityModel.entity)
                    .onSuccess((data: E) => {
                        // reset the model change tracker, this will
                        // disable the save button

                        if (data !== null) {
                            this.entityModel.entity = data as E;
                            this.entityModel.resetTracker();

                            if (IsActiveDataInterfaceGuards.doesSupportIDataIsActive(this.entityModel.entity)) {
                                const isActiveDataSet = this.entityModel.entity as IDataIsActive;
                                this.entityModel.canArchive = true;
                                this.entityModel.isActive = isActiveDataSet.isActive;
                            } else {
                                this.entityModel.canArchive = false;
                            }
                        }
                    })

                    .onValidationErrorsRaised((validationMessages: Array<ValidationMessage>) => {
                        this.addValidationErrors(validationMessages);
                    })

                    .onFailed((message: string) => {
                        // public generic dialog
                        //  letting the user know the
                        //  save failed
                        const dialog = new CommonAppDialogController(this);
                        dialog.createWithParameters(
                            `Save ${this.entityModel.entity.entityName} ${this.entityModel.entity.entityValue}`,
                            `Failed to save :${message}`,
                            EnumModalIcon.Error,
                            EnumModalButton.Ok,
                            EnumModalWidth.FixedMedium).show();
                    });
            }
        });
    }

    private addValidationErrors(validationMessages: Array<ValidationMessage>) {
        validationMessages.forEach((msg: ValidationMessage) => {
            this.$validator.errors.add({ field: msg.field, msg: msg.message });
        });
    }

    // the delete button has been pressed
    //
    private dataArchive() {
        //
        // ask the user to confirm they with to delete the asset
        //
        const dialog = new CommonAppDialogController(this);

        dialog.createWithParameters(`Archive ${this.entityModel.entity.entityName}?`,
            `Are you sure you wish to Archive this ${this.entityModel.entity.entityValue}?`,
            EnumModalIcon.Question,
            EnumModalButton.YesNo,
            EnumModalWidth.FixedMedium)
            .yesPressed(() => {

                //
                // call api to deactivate the asset  , on success display the read only version
                //

                this.repository.deactivate(this.entityModel.entity.entityKey)
                    .onSuccess((data: E | null) => {

                        this.entityModel.entity = data as E;
                        this.entityModel.resetTracker();

                        if (IsActiveDataInterfaceGuards.doesSupportIDataIsActive(this.entityModel.entity)) {
                            const isActiveDataSet = this.entityModel.entity as IDataIsActive;
                            this.entityModel.canArchive = true;
                            this.entityModel.isActive = isActiveDataSet.isActive;
                        } else {
                            this.entityModel.canArchive = false;
                        }

                    }).onFailed((message: string) => {
                        //
                        // if failed, show user why
                        //
                        const failureDialog = new CommonAppDialogController(this);
                        failureDialog.createWithParameters(
                            `Archive ${this.entityModel.entity.entityValue}`,
                            `Failed to archive ${this.entityModel.entity.entityName} ${this.entityModel.entity.entityValue} :${message}`,
                            EnumModalIcon.Error,
                            EnumModalButton.Ok,
                            EnumModalWidth.FixedMedium)
                            .show();
                    });

            }).show();
    }

    private dataRestore() {

        //
        // ask the user to confirm they with to restore the asset type
        //
        const dialog = new CommonAppDialogController(this);
        dialog.createWithParameters(`Restore ${this.entityModel.entity.entityName} ?`,
            `Are you sure you wish to make ${this.entityModel.entity.entityValue} active again?`,
            EnumModalIcon.Question,
            EnumModalButton.YesNo,
            EnumModalWidth.FixedMedium)
            .yesPressed(() => {
                //
                // call api to restore the asset type, on success display the read only version
                this.repository
                    .activate(this.entityModel.entity.entityKey)
                    .onSuccess((data: E | null) => {
                        if (data) {
                            this.entityModel.entity = data as E;
                            this.entityModel.resetTracker();

                            if (IsActiveDataInterfaceGuards.doesSupportIDataIsActive(this.entityModel.entity)) {
                                const isActiveDataSet = this.entityModel.entity as IDataIsActive;
                                this.entityModel.canArchive = true;
                                this.entityModel.isActive = isActiveDataSet.isActive;
                            } else {
                                this.entityModel.canArchive = false;
                            }
                        }
                    })
                    .onValidationErrorsRaised((validationMessages: Array<ValidationMessage>) => {
                        this.addValidationErrors(validationMessages);
                    })
                    .onFailed((message: string) => {
                        //
                        // if failed, show user why
                        //
                        const failureDialog = new CommonAppDialogController(this);
                        failureDialog.createWithParameters(`Restore ${this.entityModel.entity.entityName}`,
                            `Failed to restore ${this.entityModel.entity.entityName} :${message}`,
                            EnumModalIcon.Error,
                            EnumModalButton.Ok,
                            EnumModalWidth.FixedMedium)
                            .show();
                    });
            }).show();
    }
}
