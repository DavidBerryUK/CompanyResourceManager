import { Prop }                                 from 'vue-property-decorator';
import Component                                from 'vue-class-component';
import Vue                                      from 'vue';
import NavigationListConfig                     from './NavigationListConfig';

@Component
export default class NavigationListComponent extends Vue   {

  @Prop() public configuration!: NavigationListConfig<any>;
  @Prop() public title!: string;

  public data(): any  {
      return {};
  }

     // When the filter button is pressed the filter dialog modal will be displayed
  // allowing the user to filter  the record types
  public onFilterClicked() {

  }

  // user has pressed the clear button on the text filter
  public onFilterClearClicked() {

  }

  // user pressed the add button to create a new person
  public onAddClicked() {

  }

  // a list item has been selected, navigate to the person view screen
  public onSelectItem(item: any) {
  }
  }

Vue.component('crm-navigation-list', NavigationListComponent);
