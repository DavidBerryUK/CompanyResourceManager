import { IModelFactory }                        from '@/repositories/modelFactories/interfaces/IModelFactory';

export default abstract class ModelFactoryBase<T> implements IModelFactory<T> {

    public abstract create(): T;

    public createFrom(obj: any): T {
        const result = this.MapItem(obj);
        return result;
    }

    public MapItem(source: any): T {

        if (source === undefined) {
            throw new Error('Source object can not be undefined');
        }

        if (source === null) {
            throw new Error('Source object can not be null');
        }

        const result = this.create();
        /** Map a single object */
        // tslint:disable-next-line:forin
        for (const key in result) {
            const value = source[key];
            if (value !== undefined) {
                result[key] = value;
            }
        }

        return result;
    }

}
