import { IRouteBeforeNavigationCheck }          from '@/router/interfaces/NavigationCheckInterfaces';
import Component                                from 'vue-class-component';
import EntityLayoutPageTemplateComponent        from '@/componentsEntityLayouts/entityLayoutPageTemplate/EntityLayoutPageTemplateComponent';
import EntityPageBaseComponent                  from '@/componentsEntityLayouts/entityPageBase/EntityPageBaseComponent';
import EntityPageModelWithReferences            from '@/componentsEntityLayouts/models/EntityPageModelWithReferences';
import EntitySegmentSecurityGroupEditComponent  from '../segmentEdit/EntitySegmentSecurityGroupEditComponent';
import EntitySegmentSecurityGroupViewComponent  from '../segmentView/EntitySegmentSecurityGroupViewComponent';
import EntitySegmentViewEditControllerComponent from '@/componentsEntityLayouts/EntitySegmentViewEditController/EntitySegmentViewEditControllerComponent';
import ModelFactorySecurityGroupExtended        from '@/repositories/modelFactories/ModelFactorySecurityGroupExtended';
import NavigationCrudSecurityGroup              from '@/routeNavigation/NavigationCrudSecurityGroup';
import SecurityGroupExtendedModel               from '@/repositories/models/securityGroup/SecurityGroupExtendedModel';
import SecurityGroupRepositoryFactory           from '@/repositories/factory/SecurityGroupRepositoryFactory';

@Component({
  components: {
    EntityLayoutPageTemplateComponent,
    EntitySegmentSecurityGroupEditComponent,
    EntitySegmentSecurityGroupViewComponent,
    EntitySegmentViewEditControllerComponent,
  },
})
export default class EntityPageSecurityGroupComponent
  extends EntityPageBaseComponent<SecurityGroupExtendedModel, EntityPageModelWithReferences<SecurityGroupExtendedModel>>
  implements IRouteBeforeNavigationCheck {

  constructor() {
    super(
      new EntityPageModelWithReferences(),
      SecurityGroupRepositoryFactory.getRepository(),
      new ModelFactorySecurityGroupExtended(),
      new NavigationCrudSecurityGroup());

    this.entityModel.headerTitle = 'Security Group';
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
