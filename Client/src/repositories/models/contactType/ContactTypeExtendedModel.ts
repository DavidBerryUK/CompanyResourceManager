import ContactTypeSummaryModel                      from './ContactTypeSummaryModel';

export default class ContactTypeExtendedModel extends ContactTypeSummaryModel {

    public static className = 'ContactTypeExtendedModel';

    public get entityName(): string {
        return ContactTypeExtendedModel.className;
    }
}
