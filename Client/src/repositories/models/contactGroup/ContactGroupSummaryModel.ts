import { IApiModel }                            from '@/repositories/models/interfaces/IApiModel';

export default class ContactGroupSummaryModel implements IApiModel {

    public contactGroupId: string;
    public PreferredContactId: string;
    public notes: string;
    public isActive: boolean;

    constructor() {
        this.contactGroupId = '00000000-0000-0000-0000-000000000000';
        this.PreferredContactId = '';
        this.notes = '';
        this.isActive = true;
    }

    public get entityName(): string {
        return 'Contract Group';
    }

    public get entityKey(): string {
        return `${this.contactGroupId}`;
    }

    public get entityValue(): string {
        return `${this.contactGroupId}`;
    }

    public get entitySortValue(): any {
        return `${this.contactGroupId}`;
    }
}
