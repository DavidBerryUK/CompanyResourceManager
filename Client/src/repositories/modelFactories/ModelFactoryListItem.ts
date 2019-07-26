import ListItemModel                            from '@/repositories/models/shared/collections/ListItemModel';
import { IModelFactory }                       from './interfaces/IModelFactory';

export default class ModelFactoryListItem implements
    IModelFactory<ListItemModel> {

    public create(): ListItemModel {
        return new ListItemModel();
    }
}
