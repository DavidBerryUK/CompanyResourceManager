import { Component }                            from 'vue-property-decorator';
import { IComponentMetaData }                   from '@/components/interfaces/ComponentMetaDataInterfaces';
import { Prop }                                 from 'vue-property-decorator';
import EntityPageModel                          from '../../../../componentsEntityLayouts/models/EntityPageModel';
import EntitySegmentBase                        from '@/componentsEntityLayouts/entitySegmentBase/EntitySegmentBase';
import SkillExtendedModel                       from '@/repositories/models/skill/SkillExtendedModel';
import Vue                                      from 'vue';

@Component
export default class EntitySegmentSkillViewComponent extends EntitySegmentBase<SkillExtendedModel>
    implements IComponentMetaData {

    // IComponentMetaData
    public componentName: string = 'Skill View ane Edit';
    public componentDescription: string = 'Enables the user to view and Edit a Skill';
    // IComponentMetaData

    @Prop() public entityModel!: EntityPageModel<SkillExtendedModel>;

    constructor() {
        super();
    }
}

Vue.component('crm-entity-segment-skill-view', EntitySegmentSkillViewComponent);
