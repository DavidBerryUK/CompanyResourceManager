import { IEntityFactory }                       from '@/repositories/modelFactories/interfaces/IEntityFactory';
import { IObjectGenericMapper }                 from '../interfaces/IObjectGenericMapper';

export default class ObjectGenericMapper<T> implements IObjectGenericMapper<T> {

    private entityFactory: IEntityFactory<T>;

    constructor(entityFactory: IEntityFactory<T>) {
        this.entityFactory = entityFactory;
    }

    public mapToEntity(item: any): T {
        const response = Object.assign(this.entityFactory.create(), item);
        return response;
    }
    public mapToArray(dataArray: any[]): T[] {
        let response = new Array<T>();
        response = dataArray.map((item) => Object.assign(this.entityFactory.create(), item));
        return response;
    }
}
