import { Prop }                                 from 'vue-property-decorator';
import Component                                from 'vue-class-component';
import EntityPageModel                          from '../../../../componentsEntityLayouts/models/EntityPageModel';
import EntitySegmentBase                        from '@/componentsEntityLayouts/entitySegmentBase/EntitySegmentBase';
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';
import JobRoleExtendedModel                     from '@/repositories/models/jobRole/JobRoleExtendedModel';
import ListItemModel                            from '@/repositories/models/ListItem/ListItemModel';
import Vue                                      from 'vue';

@Component
export default class EntitySegmentJobRoleEditComponent extends EntitySegmentBase<JobRoleExtendedModel> {

    @Prop() public entityModel!: EntityPageModel<JobRoleExtendedModel>;

    constructor() {
        super();
    }
}

Vue.component('crm-entity-segment-jobRole-edit', EntitySegmentJobRoleEditComponent);
