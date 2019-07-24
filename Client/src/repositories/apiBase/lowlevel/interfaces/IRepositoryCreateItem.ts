import { IObjectGenericMapper }                 from '@/repositories/objectMappers/interfaces/IObjectGenericMapper';
import { ApiResponse }                          from '@/repositories/contracts/ApiResponseContract';
import { EnumSuccessType }                      from '@/repositories/helpers/SuccessCallbackHelper';
import { ISuccessCallback }                     from '@/repositories/helpers/SuccessCallbackHelper';

export interface IRepositoryCreateItem<T> {

    post(
        baseUrl: string,
        entityModel: T,
        convertor: IObjectGenericMapper<T>,
        successNotificationType: EnumSuccessType,
        successCallback: ISuccessCallback<T>): ApiResponse<T>;
}
