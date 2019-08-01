import { Component }                            from 'vue-property-decorator';
import { IComponentMetaData }                   from '@/components/interfaces/ComponentMetaDataInterfaces';
import { Prop }                                 from 'vue-property-decorator';
import EntityPageModel                          from '../../../../componentsEntityLayouts/models/EntityPageModel';
import EntitySegmentBase                  from '../../../../componentsEntityLayouts/entitySegmentBase/EntitySegmentBase';
import PersonExtendedModel                      from '@/repositories/models/person/PersonExtendedModel';
import Vue                                      from 'vue';

@Component
export default class EntitySegmentPersonViewComponent extends EntitySegmentBase<PersonExtendedModel>
    implements IComponentMetaData {

    // IComponentMetaData
    public componentName: string = 'Person View ane Edit';
    public componentDescription: string = 'Enables the user to view and Edit Person';
    // IComponentMetaData

    @Prop() public entityModel!: EntityPageModel<PersonExtendedModel>;

    constructor() {
        super();
    }
}

Vue.component('crm-entity-segment-person-view', EntitySegmentPersonViewComponent);
