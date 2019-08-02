import { IApiModel }                            from '@/repositories/models/interfaces/IApiModel';

export default class ListItemModel implements IApiModel {

    public id: string;
    public name: string;
    public selected: boolean | undefined;

    constructor() {
        this.id = '00000000-0000-0000-0000-000000000000';
        this.name = '';
        this.selected = undefined;
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

    get selectedAsText(): string {

        if ( this.selected === true) {
            return 'yes';
        }
        if ( this.selected === false) {
            return 'no';
        }
        return '';
    }
}
