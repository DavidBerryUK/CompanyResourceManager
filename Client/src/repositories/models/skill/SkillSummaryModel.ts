import { IApiModel }                            from '../interfaces/IApiModel';

export default class SkillSummaryModel implements IApiModel {

    public skillId: string;
    public name: string;
    public description: string;
    public isActive: boolean;

    constructor() {
        this.skillId = '00000000-0000-0000-0000-000000000000';
        this.name = '';
        this.description = '';
        this.isActive = false;
    }

    public get entityName(): string {
        return 'Skill';
    }

    public get entityKey(): string {
        return `${this.skillId}`;
    }

    public get entityValue(): string {
        return `${this.name}`;
    }

    public get entitySortValue(): any {
        return `${this.name}`;
    }
}
