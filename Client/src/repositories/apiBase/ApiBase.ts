import { IModelFactory }                        from '@/repositories/modelFactories/interfaces/IModelFactory';
import { ApiResponse }                          from '../contracts/ApiResponseContract';
import { ApiResponseContract }                  from '../contracts/ApiResponseContract';
import { EnumSuccessType }                      from '../helpers/SuccessCallbackHelper';
import { IApiModel }                            from '../models/interfaces/IApiModel';
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
        modelFactory: IModelFactory<T>,
        successType: EnumSuccessType,
        successCallback: ISuccessCallback<T>): ApiResponse<T> {

        const service = new BaseApiRepositoryUpdateItem<T>();
        return service.put(baseUrl, null, modelFactory, successType, successCallback);
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
        modelFactory: IModelFactory<T>,
        successCallback: ISuccessCallback<T>): ApiResponse<T> {

        const contract = new ApiResponseContract<T>();

        // if the entity is new, then perform a POST
        //
        if (model.entityKey == null ||
            model.entityKey === '' ||
            model.entityKey === '00000000-0000-0000-0000-000000000000') {
            const servicePost = new BaseApiRepositoryCreateItem<T>();
            return servicePost.post(baseUrl, model, modelFactory, EnumSuccessType.CreatedOk, successCallback);
        }

        // the entity already has a primary key - perform a PUT to update
        //
        const servicePut = new BaseApiRepositoryUpdateItem<T>();
        return servicePut.put(
            `${baseUrl}/${model.entityKey}`,
            model,
            modelFactory,
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
        modelFactory: IModelFactory<T>): ApiResponse<T> {
        const service = new  ApiBaseEntityGetById<T>();
        return service.getById(url, modelFactory);
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
        modelFactory: IModelFactory<T>)
        : ApiResponse<GenericCollectionModel<T>> {

        const service = new BaseApiRepositoryReadList<T>();
        return service.getAll(baseUrl, modelFactory);
    }
}
