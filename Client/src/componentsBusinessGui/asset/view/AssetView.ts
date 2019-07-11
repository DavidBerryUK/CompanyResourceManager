import { IComponentMetaData }                   from '@/components/interfaces/ComponentMetaDataInterfaces';
import AssetRepositoryFactory                   from '@/repositories/factory/AssetRepositoryFactory';
import AssetSummaryModel                        from '@/repositories/models/asset/AssetSummaryModel';
import BaseViewPage                             from '@/componentsBusinessGui/base/BaseViewPage';
import Component                                from "vue-class-component";
import FormViewHeader                           from '@/componentsCommonGui/formViewHeader/FormViewHeader.vue';
import LabelDataReadOnly                        from '@/componentsCommonGui/labelDataReadOnly/LabelDataReadOnly.vue';
import NavigationCrudAsset                      from '@/routeNavigation/NavigationCrudAsset';

@Component({
  components: {
    FormViewHeader,
    LabelDataReadOnly
  }
})
export default class AssetView extends BaseViewPage<AssetSummaryModel> implements IComponentMetaData {

  //IComponentMetaData
  public componentName : string = "Asset View";
  public componentDescription : string = "Enables the user to view an Asset";
  //IComponentMetaData
  
  constructor() {
    super(new NavigationCrudAsset(), AssetRepositoryFactory.getRepository())
    this.model = new AssetSummaryModel();
  }

  mounted() {
    super.mounted();
  }

  onEdit() {
    super.onEdit();
  }

  onRestore() {
    super.onRestore();
  }
}
