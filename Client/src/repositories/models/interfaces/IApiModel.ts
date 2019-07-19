
/**
 * Base interface for api models to support, provides methods to
 * get primary key, a user readable string, and the type of entity
 *
 * @export
 * @interface IApiModel
 */
export interface IApiModel {

    /**
     * return the name of the entity, e.g. User for UserModel.
     * This used to provide user readable comments and alerts
     *
     * @returns {string}
     * @memberof IApiModel
     */
    entityName: string;


    /**
     * return the primary key of an object
     *
     * @returns {string}
     * @memberof IApiModel
     */
    entityKey: string;


    /**
     * return a user readable key value, e.g. branch name
     *
     * @returns {string}
     * @memberof IApiModel
     */
    entityValue: string;


    /**
     * return variable that is used for sorting
     *
     * @returns {any}
     * @memberof IApiModel
     */
    entitySortValue: any;
}
