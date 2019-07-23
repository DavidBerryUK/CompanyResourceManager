import { Prop }                                 from 'vue-property-decorator';
import Component                                from 'vue-class-component';
import FormViewHeader                           from '@/componentsCommonGui/formViewHeader/FormViewHeader.vue';
import Vue                                      from 'vue';

@Component({
  components: {
    FormViewHeader,
  },
})
export default class EntityViewTemplateComponent extends Vue   {

    @Prop() public isActive!: boolean;
    @Prop() public title!: string;

    public data(): any  {
        return {};
    }

    public onEdit() {
      this.$emit('onEdit');
    }

    public onRestore() {
      this.$emit('onRestore');
    }
  }

Vue.component('crm-entity-view-template', EntityViewTemplateComponent);
