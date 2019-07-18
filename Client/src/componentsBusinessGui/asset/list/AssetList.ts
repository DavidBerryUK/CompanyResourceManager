import { EnumModalWidth }                       from '@/componentsCommonGui/dialogs/constants/StandardDialogWidth';
import { IComponentMetaData }                   from '@/components/interfaces/ComponentMetaDataInterfaces';
import { MaterialDesignColor }                  from '@/services/colors/materialDesign/constants/MaterialDesignColors';
import AssetRepositoryFactory                   from '@/repositories/factory/AssetRepositoryFactory';
import AssetSummaryModel                        from '@/repositories/models/asset/AssetSummaryModel';
import BaseListPage                             from '@/componentsBusinessGui/base/BaseListPage';
import CommonAppDialogController                from '@/componentsCommonGui/dialogs/commonAppDialog/CommonAppDialogController';
import CommonAppDialogOptions                   from '@/componentsCommonGui/dialogs/commonAppDialog/CommonAppDialogOptions';
import Component                                from "vue-class-component";
import FilterAssetSummaryService                from '@/services/filters/assetSummaryFilterService/FilterAssetSummaryService';
import FilterButton                             from '@/componentsCommonGui/filterButton/FilterButton';
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';
import ListFiltersDialog                        from '@/componentsCommonGui/listFilterDialog/ListFiltersDialog.vue';
import ListFiltersDialogCode                    from '@/componentsCommonGui/listFilterDialog/ListFiltersDialog';
import Loader                                   from '@/componentsCommonGui/loader/Loader';
import NavigationCrudAsset                      from '@/routeNavigation/NavigationCrudAsset';
import ObjectArrayMapperAssetSummaryModel       from '@/repositories/objectMappers/asset/ObjectArrayMapperAssetSummaryModel';
import ObjectMapperAssetExtendedModel           from '@/repositories/objectMappers/asset/ObjectMapperAssetExtendedModel';

/**
 * Presents a list of categories to the user that can be filtered
 * by record status (current,deleted or all)
 * 
 * when a asset is selected its details will be displayed
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
export default class AssetList extends BaseListPage<AssetSummaryModel> implements IComponentMetaData {

  //IComponentMetaData
  componentName: string = "Asset List";
  componentDescription: string = "Displays a list of Assets";
  //IComponentMetaData
  
  constructor() {
    super(  new NavigationCrudAsset(), 
            AssetRepositoryFactory.getRepository(),
            new ObjectMapperAssetExtendedModel(),
            new ObjectArrayMapperAssetSummaryModel())
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
   * allowing the user to filter the record type
   * 
   * @memberof PersonList
   */
  onFilterClicked() {

    // Create view to show in the dialog
    //
    var dialog = new ListFiltersDialog();
    var dialogCode = <ListFiltersDialogCode>dialog;
    dialogCode.themeColor = MaterialDesignColor.blue;
    dialogCode.initialStateOnLoad = this.dataListState;
    
    // Create Dialog Options
    //
    var options = new CommonAppDialogOptions();
    options.title = "Filter Categories";
    options.dialogWidth = EnumModalWidth.FixedMedium;
    options.themeColor = MaterialDesignColor.blue;    
    var appDialog = new CommonAppDialogController(this);

    // display the dialog box
    //    
    appDialog.createWithOptionsObject(options)
      .supplyCustomBody(() => { 
        return dialog 
      })
      .okPressed(() => {

        // record filter settings made by the user
        this.dataListState = dialogCode.state;

        //
        // update filter model for api, supply record state required (active, inactive, all)
        //  and any filters by asset
        this.filterModel.recordActiveStatusFilter = this.dataListState.recordActivityStatus;
        this.getData();
      })
      .show();
  }

  //
  // user has pressed the clear button on the text filter
  //
  onFilterClearClicked() {
    super.onFilterClearClicked();
  }

  //
  // user pressed the add button to create a new asset 
  //
  onAddClicked() {
    super.onAddClicked();
  }

  //
  // a list item has been selected, navigate to the asset  view screen
  //
  onSelectItem(item: AssetSummaryModel) {
    super.onSelectItem(item);
  }

  /**
   * update the list items with a refresh version of the
   * item after it has been edited
   * @private
   * @param {string} listItemId
   * @param {boolean} isNew - if this is a new item, it is injected into the list array
   * @memberof PersonList
   */
  updateList(model: AssetSummaryModel, isNew: boolean) {
    if (isNew) {
      this.dataList.addItem(model);
      this.selectedItem = model;
    }
    this.dataList.updateItem(this, model, (item) => { return model.assetId == item.assetId })
    this.dataList.sortAscByString((a, b) => { return { a: a.name, b: b.name } });
  }



  //
  // asset filtering with rankings, the code for this has been separated out into its own class 
  // 1) was making the view class too complex
  // 2) allows reuse of some nice code
  // 3) filtering is more business logic than display logic
  //
  get filteredList(): GenericCollectionModel<AssetSummaryModel> {
     var filterListService = new FilterAssetSummaryService();
     return filterListService.filterWithRankings("",this.dataList)
  }

}
