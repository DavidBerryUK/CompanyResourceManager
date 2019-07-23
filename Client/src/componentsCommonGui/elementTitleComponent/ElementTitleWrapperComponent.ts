import Component                                from 'vue-class-component';
import Vue                                      from 'vue';
import { Prop }                                 from 'vue-property-decorator';

@Component
export default class ElementTitleWrapperComponent extends Vue   {

    @Prop()
    public iconCss!: string;

    public data(): any  {
        return {};
    }
  }

Vue.component('crm-element-title', ElementTitleWrapperComponent);
