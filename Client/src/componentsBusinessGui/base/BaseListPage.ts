import { EnumModalWidth }                       from '@/componentsCommonGui/dialogs/constants/StandardDialogWidth';
import { IApiModel }                            from '@/repositories/models/interfaces/IApiModel';
import { IComponentMetaData }                   from './../../components/interfaces/ComponentMetaDataInterfaces';
import { IListFilterArchiveFlag }               from '@/repositories/models/listFilter/interfaces/IListFilterInterfaces';
import { IListFilterByText }                    from './../../services/filters/interfaces/FilterInterfaces';
import { INavigationCrud }                      from '@/routeNavigation/interfaces/INavigationCrud';
import { IObjectArrayMapper }                   from '@/repositories/objectMappers/interfaces/IObjectArrayMapper';
import { IObjectMapper }                        from '@/repositories/objectMappers/interfaces/IObjectMapper';
import { MaterialDesignColor }                  from '@/services/colors/materialDesign/constants/MaterialDesignColors';
import BasePage                                 from "./BasePage";
import CommonAppDialogController                from '@/componentsCommonGui/dialogs/commonAppDialog/CommonAppDialogController';
import CommonAppDialogOptions                   from '@/componentsCommonGui/dialogs/commonAppDialog/CommonAppDialogOptions';
import GenericApiRepository                     from '@/repositories/apiBase/GenericApiRepository';
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';
import ListFilterDialogState                    from '@/componentsCommonGui/listFilterDialog/ListFilterDialogState';
import ListFiltersDialog                        from '@/componentsCommonGui/listFilterDialog/ListFiltersDialog.vue';
import ListFiltersDialogCode                    from '@/componentsCommonGui/listFilterDialog/ListFiltersDialog';
import ListFilterWithArchiveFlag                from '@/repositories/models/listFilter/ListFilterWithArchiveFlag';
import NotificationFactory                      from '@/services/notifications/NotificationFactory';
import ThemeSettings                            from '@/componentsCommonGui/theme/ThemeSettings';

// S = Summary Record Type
export default class BaseListPage<S extends IApiModel> extends BasePage implements IComponentMetaData {

  //IComponentMetaData
  componentName: string = "BaseListPage";
  componentDescription: string = "BaseListPage";
  //IComponentMetaData

  filterListService: IListFilterByText<S>
  listFilterText: string = "";
  summaryEntityName: string;

  filterModel: IListFilterArchiveFlag = new ListFilterWithArchiveFlag();

  public repository: GenericApiRepository<S, any, any>;

  navigationHandler: INavigationCrud;
  objectArrayMapper: IObjectArrayMapper<S>;
  objectMapper: IObjectMapper<S>;

  // Primary list of data read via the API
  dataList: GenericCollectionModel<S> = new GenericCollectionModel<S>();

  // the currently selected person
  selectedItem: S;

  // records the selected values in the filter dialog page
  dataListState: ListFilterDialogState = new ListFilterDialogState();

  theme: ThemeSettings = new ThemeSettings();

  constructor(navigationHandler: INavigationCrud,
    repository: GenericApiRepository<S, any, any>,
    objectMapper: IObjectMapper<S>,
    objectArrayMapper: IObjectArrayMapper<S>,
    filterListService: IListFilterByText<S>) {
    super();

    this.filterListService = filterListService,
      this.repository = repository;
    this.navigationHandler = navigationHandler;
    this.objectMapper = objectMapper;
    this.objectArrayMapper = objectArrayMapper
    this.selectedItem = this.objectMapper.map({})
    this.dataList.items = this.objectArrayMapper.map([]);
    this.summaryEntityName = this.objectMapper.map({}).entityName;
  }

  beforeDestroy() {
    NotificationFactory.unsubscribeFromAll(this);
  }
  //
  // View has been mounted
  //
  mounted() {
    this.listenToModelUpdates();
    this.getData();
  }

  // function used to style items in the list, the currently
  // selected item will have a different coloured background
  itemStyle(item: S): string {
    if (item.entityKey == this.selectedItem.entityKey) {
      return "teal accent-1";
    }
    return "";
  }

  //
  //
  //
  private listenToModelUpdates() {
    NotificationFactory.instance.getNotificationInstance<S>(this.summaryEntityName)
      .onItemCreated(this, (model: S) => {
        this.updateList(model, true);
      })
      .onItemUpdated(this, (model: S) => {
        this.updateList(model, false);
      })
      .onItemDeleted(this, (model: S) => {
        this.updateList(model, false);
      })
      .onItemActivated(this, (model: S) => {
        this.updateList(model, false);
      })
      .onItemDeactivated(this, (model: S) => {
        this.updateList(model, false);
      });
  }



  getData() {
    this.isLoading = true;

    this.repository.getFilteredList(this.filterModel)
      .onSuccess((itemList: GenericCollectionModel<S>) => {
        this.dataList = itemList;
        this.isLoading = false;
      })
      .onFailed((errorMessage: string) => {
        this.isLoading = false;
        console.log(`getData  for entity ${this.summaryEntityName} - failed to get data`);
        console.log(errorMessage);
      });
  }

  //
  // user pressed the add button to create a new person
  //
  onAddClicked() {
    this.navigationHandler.gotoNewPage(this);
  }

  onFilterClearClicked() {
    this.listFilterText = "";
  }

  onSelectItem(item: S) {
    this.selectedItem = item;
    this.navigationHandler.gotoViewPage(this, item.entityKey)
  }

  //
  // Navigation checks, required to enable events to reach the parent layout
  //
  beforeRouteEnter(from: any, to: any, next: any) {
    console.log("BaseListPage:beforeRouteEnter()");
    next();
  }

  beforeRouteUpdate(from: any, to: any, next: any) {
    console.log("BaseListPage:beforeRouteUpdate()");
    return next();
  }

  beforeRouteLeave(from: any, to: any, next: any) {
    console.log("BaseListPage:beforeRouteLeave()");
    next();
  }

  //
  // asset filtering with rankings, the code for this has been separated out into its own class 
  // 1) was making the view class too complex
  // 2) allows reuse of some nice code
  // 3) filtering is more business logic than display logic
  //
  get filteredList(): GenericCollectionModel<S> {
    return this.filterListService.filterWithRankings("", this.dataList)
  }

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
        //  and any filters by branch type
        this.filterModel.recordActiveStatusFilter = this.dataListState.recordActivityStatus;
        this.getData();
      })
      .show();
  }

  updateList(model: S, isNew: boolean) {
    if (isNew) {
      this.dataList.addItem(model);
      this.selectedItem = model;
    }
    this.dataList.updateItem(this, model, (item) => { return model.entityKey == item.entityKey })
    this.dataList.sortAscByString((a, b) => { return { a: a.entitySortValue, b: b.entitySortValue } });
  }
}