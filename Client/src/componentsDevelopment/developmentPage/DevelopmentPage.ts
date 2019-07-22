import Component                                  from 'vue-class-component';
import ElementPageWrapperComponent                from '@/componentsCommonGui/elementPageWrapperComponent/ElementPageWrapperComponent';
import NavigationListComponent                    from '../navigationList/NavigationListComponent';
import NavigationListConfig                       from '../navigationList/NavigationListConfig';
import PersonSummaryModel                         from '@/repositories/models/person/PersonSummaryModel';
import Vue                                        from 'vue';

@Component({
  components: {
    ElementPageWrapperComponent,
    NavigationListComponent,
  },
})
export default class DevelopmentPage extends Vue {

  public listConfiguration: NavigationListConfig<PersonSummaryModel> = 
  new NavigationListComponent<PersonSummaryModel>();

  public data(): any {
    return {};
  }


}
