import LabelDataReadOnly                        from '@/componentsCommonGui/labelDataReadOnly/LabelDataReadOnly.vue';
import Component                                from 'vue-class-component';
import { IApiModel }                            from '../../repositories/models/interfaces/IApiModel';
import { Prop }                                 from 'vue-property-decorator';
import EntityPageModel                          from '../models/EntityPageModel';
import Vue                                      from 'vue';
import EntityLayoutPageHeaderComponent          from '../entityLayoutPageHeader/EntityLayoutPageHeaderComponent';

@Component({
    components: {
        EntityLayoutPageHeaderComponent,
        LabelDataReadOnly,
    },
  })
export default class EntityLayoutPageTemplateComponent extends Vue {

    @Prop() public entityModel!: EntityPageModel<IApiModel>;

    constructor() {
        super();
    }

    /** Event Handler - User has pressed the restore button */
    public onRestore() {
        this.$emit('onRestore');
    }

    /** Event Handler - User has pressed the archive button */
    public onArchive() {
        this.$emit('onArchive');
    }
}

Vue.component('crm-entity-layout-page-template', EntityLayoutPageTemplateComponent);
