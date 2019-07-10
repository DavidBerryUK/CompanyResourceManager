import Component                                from 'vue-class-component';
import MenuFactory                              from './factories/MenuFactory';
import MenuItem                                 from './models/MenuItem';
import Vue                                      from 'vue';

@Component
export default class MenuComponent extends Vue {

    private menuItems: Array<MenuItem> = new Array<MenuItem>();

    private  mounted() {
        this.menuItems = MenuFactory.getMenuItems();
    }

    private data(): any  {
        return {};
    }
}

Vue.component('db-menu', MenuComponent);
