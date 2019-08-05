import { IModelFactory }                        from '@/repositories/modelFactories/interfaces/IModelFactory';
import { ApiResponse }                          from '@/repositories/contracts/ApiResponseContract';
import { EnumSuccessType }                      from '@/repositories/helpers/SuccessCallbackHelper';
import { ISuccessCallback }                     from '@/repositories/helpers/SuccessCallbackHelper';

export interface IRepositoryUpdateItem<T> {

    put(
        baseUrl: string, model: T | null,
        modelFactory: IModelFactory<T>,
        successType: EnumSuccessType,
        successCallback: ISuccessCallback<T>)
        : ApiResponse<T>;
}
