import { IModelFactory }                        from '../interfaces/IModelFactory';
import AssetSummaryModel                        from '@/repositories/models/asset/AssetSummaryModel';
import ModelFactoryBase                         from '../base/ModelFactoryBase';

export default class ModelFactoryAssetSummary
    extends ModelFactoryBase<AssetSummaryModel>
    implements IModelFactory<AssetSummaryModel> {

    public create(): AssetSummaryModel {
        return new AssetSummaryModel();
    }
}
