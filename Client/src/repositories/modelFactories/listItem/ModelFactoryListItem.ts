import ListItemModel                            from '@/repositories/models/listItem/ListItemModel';
import { IModelFactory }                        from '../interfaces/IModelFactory';
import ModelFactoryBase                         from '../base/ModelFactoryBase';

export default class ModelFactoryListItem
    extends ModelFactoryBase<ListItemModel>
    implements IModelFactory<ListItemModel> {

    public create(): ListItemModel {
        return new ListItemModel();
    }
}
