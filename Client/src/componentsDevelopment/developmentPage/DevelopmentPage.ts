import Component                                  from 'vue-class-component';
import ContactGroupComponent                      from '@/componentsBusinessGui/contact/contactGroup/ContactGroupComponent';
import ElementPageWrapperComponent                from '@/componentsCommonGui/elementPageWrapper/ElementPageWrapperComponent';
import Vue                                        from 'vue';

@Component({
  components: {
    ElementPageWrapperComponent,
    ContactGroupComponent,
  },
})
export default class DevelopmentPage extends Vue {

  public contactGroupId: string = '326f4b79-a524-4190-9524-f682e0aacb0e';

  public data(): any {
    return {};
  }
}
