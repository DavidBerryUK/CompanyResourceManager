import { IApiModel }                            from '@/repositories/models/interfaces/IApiModel';

export default class ListItemModel implements IApiModel {

    public id: string;
    public name: string;

    constructor() {
        this.id = '';
        this.name = '';
    }

    get entityName(): string {
        return 'item';
    }

    get entityKey(): string {
        return `${this.id}`;
    }

    get entityValue(): string {
        return `${this.name}`;
    }

    get entitySortValue(): any {
        return `${this.name}`;
    }
}
