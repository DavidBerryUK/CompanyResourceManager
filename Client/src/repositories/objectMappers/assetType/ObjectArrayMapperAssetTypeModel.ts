import { IObjectArrayMapper }                   from "../interfaces/IObjectArrayMapper";
import AssetTypeModel                           from '../../models/assetType/AssetTypeModel';

// object mappers transform plain java objects
// into strongly typed typescript objects
export default class ObjectArrayMapperAssetTypeModel implements IObjectArrayMapper<AssetTypeModel> {
    
    map(dataArray: any[]): Array<AssetTypeModel> {
        
        var response = new Array<AssetTypeModel>();
        
        response = dataArray.map((item) => { return  Object.assign(new AssetTypeModel(), item) });

        return response;
    }
}