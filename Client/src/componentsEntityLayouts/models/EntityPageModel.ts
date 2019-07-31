import { IApiModel }                            from '@/repositories/models/interfaces/IApiModel';

export default class EntityPageModel<T> {

    public id: string = '';
    public headerTitle = '';
    public canEdit: boolean = false;
    public canArchive: boolean = false;
    public isActive: boolean = false;
    public isLoading: boolean = false;
    public entity!: T;

}
