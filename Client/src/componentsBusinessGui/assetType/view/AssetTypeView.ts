import AssetTypeExtendedModel                   from '@/repositories/models/assetType/AssetTypeExtendedModel';
import { IComponentMetaData }                   from '@/components/interfaces/ComponentMetaDataInterfaces';
import AssetTypeRepositoryFactory               from '@/repositories/factory/AssetTypeRepositoryFactory';
import BaseViewPage                             from '@/componentsBusinessGui/base/BaseViewPage';
import Component                                from 'vue-class-component';
import FormViewHeader                           from '@/componentsCommonGui/formViewHeader/FormViewHeader.vue';
import LabelDataReadOnly                        from '@/componentsCommonGui/labelDataReadOnly/LabelDataReadOnly.vue';
import NavigationCrudAssetType                  from '@/routeNavigation/NavigationCrudAssetType';

@Component({
  components: {
    FormViewHeader,
    LabelDataReadOnly,
  },
})
export default class AssetTypeView extends BaseViewPage<AssetTypeExtendedModel> implements IComponentMetaData {

  // IComponentMetaData
  public componentName: string = 'Asset Type View';
  public componentDescription: string = 'Enables the user to view an Asset Type';
  // IComponentMetaData

  constructor() {
    super(
      new NavigationCrudAssetType(),
      AssetTypeRepositoryFactory.getRepository() );

    this.model = new AssetTypeExtendedModel();
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
