import { Prop }                         from 'vue-property-decorator'
import { Watch }                        from 'vue-property-decorator'
import Component                        from 'vue-class-component'
import Vue                              from 'vue'


@Component
export default class LabelDataReadOnly extends Vue {


    @Prop()
    label?: string

    @Prop()
    stringValue?: string

    @Prop()
    numberValue?: number


    private oneTimeBind: boolean;

    displayValue: string = "";

    constructor() {
        super();
        this.oneTimeBind = false;
    }

    mounted() {
        this.setDisplayValue();
        var x = this.$el.attributes.getNamedItem('one-time-bind')
        if (x) {
            this.oneTimeBind = true;
        }

    }

    @Watch("numberValue")
    numberValueChanged(value: number, oldValue: number) {
        if (this.oneTimeBind) {
            return;
        }
        this.setDisplayValue();
    }

    @Watch("stringValue")
    stringValueChanged(value: string, oldValue: string) {
        if (this.oneTimeBind) {
            return;
        }
        this.setDisplayValue();
    }

    private setDisplayValue() {
        if (this.numberValue) {
            this.displayValue = "" + this.numberValue;
        }
        else if (this.stringValue) {
            this.displayValue = this.stringValue;
        }
    }

    data(): any {
        return {};
    }


}

Vue.component('custom-label-data', LabelDataReadOnly)