import UiListItem                           from './UiListItem';
import UiListCollection                     from './UiListCollection';

/**
 * This class is used to store the state of a UiListCollection without
 * storing the entities.
 *
 * The keys of the selected items are stored, together with the
 * state of the 'select all' button.
 *
 * @export
 * @class UiListCollectionState
 */
export default class UiListCollectionState {

    public allSelected: boolean = true;
    public selectedKeys: Array<string> = new Array<string>();

    get selectedKeysForFilter(): Array<string> {
        if ( this.allSelected) {
            return new Array<string>();
        }
        return this.selectedKeys;
    }

    /**
     * stored the state of a UiListCollection
     *
     * @param {UiListCollection} collection
     * @memberof UiListCollectionState
     */
    public saveState(collection: UiListCollection) {
        // store 'select all' switch state
        //
        this.allSelected = collection.allSelected;

        // store entity selected state
        //
        this.selectedKeys = collection.items
        .filter( (item: UiListItem ) => item.selected )
        .map( (item: UiListItem ) => item.id );
    }


    /**
     * restores the state of a UiListCollection
     *
     * @param {UiListCollection} collection
     * @memberof UiListCollectionState
     */
    public restoreState(collection: UiListCollection) {
        // restore 'select all' state
        //
        collection.allSelected = this.allSelected;

        // restore switch state of each entity
        //
        collection.items.forEach((item: UiListItem) => item.selected === false );


        this.selectedKeys.forEach((key: string) => {

            collection.items.filter((item: UiListItem) => item.id === key)
            .forEach((item: UiListItem) => {
                item.selected = true;
            });
        });
    }
}
