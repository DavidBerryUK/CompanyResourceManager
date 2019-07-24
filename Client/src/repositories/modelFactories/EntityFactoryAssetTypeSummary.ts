import { IEntityFactory }                       from './interfaces/IEntityFactory';
import AssetTypeSummmaryModel                   from '@/repositories/models/assetType/AssetTypeSummaryModel';

export default class EntityFactoryAssetTypeSummary implements
    IEntityFactory<AssetTypeSummmaryModel> {

    public create(): AssetTypeSummmaryModel {
        return new AssetTypeSummmaryModel();
    }
}
