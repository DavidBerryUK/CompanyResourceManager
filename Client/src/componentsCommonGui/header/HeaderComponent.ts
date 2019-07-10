import Component                                from 'vue-class-component';
import Vue                                      from 'vue';

@Component
export default class HeaderComponent extends Vue   {

    public data(): any  {
        return {};
    }
  }

Vue.component('db-header', HeaderComponent);
