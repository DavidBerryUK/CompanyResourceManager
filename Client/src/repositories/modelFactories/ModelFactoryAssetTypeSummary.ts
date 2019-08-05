import { IModelFactory }                        from './interfaces/IModelFactory';
import AssetTypeSummaryModel                    from '@/repositories/models/assetType/AssetTypeSummaryModel';

export default class ModelFactoryAssetTypeSummary implements
    IModelFactory<AssetTypeSummaryModel> {

    public create(): AssetTypeSummaryModel {
        return new AssetTypeSummaryModel();
    }
}
