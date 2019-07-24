import { IApiModel }                            from '../interfaces/IApiModel';

export default class SecurityGroupSummaryModel implements IApiModel {

    public securityGroupId: string;
    public name: string;
    public description: string;
    public isActive: boolean;

    constructor() {
        this.securityGroupId = '00000000-0000-0000-0000-000000000000';
        this.name = '';
        this.description = '';
        this.isActive = false;
    }

    public get entityName(): string {
        return 'Security Group';
    }

    public get entityKey(): string {
        return `${this.securityGroupId}`;
    }

    public get entityValue(): string {
        return `${this.name}`;
    }

    public get entitySortValue(): any {
        return `${this.name}`;
    }
}
