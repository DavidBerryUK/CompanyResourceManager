import { IObjectMapper }                        from "../interfaces/IObjectMapper";
import AssetTypeModel                           from '../../models/assetType/AssetTypeModel';

// object mappers transform plain java objects
// into strongly typed typescript objects
export default class ObjectMapperAssetType implements IObjectMapper<AssetTypeModel> {
    
    map(item: any): AssetTypeModel {
                        
        var response = Object.assign(new AssetTypeModel(), item);

        return response;
    }
}