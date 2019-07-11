import { IComponentMetaData }                   from '../../../components/interfaces/ComponentMetaDataInterfaces';
import { IRouteBeforeNavigationCheck }          from '../../../router/interfaces/NavigationCheckInterfaces';
import AssetRepositoryFactory                   from '@/repositories/factory/AssetRepositoryFactory';
import AssetSummaryModel                        from '@/repositories/models/asset/AssetSummaryModel';
import AssetTypeRepositoryFactory               from '@/repositories/factory/AssetTypeRepositoryFactory';
import BaseEditPage                             from '@/componentsBusinessGui/base/BaseEditPage';
import Component                                from "vue-class-component";
import ContractListener                         from '@/repositories/contracts/ContractListener';
import DeepObjectComparator                     from '@/services/objectComparison/DeepObjectComparator';
import FormEditHeader                           from '@/componentsCommonGui/formEditHeader/FormEditHeader';
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';
import LabelDataReadOnly                        from '@/componentsCommonGui/labelDataReadOnly/LabelDataReadOnly';
import ListItemModel                            from '@/repositories/models/shared/collections/ListItemModel';
import NavigationCrudAsset                      from '@/routeNavigation/NavigationCrudAsset';


//
// attribute indicates this is a component, 
//  this is where any sub components are also registered
@Component({
  components: {
    LabelDataReadOnly,
    FormEditHeader
  }
})

export default class AssetEdit extends BaseEditPage<AssetSummaryModel> implements IRouteBeforeNavigationCheck, IComponentMetaData {

  //IComponentMetaData
  public componentName: string = "Asset Edit";
  public componentDescription: string = "Enables the user to edit an Asset";
  //IComponentMetaData

  public assetTypesList : GenericCollectionModel<ListItemModel> = new GenericCollectionModel<ListItemModel>();

  // list of different asset, 
  //

  constructor() {
    super(new NavigationCrudAsset(), AssetRepositoryFactory.getRepository() );    
    this.model = new AssetSummaryModel();
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
    
    var assetTypeRepository = AssetTypeRepositoryFactory.getRepository();

    //
    // when all the trailing repositories have finished then do this.
    //


    //
    // load the asset for id
    //
    if (this.id == 'new') {
      //
      // if this is a create page, then just create a new asset model, otherwise
      //  get a asset via the API
      //
      this.model = new AssetSummaryModel();
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
        .getActiveList()
        .onSuccess((list:GenericCollectionModel<ListItemModel> ) => {
          this.assetTypesList = list
        })
        .contractListener(listener);

        this.repository
        .getById(this.id)
        .onSuccess((data: AssetSummaryModel | null) => {
          if (data != null) {
            this.model = data;
            this.modelChangeTracker = new DeepObjectComparator(this.model);
          }
        })        
        .contractListener(listener);
    }
  }
}
