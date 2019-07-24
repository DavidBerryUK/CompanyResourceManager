import { IApiModel }                            from '../interfaces/IApiModel';

export default class SkillSummaryModel implements IApiModel {

    public SkillId: string;
    public name: string;
    public description: string;
    public isActive: boolean;

    constructor() {
        this.SkillId = '00000000-0000-0000-0000-000000000000';
        this.name = '';
        this.description = '';
        this.isActive = false;
    }

    public get entityName(): string {
        return 'JobRole';
    }

    public get entityKey(): string {
        return `${this.SkillId}`;
    }

    public get entityValue(): string {
        return `${this.name}`;
    }

    public get entitySortValue(): any {
        return `${this.name}`;
    }
}
