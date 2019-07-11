import GenericApiRepository                     from '@/repositories/apiBase/GenericApiRepository';
import { IApiModel }                            from '@/repositories/models/interfaces/IApiModel';
import { IComponentMetaData }                   from './../../components/interfaces/ComponentMetaDataInterfaces';
import { INavigationCrud }                      from '@/routeNavigation/interfaces/INavigationCrud';
import { Prop }                                 from 'vue-property-decorator';
import { Watch }                                from 'vue-property-decorator';
import BasePage                                 from "./BasePage";

export default class BaseViewPage<T extends IApiModel> extends BasePage implements IComponentMetaData {

  @Prop() id!: string;  

  public model!: T;

  public repository : GenericApiRepository<T, any, any>

  //IComponentMetaData
  componentName: string = "BaseViewPage";
  componentDescription: string = "BaseViewPage";
  //IComponentMetaData

  navigationHandler : INavigationCrud;

  constructor( navigationHandler : INavigationCrud, repository : GenericApiRepository<T, any, any>) {
    super();
    this.navigationHandler = navigationHandler;
    this.repository = repository;
  }

  // the first page load for this entity
  mounted() {
    this.retrieveData();    
  }

  // listen to when the id changes and display the new selected entity.
  // Note that the page is not reloaded when a new entity (e.g. person) is navigated to
  @Watch("id")
  onIdChanged(value: string, oldValue: string) {    
    this.retrieveData();
  }

  
    
  public retrieveData() {
  

    this.repository
      .getById(this.id)
      .onSuccess((data) => {

        if (data !== null) {
          this.model = data as T;
        }
        this.$forceUpdate();
      });
  }


  // when the user pressed the edit button, navigate to the
  // edit screen
  public onEdit() {
    this.navigationHandler.gotoEditPage(this,this.model.entityKey);
  }  
}