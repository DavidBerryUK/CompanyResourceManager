import { IComponentMetaData }                   from '../../../components/interfaces/ComponentMetaDataInterfaces';
import { IRouteBeforeNavigationCheck }          from '../../../router/interfaces/NavigationCheckInterfaces';
import AssetTypeModel                           from '@/repositories/models/assetType/AssetTypeModel';
import AssetTypeRepositoryFactory               from '@/repositories/factory/AssetTypeRepositoryFactory';
import BaseEditPage                             from '@/componentsBusinessGui/base/BaseEditPage';
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

  // list of different asset types types, 
  //
  constructor() {
    super(new NavigationCrudAssetType(), AssetTypeRepositoryFactory.getRepository() );    
    this.model = new AssetTypeModel();
    this.modelChangeTracker = new DeepObjectComparator(this.model);
  }

  mounted() {
    super.mounted();
  }

  // the cancel button has been pressed
  onCancel() {
    super.onCancel();
  }

  // the delete button has been pressed
  //
  onDelete() {
    super.onDelete();
  }

  // the save button has been pressed by the users
  //
  onSave() {
    super.onSave();
  }

  //
  // model code away from logic / navigation code, 
  //  this allows re-use and prevents duplication
  //
  retrieveData() {    
    

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

        this.repository
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
