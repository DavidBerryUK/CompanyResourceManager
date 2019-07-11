import { IComponentMetaData }                   from './../../components/interfaces/ComponentMetaDataInterfaces';
import { INavigationCrud }                      from '@/routeNavigation/interfaces/INavigationCrud';
import BasePage                                 from "./BasePage";

export default class BaseViewPage extends BasePage implements IComponentMetaData {

  //IComponentMetaData
  componentName: string = "BaseViewPage";
  componentDescription: string = "BaseViewPage";
  //IComponentMetaData

  navigationHandler : INavigationCrud;

  constructor( navigationHandler : INavigationCrud) {
    super();
    this.navigationHandler = navigationHandler;
  }
}