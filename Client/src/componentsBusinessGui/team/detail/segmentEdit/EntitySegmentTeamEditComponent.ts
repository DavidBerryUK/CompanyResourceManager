import { Prop }                                 from 'vue-property-decorator';
import Component                                from 'vue-class-component';
import EntityPageModel                          from '@/componentsEntityLayouts/models/EntityPageModel';
import EntitySegmentBase                        from '@/componentsEntityLayouts/entitySegmentBase/EntitySegmentBase';
import TeamExtendedModel                        from '@/repositories/models/team/TeamExtendedModel';
import Vue                                      from 'vue';

@Component
export default class EntitySegmentTeamEditComponent extends EntitySegmentBase<TeamExtendedModel> {

    @Prop() public entityModel!: EntityPageModel<TeamExtendedModel>;

    constructor() {
        super();
    }
}

Vue.component('crm-entity-segment-team-edit', EntitySegmentTeamEditComponent);
