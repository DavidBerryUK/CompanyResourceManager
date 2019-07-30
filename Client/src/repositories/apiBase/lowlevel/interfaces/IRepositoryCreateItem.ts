import { ApiResponse }                          from '@/repositories/contracts/ApiResponseContract';
import { EnumSuccessType }                      from '@/repositories/helpers/SuccessCallbackHelper';
import { IModelGenericMapper }                  from '@/repositories/modelMappers/interfaces/IModelGenericMapper';
import { ISuccessCallback }                     from '@/repositories/helpers/SuccessCallbackHelper';

export interface IRepositoryCreateItem<T> {

    post(
        baseUrl: string,
        entityModel: T,
        convertor: IModelGenericMapper<T>,
        successNotificationType: EnumSuccessType,
        successCallback: ISuccessCallback<T>): ApiResponse<T>;
}
