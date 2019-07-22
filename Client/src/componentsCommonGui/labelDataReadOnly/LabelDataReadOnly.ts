import { Prop }                         from 'vue-property-decorator';
import { Watch }                        from 'vue-property-decorator';
import Component                        from 'vue-class-component';
import Vue                              from 'vue';


@Component
export default class LabelDataReadOnly extends Vue {


    @Prop()
    public label?: string;

    @Prop()
    public stringValue?: string;

    @Prop()
    public numberValue?: number;

    public displayValue: string = '';

    private oneTimeBind: boolean;

    constructor() {
        super();
        this.oneTimeBind = false;
    }

    public mounted() {
        this.setDisplayValue();
        const x = this.$el.attributes.getNamedItem('one-time-bind');
        if (x) {
            this.oneTimeBind = true;
        }
    }

    @Watch('numberValue')
    public numberValueChanged(value: number, oldValue: number) {
        if (this.oneTimeBind) {
            return;
        }
        this.setDisplayValue();
    }

    @Watch('stringValue')
    public stringValueChanged(value: string, oldValue: string) {
        if (this.oneTimeBind) {
            return;
        }
        this.setDisplayValue();
    }

    public data(): any {
        return {};
    }

    private setDisplayValue() {
        if (this.numberValue) {
            this.displayValue = '' + this.numberValue;
        } else if (this.stringValue) {
            this.displayValue = this.stringValue;
        }
    }
}

Vue.component('custom-label-data', LabelDataReadOnly);
