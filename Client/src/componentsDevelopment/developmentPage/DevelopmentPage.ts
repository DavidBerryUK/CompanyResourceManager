import Component                                  from 'vue-class-component';
import ElementPageWrapperComponent                from '@/componentsCommonGui/elementPageWrapperComponent/ElementPageWrapperComponent';
import FilterPersonSummaryService                 from '@/services/filters/personFilterService/FilterPersonSummaryService';
import NavigationCrudPerson                       from '@/routeNavigation/NavigationCrudPerson';
import NavigationListComponent                    from '../../componentsCommonGui/navigationList/NavigationListComponent';
import NavigationListConfig                       from '../../componentsCommonGui/navigationList/NavigationListConfig';
import ObjectArrayMapperPersonSummaryModel        from '@/repositories/objectMappers/person/ObjectArrayMapperPersonSummaryModel';
import ObjectMapperPersonSummaryModel             from '@/repositories/objectMappers/person/ObjectMapperPersonSummaryModel';
import PersonRepositoryFactory                    from '@/repositories/factory/PersonRepositoryFactory';
import PersonSummaryModel                         from '@/repositories/models/person/PersonSummaryModel';
import Vue                                        from 'vue';

@Component({
  components: {
    ElementPageWrapperComponent,
    NavigationListComponent,
  },
})
export default class DevelopmentPage extends Vue {

  // Create the configuration for development of the component
  //
  public listConfiguration: NavigationListConfig<PersonSummaryModel> =
    new NavigationListConfig<PersonSummaryModel>(
    'Person',
    new NavigationCrudPerson(),
    PersonRepositoryFactory.getRepository(),
    new ObjectMapperPersonSummaryModel(),
    new ObjectArrayMapperPersonSummaryModel(),
    new FilterPersonSummaryService(),
    (data: PersonSummaryModel) => `${data.forename} ${data.surname}`,
    (data: PersonSummaryModel) => `${data.jobRoleName}`,
    (data: PersonSummaryModel) => `${data.email}`,
  );

  public data(): any {
    return {};
  }
}
