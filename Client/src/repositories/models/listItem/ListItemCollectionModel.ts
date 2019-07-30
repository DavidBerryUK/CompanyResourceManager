import ListItemModel                            from '@/repositories/models/listItem/ListItemModel';

/**
 * A Generic collection of objects, generally used to contain the
 * response from an API.
 *
 * Fields are included for a success indicator and a error message.
 *
 * @export
 * @class GenericCollectionModel
 * @template T
 */
export default class ListItemCollectionModel {

    private items: Array<ListItemModel> = new Array<ListItemModel>();

    constructor(items: Array<ListItemModel> = new Array<ListItemModel>()) {
        this.items = items;
    }

    public get all(): Array<ListItemModel> {
        return this.items;
    }

    public get selected(): Array<ListItemModel> {
        return this.items.filter((item) => item.selected === true);
    }

    public get unSelected(): Array<ListItemModel> {
        return this.items.filter((item) => item.selected === false);
    }
}
