import { IComponentMetaData }                   from '@/components/interfaces/ComponentMetaDataInterfaces';
import AssetExtendedModel                       from '@/repositories/models/asset/AssetExtendedModel';
import AssetRepositoryFactory                   from '@/repositories/factory/AssetRepositoryFactory';
import BaseViewPage                             from '@/componentsBusinessGui/base/BaseViewPage';
import Component                                from 'vue-class-component';
import EntityViewTemplateComponent              from '@/componentsCommonGui/entityViewTemplate/EntityViewTemplateComponent.vue';
import LabelDataReadOnly                        from '@/componentsCommonGui/labelDataReadOnly/LabelDataReadOnly.vue';
import NavigationCrudAsset                      from '@/routeNavigation/NavigationCrudAsset';

@Component({
  components: {
    EntityViewTemplateComponent,
    LabelDataReadOnly,
  },
})
export default class AssetView extends BaseViewPage<AssetExtendedModel> implements IComponentMetaData {

  // IComponentMetaData
  public componentName: string = 'Asset View';
  public componentDescription: string = 'Enables the user to view an Asset';
  // IComponentMetaData

  constructor() {
    super(
      new NavigationCrudAsset(),
      AssetRepositoryFactory.getRepository());

    this.model = new AssetExtendedModel();
  }

  public mounted() {
    super.mounted();
  }

  public onEdit() {
    super.onEdit();
  }

  public onRestore() {
    super.onRestore();
  }
}
