import { IRouteBeforeNavigationCheck }          from '@/router/interfaces/NavigationCheckInterfaces';
import Component                                from 'vue-class-component';
import EntityLayoutPageTemplateComponent        from '@/componentsEntityLayouts/entityLayoutPageTemplate/EntityLayoutPageTemplateComponent';
import EntityPageBaseComponent                  from '../../../../componentsEntityLayouts/entityPageBase/EntityPageBaseComponent';
import EntityPageModelWithReferences            from '@/componentsEntityLayouts/models/EntityPageModelWithReferences';
import EntitySegmentJobRoleEditComponent        from '../segmentEdit/EntitySegmentJobRoleEditComponent';
import EntitySegmentJobRoleViewComponent        from '../segmentView/EntitySegmentJobRoleViewComponent';
import EntitySegmentViewEditControllerComponent from '@/componentsEntityLayouts/EntitySegmentViewEditController/EntitySegmentViewEditControllerComponent';
import JobRoleExtendedModel                     from '@/repositories/models/jobRole/JobRoleExtendedModel';
import JobRoleRepositoryFactory                 from '@/repositories/factory/JobRoleRepositoryFactory';
import ModelFactoryJobRoleExtended              from '@/repositories/modelFactories/jobRole/ModelFactoryJobRoleExtended';
import NavigationCrudJobRole                    from '@/routeNavigation/NavigationCrudJobRole';

@Component({
  components: {
    EntityLayoutPageTemplateComponent,
    EntitySegmentJobRoleEditComponent,
    EntitySegmentJobRoleViewComponent,
    EntitySegmentViewEditControllerComponent,
  },
})
export default class EntityPageJobRoleComponent
  extends EntityPageBaseComponent<JobRoleExtendedModel, EntityPageModelWithReferences<JobRoleExtendedModel>>
  implements IRouteBeforeNavigationCheck {

  constructor() {
    super(
      new EntityPageModelWithReferences(),
      JobRoleRepositoryFactory.getRepository(),
      new ModelFactoryJobRoleExtended(),
      new NavigationCrudJobRole());

    this.entityModel.headerTitle = 'Job Roles';
    this.entityModel.canArchive = true;
  }

  public onCancel() {
    super.onCancel();
  }

  public onEditBegins() {
    super.onEditBegins();
  }

  public onSave() {
    super.onSave();
  }

  public onArchive() {
    super.onArchive();
  }

  public onRestore() {
    super.onRestore();
  }
}
