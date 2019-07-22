import { IObjectMapper }                        from '../interfaces/IObjectMapper';
import AssetExtendedModel                       from '@/repositories/models/asset/AssetExtendedModel';

// object mappers transform plain java objects
// into strongly typed typescript objects
export default class ObjectMapperAssetExtendedModel implements IObjectMapper<AssetExtendedModel> {

    public map(item: any): AssetExtendedModel {
        const response = Object.assign(new AssetExtendedModel(), item);
        return response;
    }
}
