import { IApiModel }                            from '@/repositories/models/interfaces/IApiModel';
import { Prop }                                 from 'vue-property-decorator';
import Component                                from 'vue-class-component';
import DeepObjectComparator                     from '@/services/objectComparison/DeepObjectComparator';
import FormEditHeader                           from '@/componentsCommonGui/formEditHeader/FormEditHeader';
import Vue                                      from 'vue';

@Component({
  components: {
    FormEditHeader,
  },
})
export default class EntityEditTemplateComponent extends Vue   {

    @Prop() public isLoading!: boolean;
    @Prop() public isActive!: boolean;
    @Prop() public title!: string;
    @Prop() public modelChangeTracker!: DeepObjectComparator;

    public data(): any  {
        return {};
    }

    public onSave() {
      this.$emit('onSave');
    }

    public onArchive() {
      this.$emit('onArchive');
    }

    public onCancel() {
      this.$emit('onCancel');
    }
  }

Vue.component('crm-entity-edit-template', EntityEditTemplateComponent);
