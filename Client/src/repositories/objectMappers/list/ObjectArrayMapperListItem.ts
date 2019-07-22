import { IObjectArrayMapper }                   from '../interfaces/IObjectArrayMapper';
import ListItemModel                            from '../../models/shared/collections/ListItemModel';

// object mappers transform plain java objects
// into strongly typed typescript objects
export default class ObjectArrayMapperListItem implements IObjectArrayMapper<ListItemModel> {

    public map(dataArray: any[]): Array<ListItemModel> {
        let response = new Array<ListItemModel>();
        response = dataArray.map((item) => Object.assign(new ListItemModel(), item));
        return response;
    }
}
