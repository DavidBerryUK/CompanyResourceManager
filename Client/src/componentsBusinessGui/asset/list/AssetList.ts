import { IComponentMetaData }                   from '@/components/interfaces/ComponentMetaDataInterfaces';
import AssetRepositoryFactory                   from '@/repositories/factory/AssetRepositoryFactory';
import AssetSummaryModel                        from '@/repositories/models/asset/AssetSummaryModel';
import BaseListPage                             from '@/componentsBusinessGui/base/BaseListPage';
import Component                                from 'vue-class-component';
import FilterAssetSummaryService                from '@/services/filters/assetSummaryFilterService/FilterAssetSummaryService';
import FilterButton                             from '@/componentsCommonGui/filterButton/FilterButton';
import Loader                                   from '@/componentsCommonGui/loader/Loader';
import NavigationCrudAsset                      from '@/routeNavigation/NavigationCrudAsset';
import ObjectArrayMapperAssetSummaryModel       from '@/repositories/objectMappers/asset/ObjectArrayMapperAssetSummaryModel';
import ObjectMapperAssetExtendedModel           from '@/repositories/objectMappers/asset/ObjectMapperAssetExtendedModel';

/**
 * Presents a list of assets to the user that can be filtered
 * by record status (current,deleted or all)
 * when a asset is selected its details will be displayed
 * @export
 * @class AssetTypeList
 * @extends {BaseListPage}
 * @implements {IComponentMetaData}
 */
@Component({
  components: {
    Loader,
    FilterButton,
  },
})
export default class AssetList extends BaseListPage<AssetSummaryModel> implements IComponentMetaData {

  // IComponentMetaData
  public componentName: string = 'Asset List';
  public componentDescription: string = 'Displays a list of Assets';
  // IComponentMetaData

  constructor() {
    super(new NavigationCrudAsset(),
      AssetRepositoryFactory.getRepository(),
      new ObjectMapperAssetExtendedModel(),
      new ObjectArrayMapperAssetSummaryModel(),
      new FilterAssetSummaryService());
  }

  // View has been mounted
  public mounted() {
    super.mounted();
  }

  // before the view is destroyed, it must unsubscribe from
  // any notifications
  public beforeDestroy() {
    super.beforeDestroy();
  }

  // When the filter button is pressed the filter dialog modal will be displayed
  // allowing the user to filter the record type
  public onFilterClicked() {
    super.onFilterClicked();
  }

  // user has pressed the clear button on the text filter
  public onFilterClearClicked() {
    super.onFilterClearClicked();
  }

  // user pressed the add button to create a new asset
  public onAddClicked() {
    super.onAddClicked();
  }

  // a list item has been selected, navigate to the asset  view screen
  public onSelectItem(item: AssetSummaryModel) {
    super.onSelectItem(item);
  }
}
