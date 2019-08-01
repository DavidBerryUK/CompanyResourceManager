import { Prop }                                 from 'vue-property-decorator';
import Component                                from 'vue-class-component';
import EntityPageModel                          from '../../../../componentsEntityLayouts/models/EntityPageModel';
import EntitySegmentBase                        from '@/componentsEntityLayouts/entitySegmentBase/EntitySegmentBase';
import Vue                                      from 'vue';
import SkillExtendedModel                       from '@/repositories/models/skill/SkillExtendedModel';

@Component
export default class EntitySegmentSkillEditComponent extends EntitySegmentBase<SkillExtendedModel> {

    @Prop() public entityModel!: EntityPageModel<SkillExtendedModel>;

    constructor() {
        super();
    }
}

Vue.component('crm-entity-segment-skill-edit', EntitySegmentSkillEditComponent);
