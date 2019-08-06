import { IApiModel }                            from '../interfaces/IApiModel';

export default class PersonSummaryModel implements IApiModel {

    public static className = 'PersonSummaryModel';

    public personId: string;
    public forename: string;
    public surname: string;
    public email: string;
    public jobRoleId: string;
    public jobRoleName: string;
    public isActive: boolean;

    constructor() {
        this.personId = '00000000-0000-0000-0000-000000000000';
        this.forename = '';
        this.surname = '';
        this.email = '';
        this.jobRoleId = '';
        this.jobRoleName = '';
        this.isActive = false;
    }

    public get entityName(): string {
        return PersonSummaryModel.className;
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
