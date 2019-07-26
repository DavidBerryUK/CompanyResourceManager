import { ApiResponse }                          from '../contracts/ApiResponseContract';
import { ApiResponseContract }                  from '../contracts/ApiResponseContract';
import { EnumSuccessType }                      from '../helpers/SuccessCallbackHelper';
import { IApiModel }                            from '../models/interfaces/IApiModel';
import { IModelGenericMapper }                 from '../modelMappers/interfaces/IModelGenericMapper';
import { ISuccessCallback }                     from '../helpers/SuccessCallbackHelper';
import ApiBaseEntityGetById                     from './lowlevel/BaseApiRepositoryReadItem';
import BaseApiRepositoryCreateItem              from './lowlevel/BaseApiRepositoryCreateItem';
import BaseApiRepositoryReadList                from './lowlevel/BaseApiRepositoryReadList';
import BaseApiRepositoryUpdateItem              from './lowlevel/BaseApiRepositoryUpdateItem';
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';

/**
 * The lowest level API interface for the application that deals with
 * server data calls.
 *
 * This layer downwards links to the AXIOS modules to perform API
 * server requests. This layer however makes it possible
 * to replace the AXIOS library if required, hides AXIOS knowledge
 * requirements from other developers, and ensures that
 * code duplication is kept to a minimum
 * @export
 * @class ApiBase
 */
export default class ApiBase {

    /**
     *
     *
     * @template T
     * @param {string} baseUrl
     * @param {T} newObject
     * @param {EnumSuccessType} successType
     * @param {ISuccessCallback<T>} successCallback
     * @returns {(ApiResponse<T>)}
     * @memberof ApiBase
     */
    public basePutWithNoModel<T>(
        baseUrl: string,
        convertor: IModelGenericMapper<T>,
        successType: EnumSuccessType,
        successCallback: ISuccessCallback<T>): ApiResponse<T> {

        const service = new BaseApiRepositoryUpdateItem<T>();
        return service.put(baseUrl, null, convertor, successType, successCallback);
    }

    /**
     *
     *
     * @template T
     * @param {string} baseUrl
     * @param {T} model
     * @param {string} id
     * @param {T} newObject
     * @param {ISuccessCallback<T>} successCallback
     * @returns {(ApiResponse<T>)}
     * @memberof ApiBase
     */
    public baseSave<T extends IApiModel>(
        baseUrl: string,
        model: T,
        convertor: IModelGenericMapper<T>,
        successCallback: ISuccessCallback<T>): ApiResponse<T> {

        const contract = new ApiResponseContract<T>();

        if (model.entityKey == null || model.entityKey === '' || model.entityKey === '00000000-0000-0000-0000-000000000000') {
            const servicePost = new BaseApiRepositoryCreateItem<T>();
            return servicePost.post(baseUrl, model, convertor, EnumSuccessType.CreatedOk, successCallback);
        }

        const servicePut = new BaseApiRepositoryUpdateItem<T>();
        return servicePut.put(
            `${baseUrl}/${model.entityKey}`,
            model,
            convertor,
            EnumSuccessType.UpdatedOk,
            successCallback);
    }

    /**
     *
     *
     * @template T
     * @param {string} url
     * @param {T} newObject
     * @returns {(ApiResponse<T>)}
     * @memberof ApiBase
     */
    public baseGetById<T>(
        url: string,
        convertor: IModelGenericMapper<T>): ApiResponse<T> {
        const service = new  ApiBaseEntityGetById<T>();
        return service.getById(url, convertor);
    }

    /**
     *
     *
     * @template T
     * @param {string} baseUrl
     * @returns {ApiResponse<GenericCollectionModel<T>>}
     * @memberof ApiBase
     */
    public baseGetAll<T>(
        baseUrl: string,
        convertor?: IModelGenericMapper<T>): ApiResponse<GenericCollectionModel<T>> {

        const service = new BaseApiRepositoryReadList<T>();
        return service.getAll(baseUrl, convertor);
    }
}
