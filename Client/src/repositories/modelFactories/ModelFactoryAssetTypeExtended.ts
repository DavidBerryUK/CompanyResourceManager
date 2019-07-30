import { IModelFactory }                        from './interfaces/IModelFactory';
import AssetTypeExtendedModel                   from '@/repositories/models/assetType/AssetTypeExtendedModel';

export default class ModelFactoryAssetTypeExtended implements
    IModelFactory<AssetTypeExtendedModel> {

    public create(): AssetTypeExtendedModel {
        return new AssetTypeExtendedModel();
    }
}
