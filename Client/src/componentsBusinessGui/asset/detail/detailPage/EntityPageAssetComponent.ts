import { IRouteBeforeNavigationCheck }          from '@/router/interfaces/NavigationCheckInterfaces';
import AssetExtendedModel                       from '@/repositories/models/asset/AssetExtendedModel';
import AssetRepositoryFactory                   from '@/repositories/factory/AssetRepositoryFactory';
import AssetTypeRepositoryFactory               from '@/repositories/factory/AssetTypeRepositoryFactory';
import Component                                from 'vue-class-component';
import ContractListener                         from '@/repositories/contracts/ContractListener';
import EntityLayoutPageTemplateComponent        from '@/componentsEntityLayouts/entityLayoutPageTemplate/EntityLayoutPageTemplateComponent';
import EntityPageBaseComponent                  from '../../../../componentsEntityLayouts/entityPageBase/EntityPageBaseComponent';
import EntityPageModelWithReferences            from '@/componentsEntityLayouts/models/EntityPageModelWithReferences';
import EntitySegmentAssetEditComponent          from '../segmentEdit/EntitySegmentAssetEditComponent';
import EntitySegmentAssetViewComponent          from '../segmentView/EntitySegmentAssetViewComponent';
import EntitySegmentViewEditControllerComponent from '@/componentsEntityLayouts/EntitySegmentViewEditController/EntitySegmentViewEditControllerComponent';
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';
import ListItemModel                            from '@/repositories/models/listitem/ListItemModel';
import ModelFactoryAssetExtended                from '@/repositories/modelFactories/ModelFactoryAssetExtended';

@Component({
  components: {
    EntityLayoutPageTemplateComponent,
    EntitySegmentAssetEditComponent,
    EntitySegmentAssetViewComponent,
    EntitySegmentViewEditControllerComponent,
  },
})
export default class EntityPageAssetComponent
  extends EntityPageBaseComponent<AssetExtendedModel, EntityPageModelWithReferences<AssetExtendedModel>>
  implements IRouteBeforeNavigationCheck {

  constructor() {
    super(
      new EntityPageModelWithReferences(),
      AssetRepositoryFactory.getRepository(),
      new ModelFactoryAssetExtended());

    this.entityModel.headerTitle = 'Asset';
    this.entityModel.canArchive = true;
  }

    // load additional data,
  //
  public retrieveSecondaryData(contractListener: ContractListener) {
    // Load Job Role List
    //
    const assetTypeRepository = AssetTypeRepositoryFactory.getRepository();
    assetTypeRepository
      .getActiveList()
      .onSuccess((list: GenericCollectionModel<ListItemModel>) => {
        this.entityModel.AssetTypesList = list.items;
      })
      .contractListener(contractListener);
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
