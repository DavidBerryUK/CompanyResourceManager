import { ApiResponse }                          from '@/repositories/contracts/ApiResponseContract';
import { EnumSuccessType }                      from '@/repositories/helpers/SuccessCallbackHelper';
import { IObjectMapper }                        from '@/repositories/objectMappers/interfaces/IObjectMapper';
import { ISuccessCallback }                     from '@/repositories/helpers/SuccessCallbackHelper';

export interface IRepositoryUpdateItem<T> {

    put<T>(
        baseUrl: string, model: T | null,       
        convertor: IObjectMapper<T>,
        successType: EnumSuccessType,
        successCallback: ISuccessCallback<T>
    )
        : ApiResponse<T>
}