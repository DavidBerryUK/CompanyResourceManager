import { IComponentMetaData }                   from '@/components/interfaces/ComponentMetaDataInterfaces';
import BaseListPage                             from '@/componentsBusinessGui/base/BaseListPage';
import Component                                from 'vue-class-component';
import FilterButton                             from '@/componentsCommonGui/filterButton/FilterButton';
import FilterJobRoleService                     from '@/services/filters/JobRoleFilterService/FilterJobRoleService';
import JobRoleRepositoryFactory                 from '@/repositories/factory/JobRoleRepositoryFactory';
import JobRoleSummaryModel                      from '@/repositories/models/jobRole/JobRoleSummaryModel';
import Loader                                   from '@/componentsCommonGui/loader/Loader';
import NavigationCrudJobRole                    from '@/routeNavigation/NavigationCrudJobRole';
import ObjectArrayMapperJobRoleModel            from '@/repositories/objectMappers/jobRole/ObjectArrayMapperJobRoleModel';
import ObjectMapperJobRoleExtendedModel         from '@/repositories/objectMappers/jobRole/ObjectMapperJobRoleExtendedModel';


/**
 * Presents a list of Job Rols to the user that can be filtered
 * by record status (current,deleted or all)
 *
 * when a asset type is selected its details will be displayed
 */
@Component({
  components: {
    Loader,
    FilterButton,
  },
})
export default class JobRoleList extends BaseListPage<JobRoleSummaryModel> implements IComponentMetaData {

  // IComponentMetaData
  public componentName: string = 'Job Role List';
  public componentDescription: string = 'Displays a list of job roles';
  // IComponentMetaData

  constructor() {
    super(new NavigationCrudJobRole(),
      JobRoleRepositoryFactory.getRepository(),
      new ObjectMapperJobRoleExtendedModel(),
      new ObjectArrayMapperJobRoleModel(),
      new FilterJobRoleService());
  }

  // View has been mounted
  public mounted() {
    super.mounted();
  }

  // before the view is destroyed, it must unsubscribe from
  // any notifications
  public beforeDestroy() {
    super.beforeDestroy();
  }

  // When the filter button is pressed the filter dialog modal will be displayed
  // allowing the user to filter  the record types
  public onFilterClicked() {
    super.onFilterClicked();
  }

  // user has pressed the clear button on the text filter
  public onFilterClearClicked() {
    super.onFilterClearClicked();
  }

  // user pressed the add button to create a new job role
  public onAddClicked() {
    super.onAddClicked();
  }

  // a list item has been selected, navigate to the job role view screen
  public onSelectItem(item: JobRoleSummaryModel) {
    super.onSelectItem(item);
  }
}
