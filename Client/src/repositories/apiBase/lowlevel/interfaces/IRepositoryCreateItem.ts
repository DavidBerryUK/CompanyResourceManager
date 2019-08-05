import { ApiResponse }                          from '@/repositories/contracts/ApiResponseContract';
import { EnumSuccessType }                      from '@/repositories/helpers/SuccessCallbackHelper';
import { IModelFactory }                        from './../../../modelFactories/interfaces/IModelFactory';
import { ISuccessCallback }                     from '@/repositories/helpers/SuccessCallbackHelper';

export interface IRepositoryCreateItem<T> {

    post(
        baseUrl: string,
        entityModel: T,
        modelFactory: IModelFactory<T>,
        successNotificationType: EnumSuccessType,
        successCallback: ISuccessCallback<T>): ApiResponse<T>;
}
