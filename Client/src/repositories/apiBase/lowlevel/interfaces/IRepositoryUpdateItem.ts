import { IModelGenericMapper }                 from '@/repositories/modelMappers/interfaces/IModelGenericMapper';
import { ApiResponse }                          from '@/repositories/contracts/ApiResponseContract';
import { EnumSuccessType }                      from '@/repositories/helpers/SuccessCallbackHelper';
import { ISuccessCallback }                     from '@/repositories/helpers/SuccessCallbackHelper';

export interface IRepositoryUpdateItem<T> {

    put(
        baseUrl: string, model: T | null,
        convertor: IModelGenericMapper<T>,
        successType: EnumSuccessType,
        successCallback: ISuccessCallback<T>)
        : ApiResponse<T>;
}
