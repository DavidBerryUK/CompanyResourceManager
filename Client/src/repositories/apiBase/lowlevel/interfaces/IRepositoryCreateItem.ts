import { ApiResponse }                          from '@/repositories/contracts/ApiResponseContract';
import { EnumSuccessType }                      from '@/repositories/helpers/SuccessCallbackHelper';
import { IObjectMapper }                        from '@/repositories/objectMappers/interfaces/IObjectMapper';
import { ISuccessCallback }                     from '@/repositories/helpers/SuccessCallbackHelper';

export interface IRepositoryCreateItem<T> {

    post<T>(
        baseUrl: string,
        entityModel: T,
        convertor: IObjectMapper<T>,
        successNotificationType: EnumSuccessType,
        successCallback: ISuccessCallback<T>
    )
        : ApiResponse<T>
}