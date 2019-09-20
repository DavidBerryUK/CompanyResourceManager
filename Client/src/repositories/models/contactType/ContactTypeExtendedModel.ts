import ContactTypeSummaryModel                  from '@/repositories/models/contactType/ContactTypeSummaryModel';

export default class ContactTypeExtendedModel extends ContactTypeSummaryModel {

    public static className = 'ContactTypeExtendedModel';

    public contactValidationName: string;

    constructor() {
        super();
        this.contactValidationName = '';
    }

    public get entityName(): string {
        return ContactTypeExtendedModel.className;
    }
}
