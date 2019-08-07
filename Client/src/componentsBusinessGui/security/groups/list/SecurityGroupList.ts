
import { IComponentMetaData }                   from '@/components/interfaces/ComponentMetaDataInterfaces';
import BasePage                                 from '@/componentsBusinessGui/base/BasePage';
import Component                                from 'vue-class-component';
import FilterSecurityGroupService               from '@/services/filters/SecurityFilters/FilterSecurityGroupService';
import ModelFactorySecurityGroupSummary         from '@/repositories/modelFactories/securityGroup/ModelFactorySecurityGroupSummary';
import NavigationCrudSecurityGroup              from '@/routeNavigation/NavigationCrudSecurityGroup';
import NavigationListComponent                  from '@/componentsCommonGui/navigationList/NavigationListComponent';
import NavigationListConfig                     from '@/componentsCommonGui/navigationList/NavigationListConfig';
import SecurityGroupRepositoryFactory           from '@/repositories/factory/SecurityGroupRepositoryFactory';
import SecurityGroupSummaryModel                from '@/repositories/models/securityGroup/SecurityGroupSummaryModel';

/**
 * Presents a list of Job Rols to the user that can be filtered
 * by record status (current,deleted or all)
 *
 * when a asset type is selected its details will be displayed
 */
@Component({
  components: {
    NavigationListComponent,
  },
})
export default class SecurityGroupList extends BasePage implements IComponentMetaData {

  // IComponentMetaData
  public componentName: string = 'Security Group List';
  public componentDescription: string = 'Displays a list of Security Groups';
  // IComponentMetaData

   // Create the configuration for development of the component
  //
  public listConfiguration: NavigationListConfig<SecurityGroupSummaryModel> =
    new NavigationListConfig<SecurityGroupSummaryModel>(
    'Security Groups',                                          // Title
    new NavigationCrudSecurityGroup(),                          // Security Group Navigation Provider
    SecurityGroupRepositoryFactory.getRepository(),             // Security Group Repository Provider
    new ModelFactorySecurityGroupSummary(),                     // Map Java Object to Typescript Security Group Object
    new FilterSecurityGroupService(),                           // Filter Security Group list (user text search)
    (data: SecurityGroupSummaryModel) => `${data.name}`,        // Format of text for cell line 1 (header)
    (data: SecurityGroupSummaryModel) => `${data.description}`, // Format of text for cell line 2 (body)
    (data: SecurityGroupSummaryModel) => ``,                    // Format of text for cell line 3 (footer)
  );

  public data(): any {
    return {};
  }

}
