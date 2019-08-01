import { Component }                            from 'vue-property-decorator';
import { IComponentMetaData }                   from '@/components/interfaces/ComponentMetaDataInterfaces';
import { Prop }                                 from 'vue-property-decorator';
import EntityPageModel                          from '@/componentsEntityLayouts/models/EntityPageModel';
import EntitySegmentBase                        from '@/componentsEntityLayouts/entitySegmentBase/EntitySegmentBase';
import SecurityGroupExtendedModel               from '@/repositories/models/securityGroup/SecurityGroupExtendedModel';
import Vue                                      from 'vue';

@Component
export default class EntitySegmentSecurityGroupViewComponent extends EntitySegmentBase<SecurityGroupExtendedModel>
    implements IComponentMetaData {

    // IComponentMetaData
    public componentName: string = 'Security Group View ane Edit';
    public componentDescription: string = 'Enables the user to view and Edit Security Groups';
    // IComponentMetaData

    @Prop() public entityModel!: EntityPageModel<SecurityGroupExtendedModel>;

    constructor() {
        super();
    }
}

Vue.component('crm-entity-segment-securitygroup-view', EntitySegmentSecurityGroupViewComponent);
