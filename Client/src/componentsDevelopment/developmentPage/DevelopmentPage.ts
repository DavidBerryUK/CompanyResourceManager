import Component                                  from 'vue-class-component';
import ElementPageWrapperComponent                from '@/componentsCommonGui/elementPageWrapper/ElementPageWrapperComponent';
import Vue                                        from 'vue';

@Component({
  components: {
    ElementPageWrapperComponent,
  },
})
export default class DevelopmentPage extends Vue {

  public data(): any {
    return {};
  }
}
