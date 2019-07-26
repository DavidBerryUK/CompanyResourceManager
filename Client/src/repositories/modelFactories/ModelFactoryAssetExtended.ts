import { IModelFactory }                       from './interfaces/IModelFactory';
import AssetExtendedModel                       from '@/repositories/models/asset/AssetExtendedModel';

export default class ModelFactoryAssetExtended implements
    IModelFactory<AssetExtendedModel> {

    public create(): AssetExtendedModel {
        return new AssetExtendedModel();
    }
}
