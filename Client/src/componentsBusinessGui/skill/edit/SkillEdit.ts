import { IComponentMetaData }                   from '../../../components/interfaces/ComponentMetaDataInterfaces';
import { IRouteBeforeNavigationCheck }          from '../../../router/interfaces/NavigationCheckInterfaces';
import BaseEditPage                             from '@/componentsBusinessGui/base/BaseEditPage';
import Component                                from 'vue-class-component';
import EntityEditTemplateComponent              from '@/componentsCommonGui/entityEditTemplate/EntityEditTemplateComponent';
import FormEditHeader                           from '@/componentsCommonGui/formEditHeader/FormEditHeader';
import NavigationCrudJobRole                    from '@/routeNavigation/NavigationCrudJobRole';
import ObjectMapperFactorySkill                 from '@/repositories/objectMappers/ObjectMapperFactorySkill';
import SkillRepositoryFactory                   from '@/repositories/factory/SkillRepositoryFactory';
import SkillSummaryModel                        from '@/repositories/models/skill/SkillSummaryModel';

//
// attribute indicates this is a component,
//  this is where any sub components are also registered
@Component({
  components: {
    EntityEditTemplateComponent,
    FormEditHeader,
  },
})
export default class SkillEdit extends BaseEditPage<SkillSummaryModel>
  implements IRouteBeforeNavigationCheck, IComponentMetaData {
  // IComponentMetaData
  public componentName: string = 'Skill Edit';
  public componentDescription: string = 'Enables the user to edit a Skill';
  // IComponentMetaData

  // list of different skill types,
  //

  constructor() {
    super(
      new NavigationCrudJobRole(),
      SkillRepositoryFactory.getRepository(),
      ObjectMapperFactorySkill.createExtendedMapper());
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
