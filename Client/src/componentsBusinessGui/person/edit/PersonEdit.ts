import { EnumModalButton }                      from '../../../componentsCommonGui/dialogs/commonAppDialog/CommonAppDialogOptions';
import { EnumModalIcon }                        from '../../../componentsCommonGui/dialogs/commonAppDialog/CommonAppDialogOptions';
import { EnumModalWidth }                       from '../../../componentsCommonGui/dialogs/constants/StandardDialogWidth';
import { IComponentMetaData }                   from '../../../components/interfaces/ComponentMetaDataInterfaces';
import { IRouteBeforeNavigationCheck }          from '../../../router/interfaces/NavigationCheckInterfaces';
import { ValidationMessage }                    from '../../../repositories/contracts/ApiResponseContract';
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

  jobRoleList: GenericCollectionModel<ListItemModel> = new GenericCollectionModel<ListItemModel>()
  // list of different person types, e.g. filling Stations, Superstore, Home goods
  //

  constructor() {
    super(new NavigationCrudPerson(), PersonRepositoryFactory.getRepository());
    this.model = new PersonModel();
    this.modelChangeTracker = new DeepObjectComparator(this.model);
  }

  // the component has mounted into the HTML DOM,
  //  load the data required for the page
  mounted() {
    super.mounted();
  }

  // the cancel button has been pressed
  onCancel() {
    super.onCancel();
  }

  // the delete button has been pressed
  //
  onDelete() {
    super.onDelete();
  }

  // the save button has been pressed by the users
  //
  onSave() {
   super.onSave();
  }

  //
  // model code away from logic / navigation code, 
  //  this allows re-use and prevents duplication
  //
  retrieveData() {
    
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

      this.repository
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
