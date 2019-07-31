import { Component }                            from 'vue-property-decorator';
import { Prop }                                 from 'vue-property-decorator';
import EntityPageModel                          from '../../componentsEntityLayouts/models/EntityPageModel';
import EntitySegmentPersonBase                  from './EntitySegmentPersonBase';
import PersonExtendedModel                      from '@/repositories/models/person/PersonExtendedModel';
import Vue                                      from 'vue';

@Component
export default class EntitySegmentPersonViewComponent extends EntitySegmentPersonBase<PersonExtendedModel> {

    @Prop() public entityModel!: EntityPageModel<PersonExtendedModel>;

    constructor() {
        super();
    }
}

Vue.component('crm-entity-segment-person-view', EntitySegmentPersonViewComponent);
