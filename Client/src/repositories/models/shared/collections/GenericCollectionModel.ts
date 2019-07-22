import Vue                                      from 'vue';

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
export default class GenericCollectionModel<T> {

    /**
     * when used as the response model from calling an api, this is used
     * to indicate if the server operation was a success
     * @type {boolean}
     * @memberof GenericCollectionModel
     */
    public success: boolean;


    /**
     * If any error occurred on the server, this will contain
     * the nature of the error
     * @type {string}
     * @memberof GenericCollectionModel
     */
    public errorMessage: string;

    //
    // List of items
    //
    /**
     * A list of generic objects
     *
     * @type {Array<T>}
     * @memberof GenericCollectionModel
     */
    public items: T[];

    constructor() {
        this.items = new Array<T>();
        this.success = false;
        this.errorMessage = '';
    }

    /**
     * Update an item, note that in VUE an items needs to be
     * inserted using this method of it can not observe
     * the change
     *
     * @param {Vue} vueInstance
     * @param {T} item
     * @param {((item:T) => boolean)} match
     * @memberof GenericCollectionModel
     */
    public updateItem(vueInstance: Vue, item: T, match: ((item: T) => boolean)) {
        const index = this.findIndexOfItem(match);
        if (index >= 0) {
            vueInstance.$set(this.items, index, item);
        }
    }


    /**
     * Add an item to the list
     *
     * @param {T} item
     * @memberof GenericCollectionModel
     */
    public addItem(item: T) {
        this.items.push(item);
    }

    /**
     * Sort the item list ascending by strings object T properties
     *
     * @param {((a:T,b:T) => {a:string, b: string})} stringValues
     * @memberof GenericCollectionModel
     * @example this.dataList.sortAscByString((a,b)=>{ return {a:a.branchName,b:b.branchName }});
     */
    public sortAscByString(stringValues: ((a: T, b: T) => { a: string, b: string })) {
        this.items = this.items.sort((s1, s2) => {
            const data = stringValues(s1, s2);
            const a = data.a.toLowerCase();
            const b = data.b.toLowerCase();
            if (a < b) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
            return 0;
        });
    }

    /**
     * @description find the index of a element in the array,
     * @param {((item:T) => boolean)} match
     * @returns {number} - the index of the item, of -1 if not found
     * @memberof GenericCollectionModel
     * @example var index = this.dataList.findIndexOfItem((item) => { return model.keyId == item.keyId });
     */
    public findIndexOfItem(match: ((item: T) => boolean)): number {
        for (let i = 0; i < this.items.length; i++) {
            const response = match(this.items[i]);
            if (response) {
                return i;
            }
        }
        return -1;
    }
}
