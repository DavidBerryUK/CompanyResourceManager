import { ApiResponse }                          from '@/repositories/contracts/ApiResponseContract';
import ApiBase                                  from '@/repositories/apiBase/ApiBase';
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';
import ListItemModel                            from '@/repositories/models/shared/collections/ListItemModel';
import ModelMapperFactoryListItem               from '@/repositories/modelMappers/ModelMapperFactoryListItem';

export enum EnumRepositoryDataSource {
    Skill,
    SkillPerson,
    Team,
    TeamPerson,
}

export enum EnumRepositoryListMode {
    Default,
    All,
    Selected,
    UnSelected,
}

export default class ListRepository extends ApiBase {

    private repositoryDataSource: EnumRepositoryDataSource;
    private listMode: EnumRepositoryListMode;
    private mode: string;
    private listEntityName: string;
    private referenceEntityName: string;
    private referenceId: string;

    public constructor(
        dataSource: EnumRepositoryDataSource,
        listMode: EnumRepositoryListMode = EnumRepositoryListMode.Default,
        referenceId: string = '') {

        super();
        this.repositoryDataSource = dataSource;
        this.listMode = listMode;
        this.listEntityName = this.getListEntity(dataSource);
        this.referenceEntityName = this.getListReference(dataSource);
        this.mode = this.getListMode(listMode);
        this.referenceId = referenceId;

        // Ensure the combination of parameters provided are valid
        // before performing any further procesing
        this.validateListParameters(this.listEntityName, this.referenceEntityName, this.mode);
    }

    /**
     * Get List
     */
    public get(): ApiResponse<GenericCollectionModel<ListItemModel>> {
      const data = this.baseGetAll(this.createGetUrl(), ModelMapperFactoryListItem.createMapper());
      return data;
    }

    /**
     * Create the url to get the list from the api endpoint, there are 2 types of url
     * 1) a basic list of items, e.g. a list of skills or teams
     * 2) the list of teams, but crossed references with a second entity, the data set
     *    indicates if the second entity is linked to the first.
     */
    private createGetUrl(): string {
        if ( this.referenceEntityName === '') {
            return `/api/${this.listEntityName}/list/`;
        }
        return `/api/${this.listEntityName}/list/${this.referenceEntityName}/${this.mode}`;
    }

    /**
     * Validate the parameters are valid before continuing
     * @param mode - show all, show only selected items, show only unselected items
     * @param entity the primary entity that is used to create the list
     * @param reference reference entity - determines what list items are selected
     */
    private validateListParameters(entity: string, reference: string, mode: string) {

        if ( entity === '') {
            throw new Error('Entity must be specified');
        }

        if ( reference  === '' && mode !== '') {
            throw new Error('Mode can only be specified if a reference table is provided');
        }

        if ( reference  !== '' && mode === '') {
            throw new Error('If a reference table is provided, a mode must be selected');
        }

        if (this.referenceEntityName !== '' && this.referenceId === '') {
            throw new Error('If a reference entity is provided, a reference id must also be provied');
        }
    }

    /**
     * @param listMode - show all, show only selected items, show only unselected items
     */
    private getListMode(listMode: EnumRepositoryListMode) {

        switch (listMode) {
            case EnumRepositoryListMode.Default:
                return '';

            case EnumRepositoryListMode.All:
                return 'all';

            case EnumRepositoryListMode.Selected:
                return 'selected';

            case EnumRepositoryListMode.UnSelected:
                return 'unselected';
        }

        return '';
    }

    /**
     * @param dataSource the primary entity that is used to create the list
     */
    private getListEntity(dataSource: EnumRepositoryDataSource): string {
        switch (dataSource) {

            case EnumRepositoryDataSource.Skill:
            case EnumRepositoryDataSource.SkillPerson:
                return 'skill';

            case EnumRepositoryDataSource.Team:
            case EnumRepositoryDataSource.TeamPerson:
                return 'Team';
        }

        return '';
    }

    /**
     * @param dataSource reference entity - determines what list items are selected
     */
    private getListReference(dataSource: EnumRepositoryDataSource): string {

        switch (dataSource) {
            case EnumRepositoryDataSource.TeamPerson:
            case EnumRepositoryDataSource.SkillPerson:
                return 'person';
        }

        return '';
    }
}
