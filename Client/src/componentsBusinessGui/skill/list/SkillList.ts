import { IComponentMetaData }                   from '@/components/interfaces/ComponentMetaDataInterfaces';
import BasePage                                 from '@/componentsBusinessGui/base/BasePage';
import Component                                from 'vue-class-component';
import FilterSkillService                       from '@/services/filters/SkillFilterService/FilterSkillService';
import NavigationCrudSkill                      from '@/routeNavigation/NavigationCrudSkill';
import NavigationListComponent                  from '@/componentsCommonGui/navigationList/NavigationListComponent';
import NavigationListConfig                     from '@/componentsCommonGui/navigationList/NavigationListConfig';
import ObjectMapperFactorySkill                 from '@/repositories/objectMappers/ObjectMapperFactorySkill';
import SkillRepositoryFactory                   from '@/repositories/factory/SkillRepositoryFactory';
import SkillSummaryModel                        from '@/repositories/models/skill/SkillSummaryModel';

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
export default class SkillList extends BasePage implements IComponentMetaData {

  // IComponentMetaData
  public componentName: string = 'Skills List';
  public componentDescription: string = 'Displays a list of skills';
  // IComponentMetaData

   // Create the configuration for development of the component
  //
  public listConfiguration: NavigationListConfig<SkillSummaryModel> =
    new NavigationListConfig<SkillSummaryModel>(
    'Skills',                                     // Title
    new NavigationCrudSkill(),                    // Skill Navigation Provider
    SkillRepositoryFactory.getRepository(),       // Skill Repository Provider
    ObjectMapperFactorySkill.createSummaryMapper(),          // Map Java Object to Typescript Skill Object
    new FilterSkillService(),                     // Filter Skill list (user text search)
    (data: SkillSummaryModel) => `${data.name}`,  // Format of text for cell line 1 (header)
    (data: SkillSummaryModel) => ``,              // Format of text for cell line 2 (body)
    (data: SkillSummaryModel) => ``,              // Format of text for cell line 3 (footer)
  );

  public data(): any {
    return {};
  }

}
