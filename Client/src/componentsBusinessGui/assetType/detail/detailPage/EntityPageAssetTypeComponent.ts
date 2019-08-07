import { IRouteBeforeNavigationCheck }          from '@/router/interfaces/NavigationCheckInterfaces';
import AssetTypeExtendedModel                   from '@/repositories/models/assetType/AssetTypeExtendedModel';
import AssetTypeRepositoryFactory               from '@/repositories/factory/AssetTypeRepositoryFactory';
import Component                                from 'vue-class-component';
import EntityLayoutPageTemplateComponent        from '@/componentsEntityLayouts/entityLayoutPageTemplate/EntityLayoutPageTemplateComponent';
import EntityPageBaseComponent                  from '../../../../componentsEntityLayouts/entityPageBase/EntityPageBaseComponent';
import EntityPageModelWithReferences            from '@/componentsEntityLayouts/models/EntityPageModelWithReferences';
import EntitySegmentAssetTypeEditComponent      from '../segmentEdit/EntitySegmentAssetTypeEditComponent';
import EntitySegmentAssetTypeViewComponent      from '../segmentView/EntitySegmentAssetTypeViewComponent';
import EntitySegmentViewEditControllerComponent from '@/componentsEntityLayouts/EntitySegmentViewEditController/EntitySegmentViewEditControllerComponent';
import ModelFactoryAssetTypeExtended            from '@/repositories/modelFactories/asset/ModelFactoryAssetTypeExtended';
import NavigationCrudAssetType                  from '@/routeNavigation/NavigationCrudAssetType';

@Component({
  components: {
    EntityLayoutPageTemplateComponent,
    EntitySegmentAssetTypeEditComponent,
    EntitySegmentAssetTypeViewComponent,
    EntitySegmentViewEditControllerComponent,
  },
})
export default class EntityPageAssetTypeComponent
  extends EntityPageBaseComponent<AssetTypeExtendedModel, EntityPageModelWithReferences<AssetTypeExtendedModel>>
  implements IRouteBeforeNavigationCheck {

  constructor() {
    super(
      new EntityPageModelWithReferences(),
      AssetTypeRepositoryFactory.getRepository(),
      new ModelFactoryAssetTypeExtended(),
      new NavigationCrudAssetType());

    this.entityModel.headerTitle = 'Asset Types';
    this.entityModel.canArchive = true;
  }

  public onCancel() {
    super.onCancel();
  }

  public onEditBegins() {
    super.onEditBegins();
  }

  public onSave() {
    super.onSave();
  }

  public onArchive() {
    super.onArchive();
  }

  public onRestore() {
    super.onRestore();
  }
}
