import { Prop }                                 from 'vue-property-decorator';
import Component                                from 'vue-class-component';
import EntitySegmentBase                        from '@/componentsEntityLayouts/entitySegmentBase/EntitySegmentBase';
import Vue                                      from 'vue';
import SecurityGroupExtendedModel               from '@/repositories/models/securityGroup/SecurityGroupExtendedModel';
import EntityPageModel                          from '@/componentsEntityLayouts/models/EntityPageModel';

@Component
export default class EntitySegmentSecurityGroupEditComponent extends EntitySegmentBase<SecurityGroupExtendedModel> {

    @Prop() public entityModel!: EntityPageModel<SecurityGroupExtendedModel>;

    constructor() {
        super();
    }
}

Vue.component('crm-entity-segment-securitygroup-edit', EntitySegmentSecurityGroupEditComponent);
