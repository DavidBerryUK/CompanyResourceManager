import { EnumModalButton }                      from '../../../componentsCommonGui/dialogs/commonAppDialog/CommonAppDialogOptions';
import { EnumModalIcon }                        from '../../../componentsCommonGui/dialogs/commonAppDialog/CommonAppDialogOptions';
import { EnumModalWidth }                       from '../../../componentsCommonGui/dialogs/constants/StandardDialogWidth';
import { IComponentMetaData }                   from '../../../components/interfaces/ComponentMetaDataInterfaces';
import { IRouteBeforeNavigationCheck }          from '../../../router/interfaces/NavigationCheckInterfaces';
import { Prop, Watch }                          from "vue-property-decorator";
import { ValidationMessage }                    from '../../../repositories/contracts/ApiResponseContract';
import AssetTypeModel                           from '@/repositories/models/assetType/AssetTypeModel';
import AssetTypeRepositoryFactory               from '@/repositories/factory/AssetTypeRepositoryFactory';
import BaseEditPage                             from '@/componentsBusinessGui/base/BaseEditPage';
import CommonAppDialogController                from '@/componentsCommonGui/dialogs/commonAppDialog/CommonAppDialogController';
import Component                                from "vue-class-component";
import ContractListener                         from '@/repositories/contracts/ContractListener';
import DeepObjectComparator                     from '@/services/objectComparison/DeepObjectComparator';
import FormEditHeader                           from '@/componentsCommonGui/formEditHeader/FormEditHeader';
import LabelDataReadOnly                        from '@/componentsCommonGui/labelDataReadOnly/LabelDataReadOnly';
import NavigationCrudAssetType                  from '@/routeNavigation/NavigationCrudAssetType';

//
// attribute indicates this is a component, 
//  this is where any sub components are also registered
@Component({
  components: {
    LabelDataReadOnly,
    FormEditHeader
  }
})

export default class AssetTypeEdit extends BaseEditPage<AssetTypeModel> implements IRouteBeforeNavigationCheck, IComponentMetaData {

  //IComponentMetaData
  public componentName: string = "Asset Type Edit";
  public componentDescription: string = "Enables the user to edit an Asset Type";
  //IComponentMetaData

  @Prop() id!: string;

  // list of different asset types types, 
  //

  constructor() {
    super(new NavigationCrudAssetType());    
    this.model = new AssetTypeModel();
    this.modelChangeTracker = new DeepObjectComparator(this.model);
  }

  // the component has mounted into the HTML DOM,
  //  load the data required for the page
  mounted() {    
    this.loadModel();
  }
  //
  // Do a Deep watch on the asset type model to see if any
  // property has been updated
  // (watch does not work when moved to base class)
  @Watch("model", { deep: true })
  onModelChanged(newValue: AssetTypeModel, oldValue: AssetTypeModel) {
    // check to see if the object has returned to its original value
    //    
    this.modelChangeTracker.evaluateHasObjectChanged(this.model);
  }

  @Watch("id")
  onIdChanged(value: string, oldValue: string) {    
    this.loadModel();
  }

  // the delete button has been pressed
  //
  onDelete() {

    //
    // ask the user to confirm they with to delete the asset type
    //
    var dialog = new CommonAppDialogController(this);
    dialog.createWithParameters(`Archive ${this.model.name} ?`,
      "Are you sure you wish to Archive this Asset Type?",
      EnumModalIcon.Question,
      EnumModalButton.YesNo,
      EnumModalWidth.FixedMedium)
      .yesPressed(() => {

        //
        // call api to deactivate the asset Type , on success display the read only version
        //
        var apiPersonRepository = AssetTypeRepositoryFactory.getRepository();
        apiPersonRepository.deactivate(this.model.assetTypeId)
          .onSuccess((data: AssetTypeModel | null) => {
            new NavigationCrudAssetType().gotoViewPage(this, this.model.assetTypeId);
          }).onFailed((message: string) => {
            //
            // if failed, show user why
            //
            var dialog = new CommonAppDialogController(this);
            dialog.createWithParameters(
              `Delete ${this.model.entityValue}`,
              `Failed to archive asset Type:${message}`,
              EnumModalIcon.Error,
              EnumModalButton.Ok,
              EnumModalWidth.FixedMedium).show();
          });

      }).show();
  }

  // the cancel button has been pressed by the user
  //
  onCancel() {
    new NavigationCrudAssetType().gotoViewPage(this, this.model.assetTypeId);
  }

  // the save button has been pressed by the users
  //
  onSave() {
    //
    // validate the page, is all is valid then save, otherwise
    // do nothing and wait for the user to correct the 
    // validation issues
    //
    this.$validator.validateAll().then((result) => {

      if (result) {
        // save data to server
        //
        var assetTypeRepository = AssetTypeRepositoryFactory.getRepository();

        assetTypeRepository.save(this.model)
          .onSuccess((data: AssetTypeModel) => {

            // reset the model change tracker, this will 
            // disable the save button

            this.modelChangeTracker.reset(data);
            new NavigationCrudAssetType().gotoViewPage(this, data.assetTypeId);
          })

          .onValidationErrorsRaised((validationMessages: Array<ValidationMessage>) => {
            this.addValidationErrors(validationMessages);
          })

          .onFailed((message: string) => {            
            // public generic dialog
            //  letting the user know the
            //  save failed
            var dialog = new CommonAppDialogController(this);
            dialog.createWithParameters(
              `Save Product ${this.model.entityValue}`,
              `Failed to save :${message}`,
              EnumModalIcon.Error,
              EnumModalButton.Ok,
              EnumModalWidth.FixedMedium).show();
          })
      }
    });
  }

  //
  // model code away from logic / navigation code, 
  //  this allows re-use and prevents duplication
  //
  private loadModel() {    
    var assetTypeRepository = AssetTypeRepositoryFactory.getRepository();

    //
    // when all the trailing repositories have finished then do this.
    //


    //
    // load the asset type for id
    //
    if (this.id == 'new') {
      //
      // if this is a create page, then just create a new asset type model, otherwise
      //  get a asset type via the API
      //
      this.model = new AssetTypeModel();
      this.modelChangeTracker = new DeepObjectComparator(this.model);
      this.isLoading = false;
    }
    else {
      var listener = new ContractListener();

      listener.monitor()
        .onAllResponded(() => {
          this.isLoading = false;
        });

        assetTypeRepository
        .getById(this.id)
        .onSuccess((data: AssetTypeModel | null) => {
          if (data != null) {
            this.model = data;
            this.modelChangeTracker = new DeepObjectComparator(this.model);
          }
        })
        
        .contractListener(listener);
    }
  }
}
