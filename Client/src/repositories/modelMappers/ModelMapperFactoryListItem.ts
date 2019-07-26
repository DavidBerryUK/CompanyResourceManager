import { IModelGenericMapper }                  from './interfaces/IModelGenericMapper';
import ModelFactoryListItem                    from '../modelFactories/ModelFactoryListItem';
import ListItemModel                            from '@/repositories/models/shared/collections/ListItemModel';
import ModelGenericMapper                       from './generic/ModelGenericMapper';

export default class ModelMapperFactoryListItem {

    public static createMapper(): IModelGenericMapper<ListItemModel> {
        return new ModelGenericMapper<ListItemModel> (
            new ModelFactoryListItem());
    }
}
