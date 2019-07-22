import { IObjectArrayMapper }                   from '../interfaces/IObjectArrayMapper';
import AssetTypeSummmaryModel                   from '../../models/assetType/AssetTypeSummaryModel';

// object mappers transform plain java objects
// into strongly typed typescript objects
export default class ObjectArrayMapperAssetTypeModel implements IObjectArrayMapper<AssetTypeSummmaryModel> {

    public map(dataArray: any[]): Array<AssetTypeSummmaryModel> {
        let response = new Array<AssetTypeSummmaryModel>();
        response = dataArray.map((item) => Object.assign(new AssetTypeSummmaryModel(), item));
        return response;
    }
}
