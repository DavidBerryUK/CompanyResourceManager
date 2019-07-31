import EntityPageModel                          from './EntityPageModel';
import ListItemModel                            from '@/repositories/models/listItem/ListItemModel';

export default class EntityPageModelWithReferences<T> extends EntityPageModel<T> {

    public jobRolesList: Array<ListItemModel> = new Array<ListItemModel>();

}
