import { Component }                            from 'vue-property-decorator';
import { IComponentMetaData }                   from '@/components/interfaces/ComponentMetaDataInterfaces';
import { Prop }                                 from 'vue-property-decorator';
import AssetTypeExtendedModel                   from '@/repositories/models/assetType/AssetTypeExtendedModel';
import EntityPageModel                          from '../../../../componentsEntityLayouts/models/EntityPageModel';
import EntitySegmentBase                        from '@/componentsEntityLayouts/entitySegmentBase/EntitySegmentBase';
import Vue                                      from 'vue';

@Component
export default class EntitySegmentAssetTypeViewComponent extends EntitySegmentBase<AssetTypeExtendedModel>
    implements IComponentMetaData {

    // IComponentMetaData
    public componentName: string = 'Asset Type View ane Edit';
    public componentDescription: string = 'Enables the user to view and Edit Asset Types';
    // IComponentMetaData

    @Prop() public entityModel!: EntityPageModel<AssetTypeExtendedModel>;

    constructor() {
        super();
    }
}

Vue.component('crm-entity-segment-assettype-view', EntitySegmentAssetTypeViewComponent);
