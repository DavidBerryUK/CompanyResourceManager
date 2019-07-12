import { IComponentMetaData }                   from '../../../components/interfaces/ComponentMetaDataInterfaces';
import { IRouteBeforeNavigationCheck }          from '../../../router/interfaces/NavigationCheckInterfaces';
import AssetTypeExtendedModel                   from '@/repositories/models/assetType/AssetTypeExtendedModel';
import AssetTypeRepositoryFactory               from '@/repositories/factory/AssetTypeRepositoryFactory';
import BaseEditPage                             from '@/componentsBusinessGui/base/BaseEditPage';
import Component                                from "vue-class-component";
import FormEditHeader                           from '@/componentsCommonGui/formEditHeader/FormEditHeader';
import LabelDataReadOnly                        from '@/componentsCommonGui/labelDataReadOnly/LabelDataReadOnly';
import NavigationCrudAssetType                  from '@/routeNavigation/NavigationCrudAssetType';
import ObjectMapperAssetTypeExtendedModel       from '@/repositories/objectMappers/assetType/ObjectMapperAssetTypeExtendedModel';

//
// attribute indicates this is a component,
//  this is where any sub components are also registered
@Component({
  components: {
    LabelDataReadOnly,
    FormEditHeader
  }
})
export default class AssetTypeEdit extends BaseEditPage<AssetTypeExtendedModel>
  implements IRouteBeforeNavigationCheck, IComponentMetaData {
  //IComponentMetaData
  public componentName: string = "Asset Type Edit";
  public componentDescription: string =
    "Enables the user to edit an Asset Type";
  //IComponentMetaData

  // list of different asset types types,
  //
  constructor() {
    super(
      new NavigationCrudAssetType(),
      AssetTypeRepositoryFactory.getRepository(),
      new ObjectMapperAssetTypeExtendedModel()
    );
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
  onArchive() {
    super.onArchive();
  }

  // the save button has been pressed by the users
  //
  onSave() {
    super.onSave();
  }
}
