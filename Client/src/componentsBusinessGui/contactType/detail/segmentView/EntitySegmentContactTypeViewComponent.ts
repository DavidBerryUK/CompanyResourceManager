import { Component }                            from 'vue-property-decorator';
import { IComponentMetaData }                   from '@/components/interfaces/ComponentMetaDataInterfaces';
import { Prop }                                 from 'vue-property-decorator';
import ContactTypeSummaryModel                  from '@/repositories/models/contactType/ContactTypeSummaryModel';
import EntityPageModel                          from '../../../../componentsEntityLayouts/models/EntityPageModel';
import EntitySegmentBase                        from '@/componentsEntityLayouts/entitySegmentBase/EntitySegmentBase';
import Vue                                      from 'vue';

@Component
export default class EntitySegmentContactTypeViewComponent extends EntitySegmentBase<ContactTypeSummaryModel>
    implements IComponentMetaData {

    // IComponentMetaData
    public componentName: string = 'Contact Type View ane Edit';
    public componentDescription: string = 'Enables the user to view and Edit a Contact Type';
    // IComponentMetaData

    @Prop() public entityModel!: EntityPageModel<ContactTypeSummaryModel>;

    constructor() {
        super();
    }
}

Vue.component('crm-entity-segment-contacttype-view', EntitySegmentContactTypeViewComponent);
