import { IApiModel }                            from '../../repositories/models/interfaces/IApiModel';
import { Prop }                                 from 'vue-property-decorator';
import EntityPageModel                          from '../models/EntityPageModel';
import Vue                                      from 'vue';

export default class EntitySegmentEditableLayoutComponent extends Vue {

    @Prop() public model!: EntityPageModel<IApiModel>;

    constructor() {
        super();
    }
}

