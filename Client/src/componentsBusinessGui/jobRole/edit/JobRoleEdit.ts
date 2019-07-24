import { IComponentMetaData }                   from '../../../components/interfaces/ComponentMetaDataInterfaces';
import { IRouteBeforeNavigationCheck }          from '../../../router/interfaces/NavigationCheckInterfaces';
import BaseEditPage                             from '@/componentsBusinessGui/base/BaseEditPage';
import Component                                from 'vue-class-component';
import EntityEditTemplateComponent              from '@/componentsCommonGui/entityEditTemplate/EntityEditTemplateComponent';
import FormEditHeader                           from '@/componentsCommonGui/formEditHeader/FormEditHeader';
import JobRoleRepositoryFactory                 from '@/repositories/factory/JobRoleRepositoryFactory';
import JobRoleSummaryModel                      from '@/repositories/models/jobRole/JobRoleSummaryModel';
import NavigationCrudJobRole                    from '@/routeNavigation/NavigationCrudJobRole';
import ObjectMapperFactoryJobRole               from '@/repositories/objectMappers/ObjectMapperFactoryJobRole';

//
// attribute indicates this is a component,
//  this is where any sub components are also registered
@Component({
  components: {
    EntityEditTemplateComponent,
    FormEditHeader,
  },
})
export default class JobRoleEdit extends BaseEditPage<JobRoleSummaryModel>
  implements IRouteBeforeNavigationCheck, IComponentMetaData {
  // IComponentMetaData
  public componentName: string = 'Job Role Edit';
  public componentDescription: string = 'Enables the user to edit a Job Role';
  // IComponentMetaData

  // list of different asset types types,
  //

  constructor() {
    super(
      new NavigationCrudJobRole(),
      JobRoleRepositoryFactory.getRepository(),
      ObjectMapperFactoryJobRole.createExtendedMapper());
  }

  // the form has been mounted into the DOM
  public mounted() {
    super.mounted();
  }

  // the cancel button has been pressed
  public onCancel() {
    super.onCancel();
  }

  // the delete button has been pressed
  //
  public onArchive() {
    super.onArchive();
  }

  // the save button has been pressed by the users
  //
  public onSave() {
    super.onSave();
  }
}
