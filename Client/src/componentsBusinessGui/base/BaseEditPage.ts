import { IApiModel }                            from '@/repositories/models/interfaces/IApiModel';
import { IComponentMetaData }                   from './../../components/interfaces/ComponentMetaDataInterfaces';
import { INavigationCrud }                      from '@/routeNavigation/interfaces/INavigationCrud';
import BasePage                                 from "./BasePage";
import DeepObjectComparator                     from "../../services/objectComparison/DeepObjectComparator"


export default class BaseEditPage<T extends IApiModel> extends BasePage implements IComponentMetaData {
  //IComponentMetaData
  public componentName: string = "BaseEditPage";
  public componentDescription: string = "BaseEditPage";
  //IComponentMetaData

  // track changes in the branch object
  //
  public modelChangeTracker!: DeepObjectComparator;
  public model!: T;

  navigationHandler : INavigationCrud;

  constructor( navigationHandler : INavigationCrud) {
    super();
    this.navigationHandler = navigationHandler;
  }
  
  // IRouteBeforeNavigationCheck
  //
  // this is called by the router before navigation to ensure its ok
  // to navigate away from this screen
  //
  canCloseComponentBeforeNavigation(): boolean {
    console.log("BaseEditPage:canCloseComponentBeforeNavigation()");
    if (this.modelChangeTracker != null) {
      return this.modelChangeTracker.isObjectSameAsOriginal;
    }
    return false
  }
  // IRouteBeforeNavigationCheck

   // the cancel button has been pressed by the user
  //
  onCancel() {
    this.navigationHandler.gotoViewPage(this, this.model.entityKey);
  }

}
