export interface IModelFactory<T> {
    create(): T;
    createFrom(obj: any): T;
}
