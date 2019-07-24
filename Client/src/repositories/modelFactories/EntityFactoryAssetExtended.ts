import { IEntityFactory }                       from './interfaces/IEntityFactory';
import AssetExtendedModel                       from '@/repositories/models/asset/AssetExtendedModel';


export default class EntityFactoryAssetExtended implements
    IEntityFactory<AssetExtendedModel> {

    public create(): AssetExtendedModel {
        return new AssetExtendedModel();
    }
}
