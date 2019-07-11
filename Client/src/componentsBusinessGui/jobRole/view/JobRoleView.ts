import { EnumModalButton }                      from '@/componentsCommonGui/dialogs/commonAppDialog/CommonAppDialogOptions';
import { EnumModalIcon }                        from '@/componentsCommonGui/dialogs/commonAppDialog/CommonAppDialogOptions';
import { EnumModalWidth }                       from '@/componentsCommonGui/dialogs/constants/StandardDialogWidth';
import { IComponentMetaData }                   from '@/components/interfaces/ComponentMetaDataInterfaces';
import { Prop }                                 from "vue-property-decorator";
import { ValidationMessage }                    from '@/repositories/contracts/ApiResponseContract';
import { Watch }                                from "vue-property-decorator";
import BaseViewPage                             from '@/componentsBusinessGui/base/BaseViewPage';
import CommonAppDialogController                from '@/componentsCommonGui/dialogs/commonAppDialog/CommonAppDialogController';
import Component                                from "vue-class-component";
import FormViewHeader                           from '@/componentsCommonGui/formViewHeader/FormViewHeader.vue';
import JobRoleModel                             from '@/repositories/models/jobRole/JobRoleModel';
import JobRoleRepositoryFactory                 from '@/repositories/factory/JobRoleRepositoryFactory';
import LabelDataReadOnly                        from '@/componentsCommonGui/labelDataReadOnly/LabelDataReadOnly.vue';
import NavigationCrudJobRole                    from '@/routeNavigation/NavigationCrudJobRole';

@Component({
  components: {
    FormViewHeader,
    LabelDataReadOnly
  }
})
export default class JobRoleView extends BaseViewPage implements IComponentMetaData {

  //IComponentMetaData
  public componentName : string = "Asset Type View";
  public componentDescription : string = "Enables the user to view an Asset Type";
  //IComponentMetaData

  @Prop() id!: string;
  model: JobRoleModel = new JobRoleModel();
  
  constructor() {
    super(new NavigationCrudJobRole());   
  }

  mounted() {
    this.showItemDetails();    
  }

  @Watch("id")
  onIdChanged(value: string, oldValue: string) {
    this.showItemDetails();
  }

  onEdit() {
    this.navigationHandler.gotoEditPage(this,this.model.entityKey);
  }  

  onRestore() {

    //
    // ask the user to confirm they with to restore the asset type
    //
    var dialog = new CommonAppDialogController(this);
    dialog.createWithParameters(`Restore ${this.model.name} ?`,
                                "Are you sure you wish to make this Job Role active again?",
                                EnumModalIcon.Question,
                                EnumModalButton.YesNo,
                                EnumModalWidth.FixedMedium)
      .yesPressed(() => {

        //
        // call api to restore the asset type, on success display the read only version
        //
        var apiPersonRepository = JobRoleRepositoryFactory.getRepository();
        apiPersonRepository
          .activate(this.model.jobRoleId)
          .onSuccess((data: JobRoleModel | null) => {
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
            dialog.createWithParameters(`Restore ${this.model.name}`,
                                        `Failed to restore job role :${message}`,
                                        EnumModalIcon.Error,
                                        EnumModalButton.Ok,
                                        EnumModalWidth.FixedMedium)
                    .show();
          });

      }).show();
  }

  private showItemDetails() {
    var repository = JobRoleRepositoryFactory.getRepository();

    repository
      .getById(this.id)
      .onSuccess((data: JobRoleModel | null) => {

        if (data !== null) {
          this.model = data as JobRoleModel;
        }
        this.$forceUpdate();
      });

  }
}
