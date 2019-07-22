import UiListItem                           from './UiListItem';

// collection of list items used to map to a
// list of switches, checkboxes, radio buttons
//
export default class UiListCollection {

    public isLoading: boolean = false;
    public items: Array<UiListItem> = new Array<UiListItem>();

    // if all is selected, then no values are returned for
    // selectedItems() and selectItemIds()
    //
    public allSelected: boolean = true;

}
