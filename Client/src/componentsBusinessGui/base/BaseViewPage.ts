import { EnumModalButton }                      from '@/componentsCommonGui/dialogs/commonAppDialog/CommonAppDialogOptions';
import { EnumModalIcon }                        from '@/componentsCommonGui/dialogs/commonAppDialog/CommonAppDialogOptions';
import { EnumModalWidth }                       from '@/componentsCommonGui/dialogs/constants/StandardDialogWidth';
import { IApiModel }                            from '@/repositories/models/interfaces/IApiModel';
import { IComponentMetaData }                   from '@/components/interfaces/ComponentMetaDataInterfaces';
import { INavigationCrud }                      from '@/routeNavigation/interfaces/INavigationCrud';
import { Prop }                                 from 'vue-property-decorator';
import { ValidationMessage }                    from '@/repositories/contracts/ApiResponseContract';
import { Watch }                                from 'vue-property-decorator';
import BasePage                                 from "./BasePage";
import CommonAppDialogController                from '@/componentsCommonGui/dialogs/commonAppDialog/CommonAppDialogController';
import GenericApiRepository                     from '@/repositories/apiBase/GenericApiRepository';

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

  onRestore() {

    //
    // ask the user to confirm they with to restore the asset type
    //
    var dialog = new CommonAppDialogController(this);
    dialog.createWithParameters(`Restore ${this.model.entityName} ?`,
                                `Are you sure you wish to make ${this.model.entityValue} active again?`,
                                EnumModalIcon.Question,
                                EnumModalButton.YesNo,
                                EnumModalWidth.FixedMedium)
      .yesPressed(() => {

        //
        // call api to restore the asset type, on success display the read only version
        //        
        this.repository
          .activate(this.model.entityKey)
          .onSuccess((data: T | null) => {
            if ( data)
            {
              this.model = data;
            }
            
          })
          .onValidationErrorsRaised((validationMessages: Array<ValidationMessage>) => {
            this.addValidationErrors(validationMessages);
          })
          .onFailed((message: string) => {
            //
            // if failed, show user why
            //
            var dialog = new CommonAppDialogController(this);
            dialog.createWithParameters(`Restore ${this.model.entityName}`,
                                        `Failed to restore ${this.model.entityName} :${message}`,
                                        EnumModalIcon.Error,
                                        EnumModalButton.Ok,
                                        EnumModalWidth.FixedMedium)
                    .show();
          });

      }).show();
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