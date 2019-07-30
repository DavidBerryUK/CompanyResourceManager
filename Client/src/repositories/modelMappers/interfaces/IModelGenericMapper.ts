export  interface IModelGenericMapper<T> {
    mapToEntity(item: any): T;
    mapToArray(dataArray: any[]): Array<T>;
}
