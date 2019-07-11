import { IComponentMetaData }                   from '../../../components/interfaces/ComponentMetaDataInterfaces';
import { IRouteBeforeNavigationCheck }          from '../../../router/interfaces/NavigationCheckInterfaces';
import BaseEditPage                             from '@/componentsBusinessGui/base/BaseEditPage';
import Component                                from "vue-class-component";
import ContractListener                         from '@/repositories/contracts/ContractListener';
import FormEditHeader                           from '@/componentsCommonGui/formEditHeader/FormEditHeader';
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';
import JobRoleRepositoryFactory                 from '@/repositories/factory/JobRoleRepositoryFactory';
import LabelDataReadOnly                        from '@/componentsCommonGui/labelDataReadOnly/LabelDataReadOnly';
import ListItemModel                            from '@/repositories/models/shared/collections/ListItemModel';
import NavigationCrudPerson                     from '@/routeNavigation/NavigationCrudPerson';
import ObjectMapperPerson                       from '@/repositories/objectMappers/person/ObjectMapperPerson';
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

  // reference data, each person has a job role
  jobRoleList: GenericCollectionModel<ListItemModel> = new GenericCollectionModel<ListItemModel>()
  
  constructor() {
    super(new NavigationCrudPerson(),
      PersonRepositoryFactory.getRepository(),
      new ObjectMapperPerson());
  }

  // the component has mounted into the HTML DOM,
  mounted() {
    super.mounted();
  }

  // the cancel button has been pressed
  onCancel() {
    super.onCancel();
  }

  // the delete button has been pressed
  //
  onArchive() {
    super.onArchive();
  }

  // the save button has been pressed by the users
  //
  onSave() {
    super.onSave();
  }

  // load additional data,
  //
  retrieveSecondaryData(constractListener: ContractListener) {

    var jobRoleRepository = JobRoleRepositoryFactory.getRepository();
    jobRoleRepository
      .getActiveList()
      .onSuccess((list: GenericCollectionModel<ListItemModel>) => {
        this.jobRoleList = list
      })
      .contractListener(constractListener);
  }
}
