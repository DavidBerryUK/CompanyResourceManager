export interface IModelFactory<T> {
    create(): T;
    createFrom(obj: any): T;
    createArray(): Array<T>;
    createArrayFrom(obj: any): Array<T>;
}
