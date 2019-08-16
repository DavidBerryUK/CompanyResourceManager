import { IApiModel }                            from '@/repositories/models/interfaces/IApiModel';
import ContactSummaryModel                      from '@/repositories/models/contact/ContactSummaryModel';

export default class ContactGroupSummaryModel implements IApiModel {

    public static className = 'ContactGroupSummaryModel';

    public contactGroupId: string;
    public preferredContactId: string;
    public notes: string;
    public isActive: boolean;

    public contacts: Array<ContactSummaryModel> = new Array<ContactSummaryModel>();

    constructor() {
        this.contactGroupId = '00000000-0000-0000-0000-000000000000';
        this.preferredContactId = '';
        this.notes = '';
        this.isActive = true;
    }

    public get entityName(): string {
        return ContactGroupSummaryModel.className;
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
