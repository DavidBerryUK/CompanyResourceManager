import { IObjectMapper }                        from "../interfaces/IObjectMapper";
import AssetSummaryModel                        from '@/repositories/models/asset/AssetSummaryModel';

// object mappers transform plain java objects
// into strongly typed typescript objects
export default class ObjectMapperAssetSummaryModel implements IObjectMapper<AssetSummaryModel> {
    
    map(item: any): AssetSummaryModel {
                        
        var response = Object.assign(new AssetSummaryModel(), item);

        return response;
    }
}