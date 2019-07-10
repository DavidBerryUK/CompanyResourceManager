import '../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import Component                                from 'vue-class-component';
import HeaderComponent                          from '../componentsCommonGui/header/HeaderComponent.vue';
import MenuComponent                            from "../componentsCommonGui/menuComponent/MenuComponent.vue";
import Vue                                      from 'vue';
import VeeValidate                              from 'vee-validate';

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
    MenuComponent
  },
})
export default class App extends Vue {

  private showToolbar: boolean = true;
  private showHeader: boolean = true;

  private mounted() {

  }

  public data(): any {
    return {};
  }


}
