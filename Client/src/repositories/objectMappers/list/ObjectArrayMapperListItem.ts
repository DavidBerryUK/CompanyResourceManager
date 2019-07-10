import { IObjectArrayMapper }                   from '../interfaces/IObjectArrayMapper';
import ListItemModel                            from '../../models/shared/collections/ListItemModel';

export default class ObjectArrayMapperListItem implements IObjectArrayMapper<ListItemModel> {
    
    map(dataArray: any[]): Array<ListItemModel> {
        
        var response = new Array<ListItemModel>();
        
        response = dataArray.map((item) => { return  Object.assign(new ListItemModel(), item) });

        return response;
    }
}