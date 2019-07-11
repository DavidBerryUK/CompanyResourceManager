import { EnumModalButton }                      from '../../../componentsCommonGui/dialogs/commonAppDialog/CommonAppDialogOptions';
import { EnumModalIcon }                        from '../../../componentsCommonGui/dialogs/commonAppDialog/CommonAppDialogOptions';
import { EnumModalWidth }                       from '../../../componentsCommonGui/dialogs/constants/StandardDialogWidth';
import { IComponentMetaData }                   from '../../../components/interfaces/ComponentMetaDataInterfaces';
import { IRouteBeforeNavigationCheck }          from '../../../router/interfaces/NavigationCheckInterfaces';
import { Prop }                                 from "vue-property-decorator";
import { ValidationMessage }                    from '../../../repositories/contracts/ApiResponseContract';
import { Watch }                                from "vue-property-decorator";
import BaseEditPage                             from '@/componentsBusinessGui/base/BaseEditPage';
import CommonAppDialogController                from '@/componentsCommonGui/dialogs/commonAppDialog/CommonAppDialogController';
import Component                                from "vue-class-component";
import ContractListener                         from '@/repositories/contracts/ContractListener';
import DeepObjectComparator                     from '@/services/objectComparison/DeepObjectComparator';
import FormEditHeader                           from '@/componentsCommonGui/formEditHeader/FormEditHeader';
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';
import JobRoleRepositoryFactory                 from '@/repositories/factory/JobRoleRepositoryFactory';
import LabelDataReadOnly                        from '@/componentsCommonGui/labelDataReadOnly/LabelDataReadOnly';
import ListItemModel                            from '@/repositories/models/shared/collections/ListItemModel';
import NavigationCrudPerson                     from '@/routeNavigation/NavigationCrudPerson';
import PersonModel                              from '@/repositories/models/person/PersonModel';
import PersonRepositoryFactory                  from '@/repositories/factory/PersonRepositoryFactory';

//
// attribute indicates this is a component, 
//  this is where any sub components are also registered
@Component({
  components: {
    LabelDataReadOnly,
    FormEditHeader
  }
})

export default class PersonEdit extends BaseEditPage<PersonModel> implements IRouteBeforeNavigationCheck, IComponentMetaData {

  //IComponentMetaData
  public componentName: string = "Person Edit";
  public componentDescription: string = "Enables the user to edit a Person";
  //IComponentMetaData

  @Prop() id!: string;

  jobRoleList: GenericCollectionModel<ListItemModel> = new GenericCollectionModel<ListItemModel>()
  // list of different person types, e.g. filling Stations, Superstore, Home goods
  //

  constructor() {
    super(new NavigationCrudPerson());
    this.model = new PersonModel();
    this.modelChangeTracker = new DeepObjectComparator(this.model);
  }

  // the component has mounted into the HTML DOM,
  //  load the data required for the page
  mounted() {
    this.loadModel();
  }
  //
  // Do a Deep watch on the person model to see if any
  // property has been updated
  // (watch does not work when moved to base class)
  @Watch("model", { deep: true })
  onModelChanged(newValue: PersonModel, oldValue: PersonModel) {
    // check to see if the object has returned to its original value
    //    
    this.modelChangeTracker.evaluateHasObjectChanged(this.model);
  }

  @Watch("id")
  onIdChanged(value: string, oldValue: string) {
    this.loadModel();
  }

  // the delete button has been pressed
  //
  onDelete() {

    //
    // ask the user to confirm they with to delete the person
    //
    var dialog = new CommonAppDialogController(this);
    dialog.createWithParameters(`Delete ${this.model.forename} ${this.model.surname}?`,
      "Are you sure you wish to Archive this Person?",
      EnumModalIcon.Question,
      EnumModalButton.YesNo,
      EnumModalWidth.FixedMedium)
      .yesPressed(() => {

        //
        // call api to deactivate the person , on success display the read only version
        //
        var apiPersonRepository = PersonRepositoryFactory.getRepository();
        apiPersonRepository.deactivate(this.model.personId)
          .onSuccess((data: PersonModel | null) => {
            this.navigationHandler.gotoViewPage(this, this.model.entityKey);
          }).onFailed((message: string) => {
            //
            // if failed, show user why
            //
            var dialog = new CommonAppDialogController(this);
            dialog.createWithParameters(
              `Delete ${this.model.entityValue}`,
              `Failed to delete person:${message}`,
              EnumModalIcon.Error,
              EnumModalButton.Ok,
              EnumModalWidth.FixedMedium).show();
          });

      }).show();
  }

  // the cancel button has been pressed by the user
  //
  onCancel() {
    this.navigationHandler.gotoViewPage(this, this.model.entityKey);
  }

  // the save button has been pressed by the users
  //
  onSave() {
    //
    // validate the page, is all is valid then save, otherwise
    // do nothing and wait for the user to correct the 
    // validation issues
    //
    this.$validator.validateAll().then((result) => {

      if (result) {
        // save data to server
        //
        var personRepository = PersonRepositoryFactory.getRepository();

        personRepository.save(this.model)
          .onSuccess((data: PersonModel) => {

            // reset the model change tracker, this will 
            // disable the save button

            this.modelChangeTracker.reset(data);
            this.navigationHandler.gotoViewPage(this, data.entityKey);
          })

          .onValidationErrorsRaised((validationMessages: Array<ValidationMessage>) => {
            this.addValidationErrors(validationMessages);
          })

          .onFailed((message: string) => {
            // public generic dialog
            //  letting the user know the
            //  save failed
            var dialog = new CommonAppDialogController(this);
            dialog.createWithParameters(
              `Save Product ${this.model.entityValue}`,
              `Failed to save :${message}`,
              EnumModalIcon.Error,
              EnumModalButton.Ok,
              EnumModalWidth.FixedMedium).show();
          })
      }
    });
  }

  //
  // model code away from logic / navigation code, 
  //  this allows re-use and prevents duplication
  //
  private loadModel() {

    var personRepository = PersonRepositoryFactory.getRepository();
    var jobRoleRepository = JobRoleRepositoryFactory.getRepository();

    //
    // when all the trailing repositories have finished then do this.
    //


    //
    // load the person for id
    //
    if (this.id == 'new') {
      //
      // if this is a create page, then just create a new person model, otherwise
      //  get a person via the API
      //
      this.model = new PersonModel();
      this.modelChangeTracker = new DeepObjectComparator(this.model);
      this.isLoading = false;
    }
    else {
      var listener = new ContractListener();

      listener.monitor()
        .onAllResponded(() => {
          this.isLoading = false;
        });


      jobRoleRepository
        .getActiveList()
        .onSuccess((list: GenericCollectionModel<ListItemModel>) => {
          this.jobRoleList = list
        })
        .contractListener(listener);

      personRepository
        .getById(this.id)
        .onSuccess((data: PersonModel | null) => {
          if (data != null) {
            this.model = data;
            this.modelChangeTracker = new DeepObjectComparator(this.model);
          }
        })
        .contractListener(listener);
    }
  }
}
