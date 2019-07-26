import { IModelFactory }                       from '@/repositories/modelFactories/interfaces/IModelFactory';

export  interface IModelGenericMapper<T> {
    mapToEntity(item: any): T;
    mapToArray(dataArray: any[]): Array<T>;
}
