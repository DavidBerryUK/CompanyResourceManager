import { IComponentMetaData }                   from '@/components/interfaces/ComponentMetaDataInterfaces';
import AssetTypeRepositoryFactory               from '@/repositories/factory/AssetTypeRepositoryFactory';
import AssetTypeSummmaryModel                   from '@/repositories/models/assetType/AssetTypeSummaryModel';
import BaseListPage                             from '@/componentsBusinessGui/base/BaseListPage';
import Component                                from "vue-class-component";
import FilterAssetTypeService                   from '@/services/filters/assetTypeFilterService/FilterAssetTypeService';
import FilterButton                             from '@/componentsCommonGui/filterButton/FilterButton';
import Loader                                   from '@/componentsCommonGui/loader/Loader';
import NavigationCrudAssetType                  from '@/routeNavigation/NavigationCrudAssetType';
import ObjectArrayMapperAssetTypeModel          from '@/repositories/objectMappers/assetType/ObjectArrayMapperAssetTypeModel';
import ObjectMapperAssetTypeSummaryModel        from '@/repositories/objectMappers/assetType/ObjectMapperAssetTypeSummaryModel';

/**
 * Presents a list of categories to the user that can be filtered
 * by record status (current,deleted or all)
 * 
 * when a asset type is selected its details will be displayed
 * 
 * @export
 * @class AssetTypeList
 * @extends {BaseListPage}
 * @implements {IComponentMetaData}
 */
@Component({
  components: {
    Loader,
    FilterButton
  }
})
export default class AssetTypeList extends BaseListPage<AssetTypeSummmaryModel> implements IComponentMetaData {

  //IComponentMetaData
  componentName: string = "Asset Type List";
  componentDescription: string = "Displays a list of asset types";
  //IComponentMetaData


  constructor() {
    super(  new NavigationCrudAssetType(),              // Navigation Handler
            AssetTypeRepositoryFactory.getRepository(), // Repository to get list Asset via Api
            new ObjectMapperAssetTypeSummaryModel(),    // Converts list of java objects list of AssetTypeSummary objects
            new ObjectArrayMapperAssetTypeModel(),      // Converts a single java object to a AssetTypeSummary object
            new FilterAssetTypeService())               // Filters list of list of AssetTypeSummary
  }

  //
  // View has been mounted
  //
  mounted() {
    super.mounted();
  }

  // before the view is destroyed, it must unsubscribe from
  // any notifications
  beforeDestroy() {
    super.beforeDestroy();
  }
    /**
   * When the filter button is pressed the filter dialog modal will be displayed
   * allowing the user to filter  the record types
   * 
   * @memberof PersonList
   */
  onFilterClicked() {
    super.onFilterClicked();
  }

  //
  // user has pressed the clear button on the text filter
  //
  onFilterClearClicked() {
    super.onFilterClearClicked();
  }

  //
  // user pressed the add button to create a new asset type
  //
  onAddClicked() {
    super.onAddClicked();
  }

  //
  // a list item has been selected, navigate to the asset type view screen
  //
  onSelectItem(item: AssetTypeSummmaryModel) {
    super.onSelectItem(item);
  }

}
