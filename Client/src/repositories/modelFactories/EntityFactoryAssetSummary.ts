import { IEntityFactory }                       from './interfaces/IEntityFactory';
import AssetSummaryModel                        from '@/repositories/models/asset/AssetSummaryModel';

export default class EntityFactoryAssetSummary implements
    IEntityFactory<AssetSummaryModel> {

    public create(): AssetSummaryModel {
        return new AssetSummaryModel();
    }
}
