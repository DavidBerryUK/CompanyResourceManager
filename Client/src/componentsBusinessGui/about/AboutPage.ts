import Component                                from 'vue-class-component';
import ComponentIconConstants                   from '@/constants/ComponentIconConstants';
import ElementPageWrapperComponent              from '@/componentsCommonGui/elementPageWrapper/ElementPageWrapperComponent';
import ElementTitleWrapperComponent             from '@/componentsCommonGui/elementTitleComponent/ElementTitleWrapperComponent';
import Vue                                      from 'vue';

@Component({
  components: {
    ElementTitleWrapperComponent,
    ElementPageWrapperComponent,
  },
})
export default class AboutPage extends Vue {

  public ComponentIconConstants = ComponentIconConstants;

  public data(): any {
    return {};
  }
}
