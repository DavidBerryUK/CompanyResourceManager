import { IComponentMetaData }                   from '@/components/interfaces/ComponentMetaDataInterfaces';
import BasePage                                 from '@/componentsBusinessGui/base/BasePage';
import Component                                from 'vue-class-component';
import FilterPersonSummaryService               from '@/services/filters/personFilterService/FilterPersonSummaryService';
import ModelFactoryPersonExtended               from '@/repositories/modelFactories/person/ModelFactoryPersonExtended';
import ModelFactoryPersonSummary                from '@/repositories/modelFactories/person/ModelFactoryPersonSummary';
import NavigationCrudPerson                     from '@/routeNavigation/NavigationCrudPerson';
import NavigationListComponent                  from '@/componentsCommonGui/navigationList/NavigationListComponent';
import NavigationListConfig                     from '@/componentsCommonGui/navigationList/NavigationListConfig';
import PersonExtendedModel                      from '@/repositories/models/person/PersonExtendedModel';
import PersonRepositoryFactory                  from '@/repositories/factory/PersonRepositoryFactory';
import PersonSummaryModel                       from '@/repositories/models/person/PersonSummaryModel';

/**
 * Presents a list of People to the user that can be filtered
 * by record status (current,deleted or all)
 *
 * when a person is selected its details will be displayed
 */
@Component({
  components: {
    NavigationListComponent,
  },
})
export default class PersonList extends BasePage implements IComponentMetaData {

  // IComponentMetaData
  public componentName: string = 'Person List';
  public componentDescription: string = 'Displays of list people';
  // IComponentMetaData

   // Create the configuration for development of the component
  //
  public listConfiguration: NavigationListConfig<PersonSummaryModel, PersonExtendedModel> =
    new NavigationListConfig<PersonSummaryModel, PersonExtendedModel>(
    'Person',                                                         // Title
    new NavigationCrudPerson(),                                       // People Navigation Provider
    PersonRepositoryFactory.getRepository(),                          // People Repository Provider
    new ModelFactoryPersonSummary(),                                   // Map Java Object to Typescript People Object
    new ModelFactoryPersonExtended(),
    new FilterPersonSummaryService(),                                 // Filter People list (user text search)
    (data: PersonSummaryModel) => `${data.forename} ${data.surname}`, // Format of text for cell line 1 (header)
    (data: PersonSummaryModel) => `${data.jobRoleName}`,              // Format of text for cell line 2 (body)
    (data: PersonSummaryModel) => `${data.email}`,                    // Format of text for cell line 3 (footer)
  );

  public data(): any {
    return {};
  }

}
