import { Prop }                                 from 'vue-property-decorator';
import Component                                from 'vue-class-component';
import Vue                                      from 'vue';

@Component
export default class ElementTitleWrapperComponent extends Vue   {

    @Prop()
    public iconCss!: string;

    public data(): any  {
        return {};
    }
  }

Vue.component('crm-element-title', ElementTitleWrapperComponent);
