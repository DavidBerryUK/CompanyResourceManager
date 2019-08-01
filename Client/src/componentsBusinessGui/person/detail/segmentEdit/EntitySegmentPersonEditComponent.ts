import { Prop }                                 from 'vue-property-decorator';
import Component                                from 'vue-class-component';
import EntityPageModel                          from '../../../../componentsEntityLayouts/models/EntityPageModel';
import EntitySegmentBase                        from '../../../../componentsEntityLayouts/entitySegmentBase/EntitySegmentBase';
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';
import ListItemModel                            from '@/repositories/models/ListItem/ListItemModel';
import PersonExtendedModel                      from '@/repositories/models/person/PersonExtendedModel';
import Vue                                      from 'vue';

@Component
export default class EntitySegmentPersonEditComponent
    extends EntitySegmentBase<PersonExtendedModel> {

    @Prop() public entityModel!: EntityPageModel<PersonExtendedModel>;

    public jobRoleList: GenericCollectionModel<ListItemModel> = new GenericCollectionModel<ListItemModel>();

    constructor() {
        super();
    }

}

Vue.component('crm-entity-segment-person-edit', EntitySegmentPersonEditComponent);
