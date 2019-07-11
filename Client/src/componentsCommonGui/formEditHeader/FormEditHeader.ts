import { Prop }                         from 'vue-property-decorator'
import Component                        from 'vue-class-component'
import Vue                              from 'vue'

@Component
export default class FormEditHeader extends Vue {         


    @Prop()
    title?: string;

    @Prop()
    saveEnabled?:  boolean;

    @Prop()
    isActive?: boolean;

    constructor(){                
        super();
    }

    mounted(){        
    }

    data() : any  {
        return {};
    }

    onArchive() {
        this.$emit("onArchive");
    }

    onSave() {
        this.$emit("onSave");
    }

    onCancel() {
        this.$emit("onCancel");
    }

}
  
Vue.component('custom-form-edit-header',FormEditHeader)