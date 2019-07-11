import { IObjectMapper }                        from "../interfaces/IObjectMapper";
import AssetSummaryModel                        from '@/repositories/models/asset/AssetSummaryModel';

export default class ObjectMapperAssetSummaryModel implements IObjectMapper<AssetSummaryModel> {
    
    map(item: any): AssetSummaryModel {
                        
        var response = Object.assign(new AssetSummaryModel(), item);

        return response;
    }
}