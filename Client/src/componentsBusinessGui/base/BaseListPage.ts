import { IApiModel }                            from '@/repositories/models/interfaces/IApiModel';
import { IComponentMetaData }                   from './../../components/interfaces/ComponentMetaDataInterfaces';
import { INavigationCrud }                      from '@/routeNavigation/interfaces/INavigationCrud';
import { IObjectArrayMapper }                   from '@/repositories/objectMappers/interfaces/IObjectArrayMapper';
import { IObjectMapper }                        from '@/repositories/objectMappers/interfaces/IObjectMapper';
import BasePage                                 from "./BasePage";
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';
import ThemeSettings                            from '@/componentsCommonGui/theme/ThemeSettings';
import ListFilterDialogState                    from '@/componentsCommonGui/listFilterDialog/ListFilterDialogState';

export default class BaseListPage<T extends IApiModel> extends BasePage implements IComponentMetaData {

  //IComponentMetaData
  componentName: string = "BaseListPage";
  componentDescription: string = "BaseListPage";
  //IComponentMetaData

  listFilterText: string = "";

  
  navigationHandler : INavigationCrud;
  objectArrayMapper : IObjectArrayMapper<T>
  objectMapper : IObjectMapper<T>

  // Primary list of data read via the API
  dataList: GenericCollectionModel<T>  = new GenericCollectionModel<T>();

   // the currently selected person
   selectedItem: T;

    // records the selected values in the filter dialog page
  dataListState: ListFilterDialogState = new ListFilterDialogState();

  theme: ThemeSettings = new ThemeSettings();

  constructor(  navigationHandler : INavigationCrud, 
                objectMapper : IObjectMapper<T>,
                objectArrayMapper : IObjectArrayMapper<T>) {
    super();
    this.navigationHandler = navigationHandler;
    this.objectMapper = objectMapper;
    this.objectArrayMapper = objectArrayMapper
    this.selectedItem = this.objectMapper.map({})
    this.dataList.items = this.objectArrayMapper.map([]);
  }

    // function used to style items in the list, the currently
  // selected item will have a different coloured background
  itemStyle(item: T): string {
    if (item.entityKey == this.selectedItem.entityKey) {
      return "teal accent-1";
    }
    return "";
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