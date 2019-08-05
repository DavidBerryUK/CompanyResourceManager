import { IModelFactory }                        from './../../repositories/modelFactories/interfaces/IModelFactory';

export default class ObjectMapper {

    /** Map any object to a strongly typed object */
    public static MapItem<TDestination>(source: any, modelFactory: IModelFactory<TDestination> ): TDestination {

        if ( source === undefined) {
            throw new Error('Source object can not be undefined');
        }

        if ( source === null) {
            throw new Error('Source object can not be null');
        }

        if ( modelFactory === undefined) {
            throw new Error('model factory can not be undefined');
        }

        if ( modelFactory === null) {
            throw new Error('model factory  can not be null');
        }

        const result = modelFactory.create();
        /** Map a single object */
        // tslint:disable-next-line:forin
        for (const key in result) {
            const value = source[key];
            if ( value !== undefined ) {
                result[key] = value;
            }
        }

        return result;
    }

    public static MapArray<TDestination>(sourceArray: Array<any>, modelFactory: IModelFactory<TDestination> ): Array<TDestination> {

        if ( sourceArray === undefined) {
            throw new Error('sourceArray object can not be undefined');
        }

        if ( sourceArray === null) {
            throw new Error('sourceArray object can not be null');
        }

        if ( modelFactory === undefined) {
            throw new Error('model factory can not be undefined');
        }

        if ( modelFactory === null) {
            throw new Error('model factory  can not be null');
        }

        const result = new Array<TDestination>();

        sourceArray.forEach((sourceItem) => {
            const item = this.MapItem(sourceItem, modelFactory);
            result.push(item);
        });

        return result;
    }
}
