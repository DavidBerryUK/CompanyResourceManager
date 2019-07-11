import { IApiModel }                            from '@/repositories/models/interfaces/IApiModel';
import { IComponentMetaData }                   from './../../components/interfaces/ComponentMetaDataInterfaces';
import { INavigationCrud }                      from '@/routeNavigation/interfaces/INavigationCrud';
import BasePage                                 from "./BasePage";

export default class BaseViewPage<T extends IApiModel> extends BasePage implements IComponentMetaData {


  public model!: T;

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