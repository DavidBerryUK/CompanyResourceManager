import { IObjectMapper }                        from '../interfaces/IObjectMapper';
import AssetSummaryModel                        from '@/repositories/models/asset/AssetSummaryModel';

// object mappers transform plain java objects
// into strongly typed typescript objects
export default class ObjectMapperAssetSummaryModel implements IObjectMapper<AssetSummaryModel> {

    public map(item: any): AssetSummaryModel {
        const response = Object.assign(new AssetSummaryModel(), item);
        return response;
    }
}
