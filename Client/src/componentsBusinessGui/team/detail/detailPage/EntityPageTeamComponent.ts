import { IRouteBeforeNavigationCheck }          from '@/router/interfaces/NavigationCheckInterfaces';
import Component                                from 'vue-class-component';
import EntityLayoutPageTemplateComponent        from '@/componentsEntityLayouts/entityLayoutPageTemplate/EntityLayoutPageTemplateComponent';
import EntityPageBaseComponent                  from '@/componentsEntityLayouts/entityPageBase/EntityPageBaseComponent';
import EntityPageModelWithReferences            from '@/componentsEntityLayouts/models/EntityPageModelWithReferences';
import EntitySegmentTeamEditComponent           from '../segmentEdit/EntitySegmentTeamEditComponent';
import EntitySegmentTeamViewComponent           from '../segmentView/EntitySegmentTeamViewComponent';
import EntitySegmentViewEditControllerComponent from '@/componentsEntityLayouts/EntitySegmentViewEditController/EntitySegmentViewEditControllerComponent';
import ModelFactoryTeamExtended                 from '@/repositories/modelFactories/ModelFactoryTeamExtended';
import TeamExtendedModel                        from '@/repositories/models/team/TeamExtendedModel';
import TeamRepositoryFactory                    from '@/repositories/factory/TeamRepositoryFactory';

@Component({
  components: {
    EntityLayoutPageTemplateComponent,
    EntitySegmentTeamEditComponent,
    EntitySegmentTeamViewComponent,
    EntitySegmentViewEditControllerComponent,
  },
})
export default class EntityPageTeamComponent
  extends EntityPageBaseComponent<TeamExtendedModel, EntityPageModelWithReferences<TeamExtendedModel>>
  implements IRouteBeforeNavigationCheck {

  constructor() {
    super(
      new EntityPageModelWithReferences(),
      TeamRepositoryFactory.getRepository(),
      new ModelFactoryTeamExtended());

    this.entityModel.headerTitle = 'Team';
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
