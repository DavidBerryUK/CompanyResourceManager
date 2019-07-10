import { IComponentMetaData }                   from './../../components/interfaces/ComponentMetaDataInterfaces';
import BasePage                                 from "./BasePage";
import DeepObjectComparator                     from "../../services/objectComparison/DeepObjectComparator"


export default class BaseEditPage<T> extends BasePage implements IComponentMetaData {
  //IComponentMetaData
  public componentName: string = "BaseEditPage";
  public componentDescription: string = "BaseEditPage";
  //IComponentMetaData

  // track changes in the branch object
  //
  public modelChangeTracker!: DeepObjectComparator;
  public model!: T;

  // IRouteBeforeNavigationCheck
  //
  // this is called by the router before navigation to ensure its ok
  // to navigate away from this screen
  //
  canCloseComponentBeforeNavigation(): boolean {
    if (this.modelChangeTracker != null) {
      return this.modelChangeTracker.isObjectSameAsOriginal;
    }
    return false
  }
  // IRouteBeforeNavigationCheck

}
