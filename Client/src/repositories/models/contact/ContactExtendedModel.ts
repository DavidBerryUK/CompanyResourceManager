import ContactSummaryModel                      from './ContactSummaryModel';

export default class ContactExtendedModel extends ContactSummaryModel {

    public static className = 'ContactExtendedModel';

    constructor() {
        super();
    }

    public get entityName(): string {
        return ContactExtendedModel.className;
    }
}
