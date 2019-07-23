import { Prop }                         from 'vue-property-decorator';
import Component                        from 'vue-class-component';
import Vue                              from 'vue';

@Component
export default class FormViewHeader extends Vue {

    @Prop()
    public title?: string;

    @Prop()
    public isActive?: boolean;

    constructor() {
        super();
    }

    public mounted() {
    }

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

Vue.component('crm-form-view-header', FormViewHeader);
