import { IObjectMapper }                        from '../interfaces/IObjectMapper';
import AssetTypeExtendedModel                   from '@/repositories/models/assetType/AssetTypeExtendedModel';

// object mappers transform plain java objects
// into strongly typed typescript objects
export default class ObjectMapperAssetTypeExtendedModel implements IObjectMapper<AssetTypeExtendedModel> {

    public map(item: any): AssetTypeExtendedModel {
        const response = Object.assign(new AssetTypeExtendedModel(), item);
        return response;
    }
}
