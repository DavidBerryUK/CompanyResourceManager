import Component                                from 'vue-class-component';
import Vue                                      from 'vue';

@Component
export default class ElementPageWrapperComponent extends Vue   {

    public data(): any  {
        return {};
    }
  }

Vue.component('db-element-page', ElementPageWrapperComponent);
