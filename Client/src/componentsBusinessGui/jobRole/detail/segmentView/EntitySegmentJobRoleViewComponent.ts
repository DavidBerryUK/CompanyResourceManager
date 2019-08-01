import { Component }                            from 'vue-property-decorator';
import { IComponentMetaData }                   from '@/components/interfaces/ComponentMetaDataInterfaces';
import { Prop }                                 from 'vue-property-decorator';
import EntityPageModel                          from '../../../../componentsEntityLayouts/models/EntityPageModel';
import EntitySegmentBase                        from '@/componentsEntityLayouts/entitySegmentBase/EntitySegmentBase';
import JobRoleExtendedModel                     from '@/repositories/models/jobRole/JobRoleExtendedModel';
import Vue                                      from 'vue';

@Component
export default class EntitySegmentJobRoleViewComponent extends EntitySegmentBase<JobRoleExtendedModel>
    implements IComponentMetaData {

    // IComponentMetaData
    public componentName: string = 'Job Role View ane Edit';
    public componentDescription: string = 'Enables the user to view and Edit Job Role';
    // IComponentMetaData

    @Prop() public entityModel!: EntityPageModel<JobRoleExtendedModel>;

    constructor() {
        super();
    }
}

Vue.component('crm-entity-segment-jobrole-view', EntitySegmentJobRoleViewComponent);
