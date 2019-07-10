import Component                                  from 'vue-class-component';
import Vue                                        from 'vue';
import ComponentIconConstants                     from '@/constants/ComponentIconConstants';
import ElementTitleWrapperComponent               from '@/componentsCommonGui/elementTitleComponent/ElementTitleWrapperComponent';
import ElementPageWrapperComponent                from '@/componentsCommonGui/elementPageWrapperComponent/ElementPageWrapperComponent';

@Component({
  components: {
    ElementTitleWrapperComponent,
    ElementPageWrapperComponent,
  },
})
export default class HomePage extends Vue {

  public ComponentIconConstants = ComponentIconConstants;

  public data(): any {
    return {};
  }
}
