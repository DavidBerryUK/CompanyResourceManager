import { IComponentMetaData }                   from './../../components/interfaces/ComponentMetaDataInterfaces';
import { INavigationCrud }                      from '@/routeNavigation/interfaces/INavigationCrud';
import BasePage                                 from "./BasePage";
import ThemeSettings                            from '@/componentsCommonGui/theme/ThemeSettings';

export default class BaseListPage extends BasePage implements IComponentMetaData {

  //IComponentMetaData
  componentName: string = "BaseListPage";
  componentDescription: string = "BaseListPage";
  //IComponentMetaData

  listFilterText: string = "";

  navigationHandler : INavigationCrud;

  theme: ThemeSettings = new ThemeSettings();

  constructor( navigationHandler : INavigationCrud) {
    super();
    this.navigationHandler = navigationHandler;
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