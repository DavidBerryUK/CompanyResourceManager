import { Prop }                                 from 'vue-property-decorator';
import Component                                from 'vue-class-component';
import ContactTypeExtendedModel                 from '@/repositories/models/contactType/ContactTypeExtendedModel';
import EntityPageModel                          from '../../../../componentsEntityLayouts/models/EntityPageModel';
import EntitySegmentBase                        from '@/componentsEntityLayouts/entitySegmentBase/EntitySegmentBase';
import Vue                                      from 'vue';

@Component
export default class EntitySegmentContactTypeEditComponent extends EntitySegmentBase<ContactTypeExtendedModel> {

    @Prop() public entityModel!: EntityPageModel<ContactTypeExtendedModel>;

    constructor() {
        super();
    }
}

Vue.component('crm-entity-segment-contacttype-edit', EntitySegmentContactTypeEditComponent);
