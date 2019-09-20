import { IComponentMetaData }                   from '@/components/interfaces/ComponentMetaDataInterfaces';
import BasePage                                 from '@/componentsBusinessGui/base/BasePage';
import Component                                from 'vue-class-component';
import ContactTypeRepositoryFactory             from '@/repositories/factory/ContactTypeRepositoryFactory';
import ContactTypeSummaryModel                  from '@/repositories/models/contactType/ContactTypeSummaryModel';
import FilterContractTypeService                from '@/services/filters/ContactTypeFilterService/FilterContactTypeService';
import ModelFactoryContactTypeSummary           from '@/repositories/modelFactories/contact/ModelFactoryContactTypeSummary';
import NavigationCrudContactType                from '@/routeNavigation/NavigationCrudContactType';
import NavigationListComponent                  from '@/componentsCommonGui/navigationList/NavigationListComponent';
import NavigationListConfig                     from '@/componentsCommonGui/navigationList/NavigationListConfig';


/**
 * Presents a list of Contact Types to the user that can be filtered
 * by record status (current,deleted or all)
 */
@Component({
  components: {
    NavigationListComponent,
  },
})
export default class ContactTypeList extends BasePage implements IComponentMetaData {

  // IComponentMetaData
  public componentName: string = 'Contact Type List';
  public componentDescription: string = 'Displays a list of Contact Types';
  // IComponentMetaData

   // Create the configuration for development of the component
  //
  public listConfiguration: NavigationListConfig<ContactTypeSummaryModel, ContactTypeSummaryModel> =
    new NavigationListConfig<ContactTypeSummaryModel, ContactTypeSummaryModel>(
    'Contact Type',                                     // Title
    new NavigationCrudContactType(),                    // Skill Navigation Provider
    ContactTypeRepositoryFactory.getRepository(),       // Skill Repository Provider
    new ModelFactoryContactTypeSummary(),               // Map Java Object to Typescript  Object
    new ModelFactoryContactTypeSummary(),               // Map Java Object to Typescript  Object
    new FilterContractTypeService(),                    // Filter Skill list (user text search)
    (data: ContactTypeSummaryModel) => `${data.name}`,  // Format of text for cell line 1 (header)
    (data: ContactTypeSummaryModel) => ``,              // Format of text for cell line 2 (body)
    (data: ContactTypeSummaryModel) => ``,              // Format of text for cell line 3 (footer)
  );

  public data(): any {
    return {};
  }

}
