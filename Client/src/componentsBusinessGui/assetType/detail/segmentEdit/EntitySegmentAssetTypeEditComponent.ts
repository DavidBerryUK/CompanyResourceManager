import { Prop }                                 from 'vue-property-decorator';
import AssetTypeExtendedModel                   from '@/repositories/models/assetType/AssetTypeExtendedModel';
import Component                                from 'vue-class-component';
import EntityPageModel                          from '../../../../componentsEntityLayouts/models/EntityPageModel';
import EntitySegmentBase                        from '@/componentsEntityLayouts/entitySegmentBase/EntitySegmentBase';
import Vue                                      from 'vue';

@Component
export default class EntitySegmentAssetTypeEditComponent extends EntitySegmentBase<AssetTypeExtendedModel> {

    @Prop() public entityModel!: EntityPageModel<AssetTypeExtendedModel>;

    constructor() {
        super();
    }
}

Vue.component('crm-entity-segment-assettype-edit', EntitySegmentAssetTypeEditComponent);
