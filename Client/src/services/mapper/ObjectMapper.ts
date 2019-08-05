export default class ObjectMapper {

    /** Map any object to a strongly typed object */
    public static Map<TDestination>(source: any, destination: TDestination ): TDestination {

        if ( source === undefined) {
            throw new Error('Source object can not be undefined');
        }

        if ( source === null) {
            throw new Error('Source object can not be null');
        }

        if ( destination === undefined) {
            throw new Error('Destination object can not be undefined');
        }

        if ( destination === null) {
            throw new Error('Destination object can not be null');
        }

        // tslint:disable-next-line:forin
        for (const key in destination) {
            const value = source[key];
            if ( value !== undefined ) {
                destination[key] = value;
            }
        }

        return destination;
    }
}
