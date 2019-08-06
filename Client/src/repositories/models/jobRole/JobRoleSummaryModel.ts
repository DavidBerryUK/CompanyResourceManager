import { IApiModel }                            from '../interfaces/IApiModel';

export default class JobRoleSummaryModel implements IApiModel {

    public static className = 'JobRoleSummaryModel';

    public jobRoleId: string;
    public name: string;
    public isActive: boolean;

    constructor() {
        this.jobRoleId = '00000000-0000-0000-0000-000000000000';
        this.name = '';
        this.isActive = false;
    }

    public get entityName(): string {
        return JobRoleSummaryModel.className;
    }

    public get entityKey(): string {
        return `${this.jobRoleId}`;
    }

    public get entityValue(): string {
        return `${this.name}`;
    }

    public get entitySortValue(): any {
        return `${this.name}`;
    }
}
