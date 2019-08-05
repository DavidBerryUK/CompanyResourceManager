import { ApiResponse }                          from '@/repositories/contracts/ApiResponseContract';
import { IModelFactory }                        from '@/repositories/modelFactories/interfaces/IModelFactory';


export interface IRepositoryReadItem<T> {
    getById(
        url: string,
        modelFactory: IModelFactory<T>): ApiResponse<T>;
}
