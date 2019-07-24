import { IEntityFactory }                       from './interfaces/IEntityFactory';
import AssetTypeExtendedModel                   from '@/repositories/models/assetType/AssetTypeExtendedModel';

export default class EntityFactoryAssetTypeExtended implements
    IEntityFactory<AssetTypeExtendedModel> {

    public create(): AssetTypeExtendedModel {
        return new AssetTypeExtendedModel();
    }
}
