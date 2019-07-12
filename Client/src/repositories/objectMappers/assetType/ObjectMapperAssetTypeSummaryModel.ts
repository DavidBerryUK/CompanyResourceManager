import { IObjectMapper }                        from "../interfaces/IObjectMapper";
import AssetTypeSummmaryModel                   from '../../models/assetType/AssetTypeSummaryModel';

// object mappers transform plain java objects
// into strongly typed typescript objects
export default class ObjectMapperAssetTypeSummaryModel implements IObjectMapper<AssetTypeSummmaryModel> {
    
    map(item: any): AssetTypeSummmaryModel {
                        
        var response = Object.assign(new AssetTypeSummmaryModel(), item);

        return response;
    }
}