import { IApiModel }                            from '@/repositories/models/interfaces/IApiModel';
import { Prop }                                 from 'vue-property-decorator';
import EntityPageModel                          from '../models/EntityPageModel';
import Vue                                      from 'vue';

export default class EntitySegmentBase<T extends IApiModel> extends Vue {

    @Prop() public model!: EntityPageModel<T>;

    constructor() {
        super();
    }
}
