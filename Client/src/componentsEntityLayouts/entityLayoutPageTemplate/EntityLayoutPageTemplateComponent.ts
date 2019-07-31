import Component                                 from 'vue-class-component';
import { IApiModel }                            from '../../repositories/models/interfaces/IApiModel';
import { Prop }                                 from 'vue-property-decorator';
import EntityPageModel                          from '../models/EntityPageModel';
import Vue                                      from 'vue';
import EntityLayoutPageHeaderComponent          from '../entityLayoutPageHeader/EntityLayoutPageHeaderComponent';

@Component({
    components: {
        EntityLayoutPageHeaderComponent,
    },
  })
export default class EntityLayoutPageTemplateComponent extends Vue {

    @Prop() public entityModel!: EntityPageModel<IApiModel>;

    constructor() {
        super();
    }
}

Vue.component('crm-entity-layout-page-template', EntityLayoutPageTemplateComponent);
