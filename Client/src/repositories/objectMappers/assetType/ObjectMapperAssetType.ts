import { IObjectMapper }                        from "../interfaces/IObjectMapper";
import AssetTypeModel                           from '../../models/assetType/AssetTypeModel';


export default class ObjectMapperAssetType implements IObjectMapper<AssetTypeModel> {
    
    map(item: any): AssetTypeModel {
                        
        var response = Object.assign(new AssetTypeModel(), item);

        return response;
    }
}