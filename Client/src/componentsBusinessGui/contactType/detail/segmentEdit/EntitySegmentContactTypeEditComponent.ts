import { Prop }                                 from 'vue-property-decorator';
import Component                                from 'vue-class-component';
import ContactTypeSummaryModel                  from '@/repositories/models/contactType/ContactTypeSummaryModel';
import EntityPageModel                          from '../../../../componentsEntityLayouts/models/EntityPageModel';
import EntitySegmentBase                        from '@/componentsEntityLayouts/entitySegmentBase/EntitySegmentBase';
import Vue                                      from 'vue';

@Component
export default class EntitySegmentContactTypeEditComponent extends EntitySegmentBase<ContactTypeSummaryModel> {

    @Prop() public entityModel!: EntityPageModel<ContactTypeSummaryModel>;

    constructor() {
        super();
    }
}

Vue.component('crm-entity-segment-contacttype-edit', EntitySegmentContactTypeEditComponent);
