import { Prop }                         from 'vue-property-decorator';
import Component                        from 'vue-class-component';
import Vue                              from 'vue';

@Component
export default class FormEditHeader extends Vue {


    @Prop()
    public title?: string;

    @Prop()
    public saveEnabled?: boolean;

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

    public onArchive() {
        this.$emit('onArchive');
    }

    public onSave() {
        this.$emit('onSave');
    }

    public onCancel() {
        this.$emit('onCancel');
    }

}

Vue.component('custom-form-edit-header', FormEditHeader);
