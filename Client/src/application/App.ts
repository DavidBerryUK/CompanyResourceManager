import '../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import Component                                from 'vue-class-component';
import HeaderComponent                          from '../componentsCommonGui/header/HeaderComponent.vue';
import NavigationMenuComponent                  from '@/componentsBusinessGui/navigationMenu/NavigationMenuComponent';
import VeeValidate                              from 'vee-validate';
import Vue                                      from 'vue';

Vue.use(VeeValidate);

/**
 * Main application component. This hosts the TestParametersComponent
 * that lets a user interactively explore the avatar parameters.
 *
 * @export
 * @class App
 * @extends {Vue}
 */
@Component({
  components: {
    HeaderComponent,
    NavigationMenuComponent,
  },
})
export default class App extends Vue {
  private showToolbar: boolean = true;
  private showHeader: boolean = true;

  public data(): any {
    return {};
  }

}
