import { IObjectArrayMapper }                   from "../interfaces/IObjectArrayMapper";
import AssetTypeSummmaryModel                           from '../../models/assetType/AssetTypeSummaryModel';

// object mappers transform plain java objects
// into strongly typed typescript objects
export default class ObjectArrayMapperAssetTypeModel implements IObjectArrayMapper<AssetTypeSummmaryModel> {
    
    map(dataArray: any[]): Array<AssetTypeSummmaryModel> {
        
        var response = new Array<AssetTypeSummmaryModel>();
        
        response = dataArray.map((item) => { return  Object.assign(new AssetTypeSummmaryModel(), item) });

        return response;
    }
}