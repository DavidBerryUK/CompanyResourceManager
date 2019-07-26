import { EnumModalButton }                      from '../../componentsCommonGui/dialogs/commonAppDialog/CommonAppDialogOptions';
import { EnumModalIcon }                        from '../../componentsCommonGui/dialogs/commonAppDialog/CommonAppDialogOptions';
import { EnumModalWidth }                       from '../../componentsCommonGui/dialogs/constants/StandardDialogWidth';
import { IApiModel }                            from '@/repositories/models/interfaces/IApiModel';
import { IComponentMetaData }                   from './../../components/interfaces/ComponentMetaDataInterfaces';
import { IModelGenericMapper }                  from '@/repositories/modelMappers/interfaces/IModelGenericMapper';
import { INavigationCrud }                      from '@/routeNavigation/interfaces/INavigationCrud';
import { Prop }                                 from 'vue-property-decorator';
import { ValidationMessage }                    from '@/repositories/contracts/ApiResponseContract';
import { Watch }                                from 'vue-property-decorator';
import BasePage                                 from './BasePage';
import CommonAppDialogController                from '@/componentsCommonGui/dialogs/commonAppDialog/CommonAppDialogController';
import ContractListener                         from '@/repositories/contracts/ContractListener';
import DeepObjectComparator                     from '../../services/objectComparison/DeepObjectComparator';
import GenericApiRepository                     from '@/repositories/apiBase/GenericApiRepository';

export default class BaseEditPage<T extends IApiModel> extends BasePage implements IComponentMetaData {
  // IComponentMetaData
  public componentName: string = 'BaseEditPage';
  public componentDescription: string = 'BaseEditPage';
  // IComponentMetaData

  public repository: GenericApiRepository<any, T, any>;

  // track changes in the branch object
  //
  public modelChangeTracker!: DeepObjectComparator;
  public model!: T;
  public objectMapper: IModelGenericMapper<T>;

  @Prop() public id!: string;

  public navigationHandler: INavigationCrud;

  constructor(  navigationHandler: INavigationCrud,
                repository: GenericApiRepository<any, T, any>,
                objectMapper: IModelGenericMapper<T>) {
    super();
    this.navigationHandler = navigationHandler;
    this.repository = repository;
    this.objectMapper = objectMapper;

    this.model = this.objectMapper.mapToEntity({});
    this.modelChangeTracker = new DeepObjectComparator(this.model);
  }

  @Watch('id')
  public onIdChanged(value: string, oldValue: string) {
    this.retrieveData();
  }

  //
  // Do a Deep watch on the asset type model to see if any
  // property has been updated
  // (watch does not work when moved to base class)
  @Watch('model', { deep: true })
  public onModelChanged(newValue: T, oldValue: T) {
    // check to see if the object has returned to its original value
    this.modelChangeTracker.evaluateHasObjectChanged(this.model);
  }

  public mounted() {
    this.retrieveData();
  }

  // IRouteBeforeNavigationCheck
  //
  // this is called by the router before navigation to ensure its ok
  // to navigate away from this screen
  //
  public canCloseComponentBeforeNavigation(): boolean {
    if (this.modelChangeTracker != null) {
      return this.modelChangeTracker.isObjectSameAsOriginal;
    }
    return false;
  }
  // IRouteBeforeNavigationCheck

   // the cancel button has been pressed by the user
  //
  public onCancel() {
    this.navigationHandler.gotoViewPage(this, this.model.entityKey);
  }

  public retrieveData() {
    //
    // load the person for id
    //
    if (this.id === 'new') {
      //
      // if this is a create page, then just create a new person model, otherwise
      //  get a person via the API

      this.model = this.objectMapper.mapToEntity({});
      this.modelChangeTracker = new DeepObjectComparator(this.model);
      this.isLoading = false;
    } else {
      //
      // when all the trailing repositories have finished then do this.
      //
      const listener = new ContractListener();

      listener.monitor()
        .onAllResponded(() => {
          this.isLoading = false;
        });


      this.retrieveSecondaryData(listener);

      this.repository
        .getById(this.id)
        .onSuccess((data: T | null) => {
          if (data != null) {
            this.model = data;
            this.modelChangeTracker = new DeepObjectComparator(this.model);
          }
        })
        .contractListener(listener);
    }
  }

  public retrieveSecondaryData(contractListener: ContractListener) {
  }

  // the delete button has been pressed
  //
  public onArchive() {

    //
    // ask the user to confirm they with to delete the asset
    //
    const dialog = new CommonAppDialogController(this);

    dialog.createWithParameters(`Archive ${this.model.entityName}?`,
      `Are you sure you wish to Archive this ${this.model.entityValue}?`,
      EnumModalIcon.Question,
      EnumModalButton.YesNo,
      EnumModalWidth.FixedMedium)
      .yesPressed(() => {

        //
        // call api to deactivate the asset  , on success display the read only version
        //

        this.repository.deactivate(this.model.entityKey)
          .onSuccess((data: T | null) => {
            this.navigationHandler.gotoViewPage(this, this.model.entityKey);
          }).onFailed((message: string) => {
            //
            // if failed, show user why
            //
            const failureDialog = new CommonAppDialogController(this);
            failureDialog.createWithParameters(
              `Archive ${this.model.entityValue}`,
              `Failed to archive ${this.model.entityName} ${this.model.entityValue} :${message}`,
              EnumModalIcon.Error,
              EnumModalButton.Ok,
              EnumModalWidth.FixedMedium)
              .show();
          });

      }).show();
  }


   // the save button has been pressed by the users
  //
  public onSave() {
    //
    // validate the page, is all is valid then save, otherwise
    // do nothing and wait for the user to correct the
    // validation issues
    //
    this.$validator.validateAll().then((result) => {

      if (result) {
        // save data to server
        this.repository.save(this.model)
          .onSuccess((data: T) => {

            // reset the model change tracker, this will
            // disable the save button

            this.modelChangeTracker.reset(data);
            this.navigationHandler.gotoViewPage(this, data.entityKey);
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
              `Save ${this.model.entityName} ${this.model.entityValue}`,
              `Failed to save :${message}`,
              EnumModalIcon.Error,
              EnumModalButton.Ok,
              EnumModalWidth.FixedMedium).show();
          });
      }
    });
  }
}
