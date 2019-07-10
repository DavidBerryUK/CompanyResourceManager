import { Prop }                                 from 'vue-property-decorator'
import Component                                from 'vue-class-component'
import Vue                                      from 'vue'


@Component
export default class FilterButton extends Vue {

    @Prop()
    isFilterSet: boolean = false;

    onFilterClicked() {        
        this.$emit("onFilterClicked")
    }

    data(): any {
        return {};
    }

}

// Register the custom tag
//
Vue.component('custom-filter-button', FilterButton)