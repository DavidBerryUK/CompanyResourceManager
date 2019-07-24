import ListItemModel                            from '@/repositories/models/shared/collections/ListItemModel';
import { IEntityFactory }                       from './interfaces/IEntityFactory';

export default class EntityFactoryListItem implements
    IEntityFactory<ListItemModel> {

    public create(): ListItemModel {
        return new ListItemModel();
    }
}
