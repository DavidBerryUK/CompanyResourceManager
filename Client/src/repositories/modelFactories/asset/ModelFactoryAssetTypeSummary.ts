import { IModelFactory }                        from '../interfaces/IModelFactory';
import AssetTypeSummaryModel                    from '@/repositories/models/assetType/AssetTypeSummaryModel';
import ModelFactoryBase                         from '../base/ModelFactoryBase';

export default class ModelFactoryAssetTypeSummary
    extends ModelFactoryBase<AssetTypeSummaryModel>
    implements IModelFactory<AssetTypeSummaryModel> {

    public create(): AssetTypeSummaryModel {
        return new AssetTypeSummaryModel();
    }
}
