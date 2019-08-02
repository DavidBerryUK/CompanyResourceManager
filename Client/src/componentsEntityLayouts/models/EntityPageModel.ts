import DeepObjectComparator                     from '@/services/objectComparison/DeepObjectComparator';
import { IApiModel }                            from '@/repositories/models/interfaces/IApiModel';

export default class EntityPageModel<T extends IApiModel> {

    public id: string = '';
    public headerTitle = '';
    public canEdit: boolean = false;
    public canArchive: boolean = false;
    public isActive: boolean = false;
    public isLoading: boolean = false;
    public entity!: T;
    public changeTracker: DeepObjectComparator = new DeepObjectComparator({});

    public resetTracker() {
        this.changeTracker = new DeepObjectComparator(this.entity);
    }

    public get modelHasChanged(): boolean {
        return this.changeTracker.hasObjectChanged;
    }

    public get modelHasNoChanges(): boolean {
        return !this.changeTracker.hasObjectChanged;
    }

    // determine if this is a new record, note that the '00000000-0000-0000-0000-000000000000' value
    // is the default primary key value on each of the summary entity models
    public get isNewRecord(): boolean {
        return this.id === '00000000-0000-0000-0000-000000000000' ||
                this.id === 'new';
    }

    public get isExistingRecord(): boolean {
        return this.id !== '00000000-0000-0000-0000-000000000000' &&
                    this.id !== 'new';
    }
}
