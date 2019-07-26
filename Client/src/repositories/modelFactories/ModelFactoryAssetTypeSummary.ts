import { IModelFactory }                       from './interfaces/IModelFactory';
import AssetTypeSummmaryModel                   from '@/repositories/models/assetType/AssetTypeSummaryModel';

export default class ModelFactoryAssetTypeSummary implements
    IModelFactory<AssetTypeSummmaryModel> {

    public create(): AssetTypeSummmaryModel {
        return new AssetTypeSummmaryModel();
    }
}
