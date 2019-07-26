import { IComponentMetaData }                   from '../../../components/interfaces/ComponentMetaDataInterfaces';
import { IRouteBeforeNavigationCheck }          from '../../../router/interfaces/NavigationCheckInterfaces';
import BaseEditPage                             from '@/componentsBusinessGui/base/BaseEditPage';
import Component                                from 'vue-class-component';
import EntityEditTemplateComponent              from '@/componentsCommonGui/entityEditTemplate/EntityEditTemplateComponent';
import FormEditHeader                           from '@/componentsCommonGui/formEditHeader/FormEditHeader';
import ModelMapperFactoryTeam                   from '@/repositories/modelMappers/ModelMapperFactoryTeam';
import NavigationCrudJobRole                    from '@/routeNavigation/NavigationCrudJobRole';
import TeamRepositoryFactory                    from '@/repositories/factory/TeamRepositoryFactory';
import TeamSummaryModel                         from '@/repositories/models/team/TeamSummaryModel';

//
// attribute indicates this is a component,
//  this is where any sub components are also registered
@Component({
  components: {
    EntityEditTemplateComponent,
    FormEditHeader,
  },
})
export default class TeamEdit extends BaseEditPage<TeamSummaryModel>
  implements IRouteBeforeNavigationCheck, IComponentMetaData {
  // IComponentMetaData
  public componentName: string = 'Team Edit';
  public componentDescription: string = 'Enables the user to edit a Team';
  // IComponentMetaData

  // list of different skill types,
  //

  constructor() {
    super(
      new NavigationCrudJobRole(),
      TeamRepositoryFactory.getRepository(),
      ModelMapperFactoryTeam.createExtendedMapper());
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
