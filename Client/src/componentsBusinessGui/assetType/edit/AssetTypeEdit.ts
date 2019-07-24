import { IComponentMetaData }                   from '../../../components/interfaces/ComponentMetaDataInterfaces';
import { IRouteBeforeNavigationCheck }          from '../../../router/interfaces/NavigationCheckInterfaces';
import AssetTypeExtendedModel                   from '@/repositories/models/assetType/AssetTypeExtendedModel';
import AssetTypeRepositoryFactory               from '@/repositories/factory/AssetTypeRepositoryFactory';
import BaseEditPage                             from '@/componentsBusinessGui/base/BaseEditPage';
import Component                                from 'vue-class-component';
import EntityEditTemplateComponent              from '@/componentsCommonGui/entityEditTemplate/EntityEditTemplateComponent';
import FormEditHeader                           from '@/componentsCommonGui/formEditHeader/FormEditHeader';
import ObjectMapperFactoryAssetType             from '@/repositories/objectMappers/ObjectMapperFactoryAssetType';
import NavigationCrudAssetType                  from '@/routeNavigation/NavigationCrudAssetType';

//
// attribute indicates this is a component,
//  this is where any sub components are also registered
@Component({
  components: {
    EntityEditTemplateComponent,
    FormEditHeader,
  },
})
export default class AssetTypeEdit extends BaseEditPage<AssetTypeExtendedModel>
  implements IRouteBeforeNavigationCheck, IComponentMetaData {
  // IComponentMetaData
  public componentName: string = 'Asset Type Edit';
  public componentDescription: string = 'Enables the user to edit an Asset Type';
  // IComponentMetaData

  // list of different asset types types,
  //
  constructor() {
    super(
      new NavigationCrudAssetType(),
      AssetTypeRepositoryFactory.getRepository(),
      ObjectMapperFactoryAssetType.createExtendedMapper());
  }

  public mounted() {
    super.mounted();
  }

  // the cancel button has been pressed
  public onCancel() {
    super.onCancel();
  }

  // the delete button has been pressed
  //
  public onArchive() {
    super.onArchive();
  }

  // the save button has been pressed by the users
  //
  public onSave() {
    super.onSave();
  }
}
