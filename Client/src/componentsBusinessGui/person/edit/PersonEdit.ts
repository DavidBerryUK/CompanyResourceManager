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
import ObjectMapperPersonExtendedModel          from '@/repositories/objectMappers/person/ObjectMapperPersonExtendedModel';
import PersonExtendedModel                      from '@/repositories/models/person/PersonExtendedModel';
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
export default class PersonEdit extends BaseEditPage<PersonExtendedModel>
  implements IRouteBeforeNavigationCheck, IComponentMetaData {
  //IComponentMetaData
  public componentName: string = "Person Edit";
  public componentDescription: string = "Enables the user to edit a Person";
  //IComponentMetaData

  jobRoleList: GenericCollectionModel<
    ListItemModel
  > = new GenericCollectionModel<ListItemModel>();
  // list of different person types, e.g. filling Stations, Superstore, Home goods
  //

  constructor() {
    super(
      new NavigationCrudPerson(),
      PersonRepositoryFactory.getRepository(),
      new ObjectMapperPersonExtendedModel()
    );
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
  retrieveSecondaryData(contractListener: ContractListener) {
    var jobRoleRepository = JobRoleRepositoryFactory.getRepository();
    jobRoleRepository
      .getActiveList()
      .onSuccess((list: GenericCollectionModel<ListItemModel>) => {
        this.jobRoleList = list;
      })
      .contractListener(contractListener);
  }
}
