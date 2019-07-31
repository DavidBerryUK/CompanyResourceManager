import { IModelFactory }                        from '@/repositories/modelFactories/interfaces/IModelFactory';
import { IModelGenericMapper }                  from '../interfaces/IModelGenericMapper';

export default class ModelGenericMapper<T> implements IModelGenericMapper<T> {

    private ModelFactory: IModelFactory<T>;

    constructor(ModelFactory: IModelFactory<T>) {
        this.ModelFactory = ModelFactory;
    }

    public mapToEntity(item: any): T {
        const response = Object.assign(this.ModelFactory.create(), item);
        return response;
    }

    public mapToArray(dataArray: any[]): T[] {
        let response = new Array<T>();
        response = dataArray.map((item) => Object.assign(this.ModelFactory.create(), item));
        return response;
    }
}
