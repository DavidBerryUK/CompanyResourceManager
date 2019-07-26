import { IComponentMetaData }                   from '@/components/interfaces/ComponentMetaDataInterfaces';
import BasePage                                 from '@/componentsBusinessGui/base/BasePage';
import Component                                from 'vue-class-component';
import FilterTeamService                        from '@/services/filters/TeamFilterService/FilterTeamService';
import ModelMapperFactoryTeam                   from '@/repositories/modelMappers/ModelMapperFactoryTeam';
import NavigationCrudTeam                       from '@/routeNavigation/NavigationCrudTeam';
import NavigationListComponent                  from '@/componentsCommonGui/navigationList/NavigationListComponent';
import NavigationListConfig                     from '@/componentsCommonGui/navigationList/NavigationListConfig';
import TeamRepositoryFactory                    from '@/repositories/factory/TeamRepositoryFactory';
import TeamSummaryModel                         from '@/repositories/models/team/TeamSummaryModel';

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
export default class TeamList extends BasePage implements IComponentMetaData {

  // IComponentMetaData
  public componentName: string = 'Team List';
  public componentDescription: string = 'Displays a list of Teams';
  // IComponentMetaData

   // Create the configuration for development of the component
  //
  public listConfiguration: NavigationListConfig<TeamSummaryModel> =
    new NavigationListConfig<TeamSummaryModel>(
    'Teams',                                      // Title
    new NavigationCrudTeam(),                    // Team Navigation Provider
    TeamRepositoryFactory.getRepository(),        // Team Repository Provider
    ModelMapperFactoryTeam.createSummaryMapper(), // Map Java Object to Typescript Team Object
    new FilterTeamService(),                      // Filter Team list (user text search)
    (data: TeamSummaryModel) => `${data.name}`,   // Format of text for cell line 1 (header)
    (data: TeamSummaryModel) => ``,               // Format of text for cell line 2 (body)
    (data: TeamSummaryModel) => ``,               // Format of text for cell line 3 (footer)
  );

  public data(): any {
    return {};
  }

}
