import { IModelFactory }                        from '../interfaces/IModelFactory';
import AssetTypeExtendedModel                   from '@/repositories/models/assetType/AssetTypeExtendedModel';
import ModelFactoryBase                         from '../base/ModelFactoryBase';

export default class ModelFactoryAssetTypeExtended
    extends ModelFactoryBase<AssetTypeExtendedModel>
    implements IModelFactory<AssetTypeExtendedModel> {

    public create(): AssetTypeExtendedModel {
        return new AssetTypeExtendedModel();
    }
}
