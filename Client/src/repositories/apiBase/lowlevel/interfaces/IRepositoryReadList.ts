import { ApiResponse }                          from '@/repositories/contracts/ApiResponseContract';
import { IModelFactory }                        from '@/repositories/modelFactories/interfaces/IModelFactory';
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';

export interface IRepositoryReadList<T> {
    getAll(
        baseUrl: string,
        modelFactory?: IModelFactory<T> )
        : ApiResponse<GenericCollectionModel<T>>;
}
