import ListItemModel                            from '@/repositories/models/listItem/ListItemModel';
import { IModelFactory }                        from './interfaces/IModelFactory';

export default class ModelFactoryListItem implements IModelFactory<ListItemModel> {

    public create(): ListItemModel {
        return new ListItemModel();
    }
}
