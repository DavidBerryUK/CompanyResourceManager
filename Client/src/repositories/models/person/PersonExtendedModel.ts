import PersonSummaryModel                       from '@/repositories/models/person/PersonSummaryModel';

export default class PersonExtendedModel extends PersonSummaryModel {

    public static className = 'PersonExtendedModel';

    constructor() {
        super();
    }

    public get entityName(): string {
        return PersonExtendedModel.className;
    }
}
