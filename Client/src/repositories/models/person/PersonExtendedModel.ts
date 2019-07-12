import PersonSummaryModel                       from '@/repositories/models/person/PersonSummaryModel';

export default class PersonExtendedModel extends PersonSummaryModel {

    public JobRoleName : string;

    constructor() {
        super()
        this.JobRoleName = "";
    }
}