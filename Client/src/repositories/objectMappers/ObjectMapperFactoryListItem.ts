import { IObjectGenericMapper }                 from './interfaces/IObjectGenericMapper';
import EntityFactoryListItem                    from '../modelFactories/EntityFactoryListItem';
import ListItemModel                            from '@/repositories/models/shared/collections/ListItemModel';
import ObjectGenericMapper                      from './generic/ObjectGenericMapper';

export default class ObjectMapperFactoryListItem {

    public static createMapper(): IObjectGenericMapper<ListItemModel> {
        return new ObjectGenericMapper<ListItemModel> (
            new EntityFactoryListItem());
    }

}
