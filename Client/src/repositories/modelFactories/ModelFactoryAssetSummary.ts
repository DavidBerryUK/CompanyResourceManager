import { IModelFactory }                        from './interfaces/IModelFactory';
import AssetSummaryModel                        from '@/repositories/models/asset/AssetSummaryModel';

export default class ModelFactoryAssetSummary implements
    IModelFactory<AssetSummaryModel> {

    public create(): AssetSummaryModel {
        return new AssetSummaryModel();
    }
}
