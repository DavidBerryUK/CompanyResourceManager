import { IObjectArrayMapper }                   from "../interfaces/IObjectArrayMapper";
import AssetSummaryModel                        from '@/repositories/models/asset/AssetSummaryModel';

// object mappers transform plain java objects
// into strongly typed typescript objects
export default class ObjectArrayMapperAssetSummaryModel implements IObjectArrayMapper<AssetSummaryModel> {
    
    map(dataArray: any[]): Array<AssetSummaryModel> {
        
        var response = new Array<AssetSummaryModel>();
        
        response = dataArray.map((item) => { return  Object.assign(new AssetSummaryModel(), item) });

        return response;
    }
}