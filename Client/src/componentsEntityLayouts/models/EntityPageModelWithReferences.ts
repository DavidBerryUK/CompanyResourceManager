import { IApiModel }                            from './../../repositories/models/interfaces/IApiModel';
import EntityPageModel                          from './EntityPageModel';
import ListItemModel                            from '@/repositories/models/listItem/ListItemModel';

export default class EntityPageModelWithReferences<T extends IApiModel> extends EntityPageModel<T> {

    public jobRolesList: Array<ListItemModel> = new Array<ListItemModel>();
    public AssetTypesList: Array<ListItemModel> = new Array<ListItemModel>();
    public contactValidationList: Array<ListItemModel> = new Array<ListItemModel>();

}
