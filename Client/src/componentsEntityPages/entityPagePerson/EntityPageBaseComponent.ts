import { IApiModel }                            from '@/repositories/models/interfaces/IApiModel';
import { Prop }                                 from 'vue-property-decorator';
import { Watch }                                from 'vue-property-decorator';
import EntityPageModel                          from '../../componentsEntityLayouts/models/EntityPageModel';
import Vue                                      from 'vue';

export default class EntityPageBaseComponent<T extends IApiModel> extends Vue {

    @Prop() public id!: string;

    public entityModel = new EntityPageModel<T>();

    constructor() {
        super();
    }

    @Watch('id')
    public watchPropertyId() {
        this.entityModel.id = this.id;
    }

}
