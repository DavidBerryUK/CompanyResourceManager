import { IEntityFactory }                       from '@/repositories/modelFactories/interfaces/IEntityFactory';

export  interface IObjectGenericMapper<T> {
    mapToEntity(item: any): T;
    mapToArray(dataArray: any[]): Array<T>;
}
