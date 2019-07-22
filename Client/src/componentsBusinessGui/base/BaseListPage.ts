import { EnumModalWidth }                       from '@/componentsCommonGui/dialogs/constants/StandardDialogWidth';
import { IApiModel }                            from '@/repositories/models/interfaces/IApiModel';
import { IComponentMetaData }                   from './../../components/interfaces/ComponentMetaDataInterfaces';
import { IListFilterArchiveFlag }               from '@/repositories/models/listFilter/interfaces/IListFilterInterfaces';
import { IListFilterByText }                    from './../../services/filters/interfaces/FilterInterfaces';
import { INavigationCrud }                      from '@/routeNavigation/interfaces/INavigationCrud';
import { IObjectArrayMapper }                   from '@/repositories/objectMappers/interfaces/IObjectArrayMapper';
import { IObjectMapper }                        from '@/repositories/objectMappers/interfaces/IObjectMapper';
import { MaterialDesignColor }                  from '@/services/colors/materialDesign/constants/MaterialDesignColors';
import BasePage                                 from './BasePage';
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

  // IComponentMetaData
  public componentName: string = 'BaseListPage';
  public componentDescription: string = 'BaseListPage';
  // IComponentMetaData

  public filterListService: IListFilterByText<S>;
  public listFilterText: string = '';
  public summaryEntityName: string;

  public filterModel: IListFilterArchiveFlag = new ListFilterWithArchiveFlag();

  public repository: GenericApiRepository<S, any, any>;

  public navigationHandler: INavigationCrud;
  public objectArrayMapper: IObjectArrayMapper<S>;
  public objectMapper: IObjectMapper<S>;

  // Primary list of data read via the API
  public dataList: GenericCollectionModel<S> = new GenericCollectionModel<S>();

  // the currently selected person
  public selectedItem: S;

  // records the selected values in the filter dialog page
  public dataListState: ListFilterDialogState = new ListFilterDialogState();

  public theme: ThemeSettings = new ThemeSettings();

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
    this.objectArrayMapper = objectArrayMapper;
    this.selectedItem = this.objectMapper.map({});
    this.dataList.items = this.objectArrayMapper.map([]);
    this.summaryEntityName = this.objectMapper.map({}).entityName;
  }

  public beforeDestroy() {
    NotificationFactory.unsubscribeFromAll(this);
  }
  //
  // View has been mounted
  //
  public mounted() {
    this.listenToModelUpdates();
    this.getData();
  }

  // function used to style items in the list, the currently
  // selected item will have a different coloured background
  public itemStyle(item: S): string {
    if (item.entityKey === this.selectedItem.entityKey) {
      return 'teal accent-1';
    }
    return '';
  }

  // a model in the list has been updated, this routine wil synchronise
  // the new data model with the existing list, removing the need to perform
  // more i/o operations
  public updateList(model: S, isNew: boolean) {
    if (isNew) {
      this.dataList.addItem(model);
      this.selectedItem = model;
    }
    this.dataList.updateItem(this, model, (item) => model.entityKey === item.entityKey);
    this.dataList.sortAscByString((a, b) => ({ a: a.entitySortValue, b: b.entitySortValue }));
  }

  // obtain list via repository from the server
  public getData() {
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

  // data filter with rankings, the code for this has been separated out into its own class
  // 1) was making the view class too complex
  // 2) allows reuse of some nice code
  // 3) filtering is more business logic than display logic
  // 4) the filter class can passed to components
  //
  get filteredList(): GenericCollectionModel<S> {
    console.log('BaseListPage:filtered list');
    return this.filterListService.filterWithRankings(this.listFilterText, this.dataList);
  }

  //
  // user pressed the add button to create a new person
  //
  public onAddClicked() {
    this.navigationHandler.gotoNewPage(this);
  }

  public onFilterClearClicked() {
    this.listFilterText = '';
  }

  public onSelectItem(item: S) {
    this.selectedItem = item;
    this.navigationHandler.gotoViewPage(this, item.entityKey);
  }

  public onFilterClicked() {

    // Create view to show in the dialog
    //
    const dialog = new ListFiltersDialog();
    const dialogCode = dialog as ListFiltersDialogCode;
    dialogCode.themeColor = MaterialDesignColor.blue;
    dialogCode.initialStateOnLoad = this.dataListState;

    // Create Dialog Options
    //
    const options = new CommonAppDialogOptions();
    options.title = 'Filter Categories';
    options.dialogWidth = EnumModalWidth.FixedMedium;
    options.themeColor = MaterialDesignColor.blue;
    const appDialog = new CommonAppDialogController(this);

    // display the dialog box
    appDialog.createWithOptionsObject(options)
      .supplyCustomBody(() => {
        return dialog;
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

  //
  // Navigation checks, required to enable events to reach the parent layout
  //
  public beforeRouteEnter(from: any, to: any, next: any) {
    console.log('BaseListPage:beforeRouteEnter()');
    next();
  }

  public beforeRouteUpdate(from: any, to: any, next: any) {
    console.log('BaseListPage:beforeRouteUpdate()');
    return next();
  }

  public beforeRouteLeave(from: any, to: any, next: any) {
    console.log('BaseListPage:beforeRouteLeave()');
    next();
  }

  // Recieve notification from the generic repository, the repo
  // issues notification when a record has successfully updated via the
  // api
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
}
