import { IComponentMetaData }                   from './../../components/interfaces/ComponentMetaDataInterfaces';
import BasePage                                 from "./BasePage";

export default class BaseViewPage extends BasePage implements IComponentMetaData {

  //IComponentMetaData
  componentName: string = "BaseViewPage";
  componentDescription: string = "BaseViewPage";
  //IComponentMetaData

}