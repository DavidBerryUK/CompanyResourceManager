import { IApiModel }                            from '../interfaces/IApiModel';

export default class TeamSummaryModel implements IApiModel {

    public static className = 'TeamSummaryModel';

    public teamId: string;
    public name: string;
    public description: string;
    public isActive: boolean;

    constructor() {
        this.teamId = '00000000-0000-0000-0000-000000000000';
        this.name = '';
        this.description = '';
        this.isActive = false;
    }

    public get entityName(): string {
        return TeamSummaryModel.className;
    }

    public get entityKey(): string {
        return `${this.teamId}`;
    }

    public get entityValue(): string {
        return `${this.name}`;
    }

    public get entitySortValue(): any {
        return `${this.name}`;
    }
}
