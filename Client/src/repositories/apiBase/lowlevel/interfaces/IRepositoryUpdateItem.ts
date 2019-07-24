import { IObjectGenericMapper }                 from '@/repositories/objectMappers/interfaces/IObjectGenericMapper';
import { ApiResponse }                          from '@/repositories/contracts/ApiResponseContract';
import { EnumSuccessType }                      from '@/repositories/helpers/SuccessCallbackHelper';
import { ISuccessCallback }                     from '@/repositories/helpers/SuccessCallbackHelper';

export interface IRepositoryUpdateItem<T> {

    put(
        baseUrl: string, model: T | null,
        convertor: IObjectGenericMapper<T>,
        successType: EnumSuccessType,
        successCallback: ISuccessCallback<T>)
        : ApiResponse<T>;
}
