import { EnumListCompomentTitle }               from '@/componentsCommonGui/listItem/ListItemComponentEnums';
import { EnumListComponentStyle }               from '@/componentsCommonGui/listItem/ListItemComponentEnums';
import { EnumListComponentValueDisplay }        from '@/componentsCommonGui/listItem/ListItemComponentEnums';
import { EnumListTextFilter }                   from '@/componentsCommonGui/listItem/ListItemComponentEnums';
import { EnumRepositoryDataSource }             from '@/repositories/listRepository/ListRepositoryEnum';
import { EnumRepositoryListMode }               from '@/repositories/listRepository/ListRepositoryEnum';
import Component                                from 'vue-class-component';
import ContractListener                         from '@/repositories/contracts/ContractListener';
import EntityLayoutPageTemplateComponent        from '@/componentsEntityLayouts/entityLayoutPageTemplate/EntityLayoutPageTemplateComponent';
import EntityPageBaseComponent                  from './EntityPageBaseComponent';
import EntityPageModelWithReferences            from '@/componentsEntityLayouts/models/EntityPageModelWithReferences';
import EntitySegmentPersonEdit                  from '../entitySegmentPersonEdit/EntitySegmentPersonEditComponent';
import EntitySegmentPersonView                  from '../entitySegmentPersonView/EntitySegmentPersonViewComponent';
import EntitySegmentViewEditControllerComponent from '@/componentsEntityLayouts/EntitySegmentViewEditController/EntitySegmentViewEditControllerComponent';
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';
import JobRoleRepositoryFactory                 from '@/repositories/factory/JobRoleRepositoryFactory';
import ListItemModel                            from '@/repositories/models/listitem/ListItemModel';
import ModelFactoryPersonExtended               from '@/repositories/modelFactories/ModelFactoryPersonExtended';
import PersonExtendedModel                      from '@/repositories/models/person/PersonExtendedModel';
import PersonRepositoryFactory                  from '@/repositories/factory/PersonRepositoryFactory';


@Component({
  components: {
    EntityLayoutPageTemplateComponent,
    EntitySegmentPersonEdit,
    EntitySegmentPersonView,
    EntitySegmentViewEditControllerComponent,
  },
})
export default class EntityPagePersonComponent extends EntityPageBaseComponent<PersonExtendedModel, EntityPageModelWithReferences<PersonExtendedModel>> {

  public EnumListCompomentTitle = EnumListCompomentTitle;
  public EnumListComponentStyle = EnumListComponentStyle;
  public EnumListComponentValueDisplay = EnumListComponentValueDisplay;
  public EnumListTextFilter = EnumListTextFilter;
  public EnumRepositoryDataSource = EnumRepositoryDataSource;
  public EnumRepositoryListMode = EnumRepositoryListMode;

  constructor() {
    super(
      new EntityPageModelWithReferences(),
      PersonRepositoryFactory.getRepository(),
      new ModelFactoryPersonExtended());

    this.entityModel.headerTitle = 'Person';
    this.entityModel.canArchive = true;
  }

  // load additional data,
  //
  public retrieveSecondaryData(contractListener: ContractListener) {
    // Load Job Role List
    //
    const jobRoleRepository = JobRoleRepositoryFactory.getRepository();
    jobRoleRepository
      .getActiveList()
      .onSuccess((list: GenericCollectionModel<ListItemModel>) => {
        this.entityModel.jobRolesList = list.items;
      })
      .contractListener(contractListener);
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
