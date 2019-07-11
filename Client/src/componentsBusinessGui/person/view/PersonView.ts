import { EnumModalButton }                      from '@/componentsCommonGui/dialogs/commonAppDialog/CommonAppDialogOptions';
import { EnumModalIcon }                        from '@/componentsCommonGui/dialogs/commonAppDialog/CommonAppDialogOptions';
import { EnumModalWidth }                       from '@/componentsCommonGui/dialogs/constants/StandardDialogWidth';
import { IComponentMetaData }                   from '@/components/interfaces/ComponentMetaDataInterfaces';
import { ValidationMessage }                    from '@/repositories/contracts/ApiResponseContract';
import BaseViewPage                             from '@/componentsBusinessGui/base/BaseViewPage';
import CommonAppDialogController                from '@/componentsCommonGui/dialogs/commonAppDialog/CommonAppDialogController';
import Component                                from "vue-class-component";
import FormViewHeader                           from '@/componentsCommonGui/formViewHeader/FormViewHeader.vue';
import LabelDataReadOnly                        from '@/componentsCommonGui/labelDataReadOnly/LabelDataReadOnly.vue';
import NavigationCrudPerson                     from '@/routeNavigation/NavigationCrudPerson';
import PersonModel                              from '@/repositories/models/person/PersonModel';
import PersonRepositoryFactory                  from '@/repositories/factory/PersonRepositoryFactory';

@Component({
  components: {
    FormViewHeader,
    LabelDataReadOnly
  }
})
export default class PersonView extends BaseViewPage<PersonModel> implements IComponentMetaData {

  //IComponentMetaData
  public componentName : string = "Person View";
  public componentDescription : string = "Enables the user to view a Person";
  //IComponentMetaData
  
  constructor() {
    super(new NavigationCrudPerson(), PersonRepositoryFactory.getRepository());   
    this.model = new PersonModel();
  }

  mounted() {
    super.mounted()
  }

  onEdit() {
    super.onEdit()
  }

  onRestore() {

    //
    // ask the user to confirm they with to restore the person
    //
    var dialog = new CommonAppDialogController(this);
    dialog.createWithParameters(`Restore ${this.model.forename} ${this.model.surname}?`,
                                "Are you sure you wish to make this person active again?",
                                EnumModalIcon.Question,
                                EnumModalButton.YesNo,
                                EnumModalWidth.FixedMedium)
      .yesPressed(() => {

        //
        // call api to restore the person, on success display the read only version
        //
        var apiPersonRepository = PersonRepositoryFactory.getRepository()
        apiPersonRepository
          .activate(this.model.personId)
          .onSuccess((data: PersonModel | null) => {
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
            dialog.createWithParameters(`Restore ${this.model.personId}`,
                                        `Failed to restore person:${message}`,
                                        EnumModalIcon.Error,
                                        EnumModalButton.Ok,
                                        EnumModalWidth.FixedMedium)
                    .show();
          });

      }).show();
  }

}
