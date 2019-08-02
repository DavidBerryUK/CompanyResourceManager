import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';
import { ApiResponse }                          from '@/repositories/contracts/ApiResponseContract';
import { EnumRepositoryDataSource }             from './ListRepositoryEnum';
import { EnumRepositoryListMode }               from './ListRepositoryEnum';
import ApiBase                                  from '@/repositories/apiBase/ApiBase';
import ListItemModel                            from '@/repositories/models/listItem/ListItemModel';
import ListRepositoryEnum                       from './ListRepositoryEnum';
import ModelMapperFactoryListItem               from '@/repositories/modelMappers/ModelMapperFactoryListItem';
import BaseApiConfig                            from '@/repositories/apiBase/lowlevel/ApiBaseConfig';
import { EnumSuccessType } from '../helpers/SuccessCallbackHelper';

export default class ListRepository extends ApiBase {

    private repositoryDataSource: EnumRepositoryDataSource;
    private listMode: EnumRepositoryListMode;
    private mode: string;
    private listEntityName: string;
    private referenceEntityName: string;
    private referenceId: string;
    private baseUrl: string;

    public constructor(
        dataSource: EnumRepositoryDataSource,
        listMode: EnumRepositoryListMode = EnumRepositoryListMode.Default,
        referenceId: string = '') {

        super();
        this.repositoryDataSource = dataSource;
        this.listMode = listMode;
        this.listEntityName = ListRepositoryEnum.getListEntity(dataSource);
        this.referenceEntityName = ListRepositoryEnum.getListReference(dataSource);
        this.mode = ListRepositoryEnum.getListMode(listMode);
        this.referenceId = referenceId;
        this.baseUrl = `${BaseApiConfig.baseEndpoint}`;

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

    public updateItem(item: ListItemModel): ApiResponse<ListItemModel> {

        console.log(`ListRepository:UpdateItem`);
        console.log(`id:        ${item.id}`);
        console.log(`name:      ${item.name}`);
        console.log(`selected:  ${item.selected}`);
        console.log(`----------------------------------`);

        if ( item.selected !== undefined ) {
            const url = this.createUpdateUrl(item.entityKey, item.selected);
            const response = this.basePutWithNoModel (
                url,
                ModelMapperFactoryListItem.createMapper(),
                EnumSuccessType.UpdatedOk,
                (model, successType) => {});
            return response;
        }
        throw new Error('item model does not have a valid selected value');
    }

    private createUpdateUrl(keyId: string, selected: boolean): string {
        if ( this.referenceEntityName === '') {
            throw new Error('List Repository cannot update items when entity name is blank');
        }
        return `${this.baseUrl}api/${this.listEntityName}/${keyId}/${this.referenceEntityName}/${this.referenceId}/${selected}`;
    }

    /**
     * Create the url to get the list from the api endpoint, there are 2 types of url
     * 1) a basic list of items, e.g. a list of skills or teams
     * 2) the list of teams, but crossed references with a second entity, the data set
     *    indicates if the second entity is linked to the first.
     */
    private createGetUrl(): string {
        if ( this.referenceEntityName === '') {
            return `${this.baseUrl}api/${this.listEntityName}/list/`;
        }
        return `${this.baseUrl}api/${this.listEntityName}/list/${this.referenceEntityName}/${this.referenceId}/${this.mode}`;
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
}
