import { IModelGenericMapper }                  from './interfaces/IModelGenericMapper';
import ListItemModel                            from '@/repositories/models/listitem/ListItemModel';
import ModelFactoryListItem                     from '../modelFactories/ModelFactoryListItem';
import ModelGenericMapper                       from './generic/ModelGenericMapper';

export default class ModelMapperFactoryListItem {

    public static createMapper(): IModelGenericMapper<ListItemModel> {
        return new ModelGenericMapper<ListItemModel> (
            new ModelFactoryListItem());
    }
}
