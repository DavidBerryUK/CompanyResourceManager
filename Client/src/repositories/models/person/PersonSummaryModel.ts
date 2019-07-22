import { IApiModel }                            from '../interfaces/IApiModel';

export default class PersonSummaryModel implements IApiModel {

    public personId: string;
    public forename: string;
    public surname: string;
    public email: string;
    public jobRoleId: string;
    public jobRoleName: string;
    public isActive: boolean;

    constructor() {
        this.personId = '';
        this.forename = '';
        this.surname = '';
        this.email = '';
        this.jobRoleId = '';
        this.jobRoleName = '';
        this.isActive = false;
    }

    get entityName(): string {
        return 'Person Summary';
    }
    get entityKey(): string {
        return this.personId;
    }
    get entityValue(): string {
        return `${this.forename} ${this.surname}`;
    }
    get entitySortValue(): any {
        return `${this.forename}-${this.surname}`;
    }
}
