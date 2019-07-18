import { IApiModel }                            from '@/repositories/models/interfaces/IApiModel';
import { IComponentMetaData }                   from './../../components/interfaces/ComponentMetaDataInterfaces';
import { INavigationCrud }                      from '@/routeNavigation/interfaces/INavigationCrud';
import { IObjectArrayMapper }                   from '@/repositories/objectMappers/interfaces/IObjectArrayMapper';
import { IObjectMapper }                        from '@/repositories/objectMappers/interfaces/IObjectMapper';
import BasePage                                 from "./BasePage";
import GenericApiRepository                     from '@/repositories/apiBase/GenericApiRepository';
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';
import ListFilterDialogState                    from '@/componentsCommonGui/listFilterDialog/ListFilterDialogState';
import NotificationFactory                      from '@/services/notifications/NotificationFactory';
import ThemeSettings                            from '@/componentsCommonGui/theme/ThemeSettings';
import { IListFilterArchiveFlag }               from '@/repositories/models/listFilter/interfaces/IListFilterInterfaces';
import ListFilterWithArchiveFlag                from '@/repositories/models/listFilter/ListFilterWithArchiveFlag';

// S = Summary Record Type
export default class BaseListPage<S extends IApiModel> extends BasePage implements IComponentMetaData {

  //IComponentMetaData
  componentName: string = "BaseListPage";
  componentDescription: string = "BaseListPage";
  //IComponentMetaData

  listFilterText: string = "";
  summaryEntityName : string;

  filterModel : IListFilterArchiveFlag =  new ListFilterWithArchiveFlag();

  public repository : GenericApiRepository<S, any, any>;
  
  navigationHandler : INavigationCrud;
  objectArrayMapper : IObjectArrayMapper<S>;
  objectMapper : IObjectMapper<S>;

  // Primary list of data read via the API
  dataList: GenericCollectionModel<S>  = new GenericCollectionModel<S>();

   // the currently selected person
  selectedItem: S;

    // records the selected values in the filter dialog page
  dataListState: ListFilterDialogState = new ListFilterDialogState();

  theme: ThemeSettings = new ThemeSettings();

  constructor(  navigationHandler : INavigationCrud, 
              repository : GenericApiRepository<S, any, any>,
                objectMapper : IObjectMapper<S>,
                objectArrayMapper : IObjectArrayMapper<S>) {
    super();
    
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

  updateList(model: S, isNew: boolean) {
    
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
    this.navigationHandler.gotoViewPage(this,item.entityKey)    
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
}