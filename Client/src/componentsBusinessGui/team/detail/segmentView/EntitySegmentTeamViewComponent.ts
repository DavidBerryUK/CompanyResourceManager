import { Component }                            from 'vue-property-decorator';
import { IComponentMetaData }                   from '@/components/interfaces/ComponentMetaDataInterfaces';
import { Prop }                                 from 'vue-property-decorator';
import EntityPageModel                          from '@/componentsEntityLayouts/models/EntityPageModel';
import EntitySegmentBase                        from '@/componentsEntityLayouts/entitySegmentBase/EntitySegmentBase';
import TeamExtendedModel                        from '@/repositories/models/team/TeamExtendedModel';
import Vue                                      from 'vue';

@Component
export default class EntitySegmentTeamViewComponent extends EntitySegmentBase<TeamExtendedModel>
    implements IComponentMetaData {

    // IComponentMetaData
    public componentName: string = 'Team View ane Edit';
    public componentDescription: string = 'Enables the user to view and Edit Teams';
    // IComponentMetaData

    @Prop() public entityModel!: EntityPageModel<TeamExtendedModel>;

    constructor() {
        super();
    }
}

Vue.component('crm-entity-segment-team-view', EntitySegmentTeamViewComponent);
