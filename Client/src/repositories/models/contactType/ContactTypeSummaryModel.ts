import { IApiModel }                            from '../interfaces/IApiModel';

export default class ContactTypeSummaryModel implements IApiModel {

    public contactTypeId: string;
    public name: string;
    public isActive: boolean;

    constructor() {
        this.contactTypeId = '00000000-0000-0000-0000-000000000000';
        this.name = '';
        this.isActive = false;
    }

    public get entityName(): string {
        return 'ContactType';
    }

    public get entityKey(): string {
        return `${this.contactTypeId}`;
    }

    public get entityValue(): string {
        return `${this.name}`;
    }

    public get entitySortValue(): any {
        return `${this.name}`;
    }
}
