import { IRouteBeforeNavigationCheck }          from '@/router/interfaces/NavigationCheckInterfaces';
import Component                                from 'vue-class-component';
import ContactTypeRepositoryFactory             from '@/repositories/factory/ContactTypeRepositoryFactory';
import ContactTypeSummaryModel                  from '@/repositories/models/contactType/ContactTypeSummaryModel';
import ContractListener                         from '@/repositories/contracts/ContractListener';
import EntityLayoutPageTemplateComponent        from '@/componentsEntityLayouts/entityLayoutPageTemplate/EntityLayoutPageTemplateComponent';
import EntityPageBaseComponent                  from '@/componentsEntityLayouts/entityPageBase/EntityPageBaseComponent';
import EntityPageModelWithReferences            from '@/componentsEntityLayouts/models/EntityPageModelWithReferences';
import EntitySegmentContactTypeEditComponent    from '../segmentEdit/EntitySegmentContactTypeEditComponent';
import EntitySegmentContactTypeViewComponent    from '../segmentView/EntitySegmentContactTypeViewComponent';
import EntitySegmentViewEditControllerComponent from '@/componentsEntityLayouts/EntitySegmentViewEditController/EntitySegmentViewEditControllerComponent';
import ModelFactoryContactTypeSummary           from '@/repositories/modelFactories/contact/ModelFactoryContactTypeSummary';
import NavigationCrudContactType                from '@/routeNavigation/NavigationCrudContactType';
import ContactValidationRepositoryFactory       from '@/repositories/factory/ContactValidationRepositoryFactory';
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';
import ListItemModel                            from '@/repositories/models/ListItem/ListItemModel';


@Component({
  components: {
    EntityLayoutPageTemplateComponent,
    EntitySegmentContactTypeEditComponent,
    EntitySegmentContactTypeViewComponent,
    EntitySegmentViewEditControllerComponent,
  },
})
export default class EntityPageContactTypeComponent
  extends EntityPageBaseComponent<ContactTypeSummaryModel, EntityPageModelWithReferences<ContactTypeSummaryModel>>
  implements IRouteBeforeNavigationCheck {

  constructor() {
    super(
      new EntityPageModelWithReferences(),
      ContactTypeRepositoryFactory.getRepository(),
      new ModelFactoryContactTypeSummary(),
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

    // load additional data,
  //
  public retrieveSecondaryData(contractListener: ContractListener) {
    // Load Job Role List
    //
    const jobRoleRepository = ContactValidationRepositoryFactory.getRepository();
    jobRoleRepository
      .getActiveList()
      .onSuccess((list: GenericCollectionModel<ListItemModel>) => {
        this.entityModel.jobRolesList = list.items;
      })
      .contractListener(contractListener);
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
