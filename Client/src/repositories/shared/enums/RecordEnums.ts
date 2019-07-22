
/**
 * Defines the type of records to return from an API, either
 * active, inactive (deleted records), all or undefined.
 * @readonly
 * @enum {number}
 */
export enum EnumRecordStatusFilter {
    Undefined = -1,
    Active = 0,
    InActive = 1,
    All = 2,
}
