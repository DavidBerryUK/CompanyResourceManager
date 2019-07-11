import { IApiModel }                            from '@/repositories/models/interfaces/IApiModel';
import { IComponentMetaData }                   from './../../components/interfaces/ComponentMetaDataInterfaces';
import { INavigationCrud }                      from '@/routeNavigation/interfaces/INavigationCrud';
import { Prop }                                 from 'vue-property-decorator';
import { Watch }                                from 'vue-property-decorator';
import BasePage                                 from "./BasePage";

export default class BaseViewPage<T extends IApiModel> extends BasePage implements IComponentMetaData {

  @Prop() id!: string;  

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

  mounted() {
    console.log(`base mounted: id = ${this.id}`)
    this.retrieveData();    
  }

  @Watch("id")
  onIdChanged(value: string, oldValue: string) {
    console.log(`Watch ID:${value} ${oldValue}  ${this.id}`)
    this.retrieveData();
  }

  public retrieveData() {
  }

  onEdit() {
    this.navigationHandler.gotoEditPage(this,this.model.entityKey);
  }  
}