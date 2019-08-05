import { IApiModel }                            from '@/repositories/models/interfaces/IApiModel';

export default class ContactSummaryModel implements IApiModel {

    public contactId: string;
    public contactGroupId: string;
    public contactTypeId: string;
    public value: string;
    public isActive: boolean;

    constructor() {
        this.contactId = '00000000-0000-0000-0000-000000000000';
        this.contactGroupId = '';
        this.contactTypeId = '';
        this.isActive = true;
        this.value = '';
    }

    public get entityName(): string {
        return 'Contact';
    }

    public get entityKey(): string {
        return `${this.contactId}`;
    }

    public get entityValue(): string {
        return `${this.value}`;
    }

    public get entitySortValue(): any {
        return `${this.value}`;
    }
}
