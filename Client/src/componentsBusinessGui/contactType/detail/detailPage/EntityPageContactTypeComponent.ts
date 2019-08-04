import { IRouteBeforeNavigationCheck }          from '@/router/interfaces/NavigationCheckInterfaces';
import Component                                from 'vue-class-component';
import ContactTypeExtendedModel                 from '@/repositories/models/contactType/ContactTypeExtendedModel';
import ContactTypeRepositoryFactory             from '@/repositories/factory/ContactTypeRepositoryFactory';
import EntityLayoutPageTemplateComponent        from '@/componentsEntityLayouts/entityLayoutPageTemplate/EntityLayoutPageTemplateComponent';
import EntityPageBaseComponent                  from '../../../../componentsEntityLayouts/entityPageBase/EntityPageBaseComponent';
import EntityPageModelWithReferences            from '@/componentsEntityLayouts/models/EntityPageModelWithReferences';
import EntitySegmentContactTypeEditComponent    from '../segmentEdit/EntitySegmentContactTypeEditComponent';
import EntitySegmentContactTypeViewComponent    from '../segmentView/EntitySegmentContactTypeViewComponent';
import EntitySegmentViewEditControllerComponent from '@/componentsEntityLayouts/EntitySegmentViewEditController/EntitySegmentViewEditControllerComponent';
import ModelFactoryContactTypeExtended          from '@/repositories/modelFactories/ModelFactoryContactTypeExtended';
import NavigationCrudContactType                from '@/routeNavigation/NavigationCrudContactType';


@Component({
  components: {
    EntityLayoutPageTemplateComponent,
    EntitySegmentContactTypeEditComponent,
    EntitySegmentContactTypeViewComponent,
    EntitySegmentViewEditControllerComponent,
  },
})
export default class EntityPageContactTypeComponent
  extends EntityPageBaseComponent<ContactTypeExtendedModel, EntityPageModelWithReferences<ContactTypeExtendedModel>>
  implements IRouteBeforeNavigationCheck {

  constructor() {
    super(
      new EntityPageModelWithReferences(),
      ContactTypeRepositoryFactory.getRepository(),
      new ModelFactoryContactTypeExtended(),
      new NavigationCrudContactType());

    this.entityModel.headerTitle = 'Contact Types';
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
