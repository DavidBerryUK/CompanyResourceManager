import { IComponentMetaData }                   from '../../../components/interfaces/ComponentMetaDataInterfaces';
import { IRouteBeforeNavigationCheck }          from '../../../router/interfaces/NavigationCheckInterfaces';
import AssetExtendedModel                       from '@/repositories/models/asset/AssetExtendedModel';
import AssetRepositoryFactory                   from '@/repositories/factory/AssetRepositoryFactory';
import AssetTypeRepositoryFactory               from '@/repositories/factory/AssetTypeRepositoryFactory';
import BaseEditPage                             from '@/componentsBusinessGui/base/BaseEditPage';
import Component                                from "vue-class-component";
import ContractListener                         from '@/repositories/contracts/ContractListener';
import FormEditHeader                           from '@/componentsCommonGui/formEditHeader/FormEditHeader';
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';
import LabelDataReadOnly                        from '@/componentsCommonGui/labelDataReadOnly/LabelDataReadOnly';
import ListItemModel                            from '@/repositories/models/shared/collections/ListItemModel';
import NavigationCrudAsset                      from '@/routeNavigation/NavigationCrudAsset';
import ObjectMapperAssetExtendedModel           from '@/repositories/objectMappers/asset/ObjectMapperAssetExtendedModel';

//
// attribute indicates this is a component, 
//  this is where any sub components are also registered
@Component({
  components: {
    LabelDataReadOnly,
    FormEditHeader
  }
})

export default class AssetEdit extends BaseEditPage<AssetExtendedModel> implements IRouteBeforeNavigationCheck, IComponentMetaData {

  //IComponentMetaData
  public componentName: string = "Asset Edit";
  public componentDescription: string = "Enables the user to edit an Asset";
  //IComponentMetaData

  // reference data - each asset has an asset type
  public assetTypesList : GenericCollectionModel<ListItemModel> = new GenericCollectionModel<ListItemModel>();


  constructor() {
    super(
      new NavigationCrudAsset(), 
      AssetRepositoryFactory.getRepository(),
      new ObjectMapperAssetExtendedModel() );        
  }

  // the form has been mounted into the DOM
  mounted() {
    super.mounted();
  }

  // the cancel button has been pressed
  onCancel() {
    super.onCancel();
  }

  // the delete button has been pressed
  //
  onArchive() {
    super.onArchive();
  }


  // the save button has been pressed by the users
  //
  onSave() {
      super.onSave();
  }

   // load additional data,
  //
  retrieveSecondaryData(contractListener: ContractListener) {

    var assetTypeRepository = AssetTypeRepositoryFactory.getRepository();

    assetTypeRepository
    .getActiveList()
    .onSuccess((list:GenericCollectionModel<ListItemModel> ) => {
      this.assetTypesList = list
    })
    .contractListener(contractListener);
  }
 
}
