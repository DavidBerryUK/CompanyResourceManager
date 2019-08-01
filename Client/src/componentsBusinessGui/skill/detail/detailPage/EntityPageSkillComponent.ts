import { IRouteBeforeNavigationCheck }          from '@/router/interfaces/NavigationCheckInterfaces';
import Component                                from 'vue-class-component';
import EntityLayoutPageTemplateComponent        from '@/componentsEntityLayouts/entityLayoutPageTemplate/EntityLayoutPageTemplateComponent';
import EntityPageBaseComponent                  from '../../../../componentsEntityLayouts/entityPageBase/EntityPageBaseComponent';
import EntityPageModelWithReferences            from '@/componentsEntityLayouts/models/EntityPageModelWithReferences';
import EntitySegmentSkillEditComponent          from '../segmentEdit/EntitySegmentSkillEditComponent';
import EntitySegmentSkillViewComponent          from '../segmentView/EntitySegmentSkillViewComponent';
import EntitySegmentViewEditControllerComponent from '@/componentsEntityLayouts/EntitySegmentViewEditController/EntitySegmentViewEditControllerComponent';
import SkillExtendedModel                       from '@/repositories/models/skill/SkillExtendedModel';
import SkillRepositoryFactory                   from '@/repositories/factory/SkillRepositoryFactory';
import ModelFactorySkillExtended                from '@/repositories/modelFactories/ModelFactorySkillExtended';


@Component({
  components: {
    EntityLayoutPageTemplateComponent,
    EntitySegmentSkillEditComponent,
    EntitySegmentSkillViewComponent,
    EntitySegmentViewEditControllerComponent,
  },
})
export default class EntityPageSkillComponent
  extends EntityPageBaseComponent<SkillExtendedModel, EntityPageModelWithReferences<SkillExtendedModel>>
  implements IRouteBeforeNavigationCheck {

  constructor() {
    super(
      new EntityPageModelWithReferences(),
      SkillRepositoryFactory.getRepository(),
      new ModelFactorySkillExtended());

    this.entityModel.headerTitle = 'Skill';
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
