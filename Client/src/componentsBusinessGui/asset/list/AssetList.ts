import { EnumModalWidth }                       from '@/componentsCommonGui/dialogs/constants/StandardDialogWidth';
import { IComponentMetaData }                   from '@/components/interfaces/ComponentMetaDataInterfaces';
import { MaterialDesignColor }                  from '@/services/colors/materialDesign/constants/MaterialDesignColors';
import AssetRepositoryFactory                   from '@/repositories/factory/AssetRepositoryFactory';
import AssetSummaryListFilterParametersModel    from '@/repositories/models/asset/AssetSummaryListFilterParametersModal';
import AssetSummaryModel                        from '@/repositories/models/asset/AssetSummaryModel';
import BaseListPage                             from '@/componentsBusinessGui/base/BaseListPage';
import CommonAppDialogController                from '@/componentsCommonGui/dialogs/commonAppDialog/CommonAppDialogController';
import CommonAppDialogOptions                   from '@/componentsCommonGui/dialogs/commonAppDialog/CommonAppDialogOptions';
import Component                                from "vue-class-component";
import FilterAssetSummaryService                from '@/services/filters/assetSummaryFilterService/FilterAssetSummaryService';
import FilterButton                             from '@/componentsCommonGui/filterButton/FilterButton';
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';
import ListFilterDialogState                    from '@/componentsCommonGui/listFilterDialog/ListFilterDialogState';
import ListFiltersDialog                        from '@/componentsCommonGui/listFilterDialog/ListFiltersDialog.vue';
import ListFiltersDialogCode                    from '@/componentsCommonGui/listFilterDialog/ListFiltersDialog';
import Loader                                   from '@/componentsCommonGui/loader/Loader';
import NavigationAsset                          from '@/router/navigationHelpers/NavigationAsset';
import NotificationFactory                      from '@/services/notifications/NotificationFactory';

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
export default class AssetList extends BaseListPage implements IComponentMetaData {

  //IComponentMetaData
  componentName: string = "Asset List";
  componentDescription: string = "Displays a list of Assets";
  //IComponentMetaData

  // if variables are to be tracked by VueJs they must
  // have an initial value on initialization
  //



  // records the selected values in the filter dialog page
  dataListState: ListFilterDialogState = new ListFilterDialogState();

  // list of asset returned by ApiAssetTypeRepository
  dataList: GenericCollectionModel<AssetSummaryModel> = new GenericCollectionModel<AssetSummaryModel>();

  // the currently selected asset Type
  selectedItem: AssetSummaryModel = new AssetSummaryModel();
  filterModel : AssetSummaryListFilterParametersModel =  new AssetSummaryListFilterParametersModel();


  //
  // View has been mounted
  //
  mounted() {
    this.listenToModelUpdates();
    this.getData();
  }

  // before the view is destroyed, it must unsubscribe from
  // any notifications
  beforeDestroy() {
    NotificationFactory.unsubscribeFromAll(this);
  }

  // function used to style items in the list, the currently
  // selected item will have a different coloured background
  itemStyle(item: AssetSummaryModel): string {
    if (item.assetId == this.selectedItem.assetId) {
      return "teal accent-1";
    }
    return "";
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
    this.listFilterText = "";
  }

  //
  // user pressed the add button to create a new asset 
  //
  onAddClicked() {
    NavigationAsset.gotoNewPage(this);    
  }

  //
  // a list item has been selected, navigate to the asset  view screen
  //
  onSelectItem(item: AssetSummaryModel) {
    this.selectedItem = item;
    NavigationAsset.gotoViewPage(this,item.assetId)    
  }

  //
  // listen to updates
  //
  private listenToModelUpdates() {

    NotificationFactory.instance.getNotificationInstance<AssetSummaryModel>(new AssetSummaryModel().entityName)
      .onItemCreated(this, (model: AssetSummaryModel) => {
        this.updateList(model, true);
      })
      .onItemUpdated(this, (model: AssetSummaryModel) => {
        this.updateList(model, false);
      })
      .onItemDeleted(this, (model: AssetSummaryModel) => {
        this.updateList(model, false);
      })
      .onItemActivated(this, (model: AssetSummaryModel) => {
        this.updateList(model, false);
      })
      .onItemDeactivated(this, (model: AssetSummaryModel) => {
        this.updateList(model, false);
      });
  }

  /**
   * update the list items with a refresh version of the
   * item after it has been edited
   * @private
   * @param {string} listItemId
   * @param {boolean} isNew - if this is a new item, it is injected into the list array
   * @memberof PersonList
   */
  private updateList(model: AssetSummaryModel, isNew: boolean) {
    if (isNew) {
      this.dataList.addItem(model);
      this.selectedItem = model;
    }
    this.dataList.updateItem(this, model, (item) => { return model.assetId == item.assetId })
    this.dataList.sortAscByString((a, b) => { return { a: a.name, b: b.name } });
  }


  /**
   * get asset data from the server using the 
   * current filters
   *
   * @private
   * @memberof CategoryList
   */
  private getData() {

    var repository = AssetRepositoryFactory.getRepository();
    this.isLoading = true;

    repository.getFilteredList(this.filterModel)
      .onSuccess((itemList: GenericCollectionModel<AssetSummaryModel>) => {        
        this.dataList = itemList;
        this.isLoading = false;
      })
      .onFailed((errorMessage: string) => {
        this.isLoading = false;
        console.log("Asset List:getData:failed to get data");
        console.log(errorMessage);
      });

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
