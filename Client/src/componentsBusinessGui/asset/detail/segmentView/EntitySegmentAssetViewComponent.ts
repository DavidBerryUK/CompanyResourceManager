import { Component }                            from 'vue-property-decorator';
import { IComponentMetaData }                   from '@/components/interfaces/ComponentMetaDataInterfaces';
import { Prop }                                 from 'vue-property-decorator';
import AssetExtendedModel                       from '@/repositories/models/asset/AssetExtendedModel';
import EntityPageModel                          from '../../../../componentsEntityLayouts/models/EntityPageModel';
import EntitySegmentBase                        from '@/componentsEntityLayouts/entitySegmentBase/EntitySegmentBase';
import Vue                                      from 'vue';

@Component
export default class EntitySegmentAssetViewComponent extends EntitySegmentBase<AssetExtendedModel>
    implements IComponentMetaData {

    // IComponentMetaData
    public componentName: string = 'Aset View ane Edit';
    public componentDescription: string = 'Enables the user to view and an Edit Asset';
    // IComponentMetaData

    @Prop() public entityModel!: EntityPageModel<AssetExtendedModel>;

    constructor() {
        super();
    }
}

Vue.component('crm-entity-segment-asset-view', EntitySegmentAssetViewComponent);
