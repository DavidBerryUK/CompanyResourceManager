import ContactExtendedModel                     from '../contact/ContactExtendedModel';
import ContactGroupSummaryModel                 from './ContactGroupSummaryModel';

export default class ContactGroupExtendedModel extends ContactGroupSummaryModel {

    public static className = 'ContactGroupExtendedModel';

    public contacts: Array<ContactExtendedModel> = new Array<ContactExtendedModel>();

    constructor() {
        super();
    }

    public get entityName(): string {
        return ContactGroupExtendedModel.className;
    }
}
