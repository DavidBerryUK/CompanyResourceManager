
/**
 * Map POCO objects to Typescript Objects, used when receiving data from
 * a api call.
 *
 * @export
 * @interface IObjectArrayMapper
 * @template T
 */
export interface IObjectMapper<T> {
    map(data: any): T;
}
