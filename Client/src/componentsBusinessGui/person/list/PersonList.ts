import { IComponentMetaData }                   from '@/components/interfaces/ComponentMetaDataInterfaces';
import BaseListPage                             from '@/componentsBusinessGui/base/BaseListPage';
import Component                                from "vue-class-component";
import FilterButton                             from '@/componentsCommonGui/filterButton/FilterButton';
import FilterPersonSummaryService               from '@/services/filters/personFilterService/FilterPersonSummaryService';
import Loader                                   from '@/componentsCommonGui/loader/Loader';
import NavigationCrudPerson                     from '@/routeNavigation/NavigationCrudPerson';
import ObjectArrayMapperPersonSummaryModel      from '@/repositories/objectMappers/person/ObjectArrayMapperPersonSummaryModel';
import ObjectMapperPersonSummaryModel           from '@/repositories/objectMappers/person/ObjectMapperPersonSummaryModel';
import PersonRepositoryFactory                  from '@/repositories/factory/PersonRepositoryFactory';
import PersonSummaryModel                       from '@/repositories/models/person/PersonSummaryModel';

/**
 * Presents a list of categories to the user that can be filtered
 * by record status (current,deleted or all)
 * 
 * when a person is selected its details will be displayed
 * 
 * @export
 * @class CategoryList
 * @extends {BaseListPage}
 * @implements {IComponentMetaData}
 */
@Component({
  components: {
    Loader,
    FilterButton
  }
})
export default class PersonList extends BaseListPage<PersonSummaryModel> implements IComponentMetaData {

  //IComponentMetaData
  componentName: string = "Person List";
  componentDescription: string = "Displays of list people";
  //IComponentMetaData

  constructor() {
    super(new NavigationCrudPerson(),
      PersonRepositoryFactory.getRepository(),
      new ObjectMapperPersonSummaryModel(),
      new ObjectArrayMapperPersonSummaryModel(),
      new FilterPersonSummaryService());
  }

  //
  // View has been mounted
  //
  mounted() {
    super.mounted();
  }

  // before the view is destroyed, it must unsubscribe from
  // any notifications
  beforeDestroy() {
    super.beforeDestroy();
  }

  /**
   * When the filter button is pressed the filter dialog modal will be displayed
   * allowing the user to filter  the record types
   * 
   * @memberof PersonList
   */
  onFilterClicked() {
    super.onFilterClicked();
  }

  //
  // user has pressed the clear button on the text filter
  //
  onFilterClearClicked() {
    super.onFilterClearClicked();
  }

  //
  // user pressed the add button to create a new person
  //
  onAddClicked() {
    super.onAddClicked();
  }

  //
  // a list item has been selected, navigate to the person view screen
  //
  onSelectItem(item: PersonSummaryModel) {
    super.onSelectItem(item);
  }
}
