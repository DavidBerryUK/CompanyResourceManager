import { IComponentMetaData }                   from '@/components/interfaces/ComponentMetaDataInterfaces';
import BasePage                                 from '@/componentsBusinessGui/base/BasePage';
import Component                                from 'vue-class-component';
import FilterJobRoleService                     from '@/services/filters/JobRoleFilterService/FilterJobRoleService';
import JobRoleRepositoryFactory                 from '@/repositories/factory/JobRoleRepositoryFactory';
import JobRoleSummaryModel                      from '@/repositories/models/jobRole/JobRoleSummaryModel';
import ModelFactoryJobRoleSummary               from '@/repositories/modelFactories/jobRole/ModelFactoryJobRoleSummary';
import NavigationCrudJobRole                    from '@/routeNavigation/NavigationCrudJobRole';
import NavigationListComponent                  from '@/componentsCommonGui/navigationList/NavigationListComponent';
import NavigationListConfig                     from '@/componentsCommonGui/navigationList/NavigationListConfig';

/**
 * Presents a list of Job Role to the user that can be filtered
 * by record status (current,deleted or all)
 *
 * when a asset type is selected its details will be displayed
 */
@Component({
  components: {
    NavigationListComponent,
  },
})
export default class JobRoleList extends BasePage implements IComponentMetaData {

  // IComponentMetaData
  public componentName: string = 'Job Role List';
  public componentDescription: string = 'Displays a list of job roles';
  // IComponentMetaData

   // Create the configuration for development of the component
  //
  public listConfiguration: NavigationListConfig<JobRoleSummaryModel> =
    new NavigationListConfig<JobRoleSummaryModel>(
    'Job Roles',                                    // Title
    new NavigationCrudJobRole(),                    // People Navigation Provider
    JobRoleRepositoryFactory.getRepository(),       // People Repository Provider
    new ModelFactoryJobRoleSummary(),               // Map Java Object to Typescript People Object
    new FilterJobRoleService(),                     // Filter People list (user text search)
    (data: JobRoleSummaryModel) => `${data.name}`,  // Format of text for cell line 1 (header)
    (data: JobRoleSummaryModel) => ``,              // Format of text for cell line 2 (body)
    (data: JobRoleSummaryModel) => ``,              // Format of text for cell line 3 (footer)
  );

  public data(): any {
    return {};
  }

}
