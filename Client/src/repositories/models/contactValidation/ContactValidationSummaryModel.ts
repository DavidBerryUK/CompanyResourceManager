import { IApiModel }                            from '../interfaces/IApiModel';

export default class ContactValidationSummaryModel implements IApiModel {

    public static className = 'ContactValidationSummaryModel';

    public contactValidationId: string;
    public name: string;
    public regEx: string;
    public isDefault: boolean;

    constructor() {
        this.contactValidationId = '00000000-0000-0000-0000-000000000000';
        this.name = '';
        this.regEx = '';
        this.isDefault = false;
    }

    public get entityName(): string {
        return ContactValidationSummaryModel.className;
    }

    public get entityKey(): string {
        return `${this.contactValidationId}`;
    }

    public get entityValue(): string {
        return `${this.name}`;
    }

    public get entitySortValue(): any {
        return `${this.name}`;
    }
}
