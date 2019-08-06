import { IModelFactory }                        from './interfaces/IModelFactory';
import AssetExtendedModel                       from '@/repositories/models/asset/AssetExtendedModel';
import ModelFactoryBase                         from './base/ModelFactoryBase';

export default class ModelFactoryAssetExtended
    extends ModelFactoryBase<AssetExtendedModel>
    implements IModelFactory<AssetExtendedModel> {

    public create(): AssetExtendedModel {
        return new AssetExtendedModel();
    }
}
