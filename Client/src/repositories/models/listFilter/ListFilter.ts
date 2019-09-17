import { IListFilter }                          from './interfaces/IListFilterInterfaces';


export default class ListFilter implements IListFilter {

    public static className = 'ListFilter';

    public get entityName(): string {
        return ListFilter.className;
    }

    public get isFilterSet(): boolean {
        return false;
    }
}
