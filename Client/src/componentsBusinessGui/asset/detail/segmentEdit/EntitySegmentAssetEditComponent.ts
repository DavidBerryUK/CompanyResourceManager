import { Prop }                                 from 'vue-property-decorator';
import AssetExtendedModel                       from '@/repositories/models/asset/AssetExtendedModel';
import Component                                from 'vue-class-component';
import EntityPageModel                          from '../../../../componentsEntityLayouts/models/EntityPageModel';
import EntitySegmentBase                        from '@/componentsEntityLayouts/entitySegmentBase/EntitySegmentBase';
import Vue                                      from 'vue';

@Component
export default class EntitySegmentAssetEditComponent extends EntitySegmentBase<AssetExtendedModel> {

    @Prop() public entityModel!: EntityPageModel<AssetExtendedModel>;

    constructor() {
        super();
    }
}

Vue.component('crm-entity-segment-asset-edit', EntitySegmentAssetEditComponent);
