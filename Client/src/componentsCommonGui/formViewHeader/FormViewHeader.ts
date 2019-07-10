import { Prop }                         from 'vue-property-decorator'
import Component                        from 'vue-class-component'
import Vue                              from 'vue'

@Component
export default class FormViewHeader extends Vue {         

    @Prop()
    title?: string;

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

    onEdit() {
        this.$emit("onEdit");
    }

    onRestore() {
        this.$emit("onRestore");
    }    
}
  
Vue.component('custom-form-view-header',FormViewHeader)