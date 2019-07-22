import Component                        from 'vue-class-component';
import Vue                              from 'vue';

@Component
export default class Loader extends Vue {

    public data(): any  {
        return {};
    }
}

Vue.component('custom-loader', Loader);
