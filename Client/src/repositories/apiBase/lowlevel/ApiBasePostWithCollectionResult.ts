import { ApiResponse }                      from '../../contracts/ApiResponseContract';
import { ApiResponseContract}               from '../../contracts/ApiResponseContract';
import { IModelGenericMapper }             from '@/repositories/modelMappers/interfaces/IModelGenericMapper';
import ApiBaseError                         from './ApiBaseError';
import axios                                from 'axios';
import BaseApiConfig                        from './ApiBaseConfig';
import GenericCollectionModel               from '@/repositories/models/shared/collections/GenericCollectionModel';

/**
 * Post message to api endpoint and accept collection
 */
export default class ApiBasePostWithCollectionResult {

    /**
     * Post a request to a specified URL with a specified class to post as the body data,
     * The response will expect a collection
     * @static
     * @template T - The result collection object type
     * @template B - The body object type
     * @param {string} baseUrl
     * @param {B} bodyModel
     * @param IListConvertor<T> convert poco objects to typescript objects
     * @returns {ApiResponse<GenericCollectionModel<T>>}
     * @memberof ApiBasePostWithCollectionResult
     */
    public static post<T, B>(
        baseUrl: string,
        bodyModel: B,
        convertor?: IModelGenericMapper<T>,
    ): ApiResponse<GenericCollectionModel<T>> {

        const contract = new ApiResponseContract<GenericCollectionModel<T>>();
        const model = new GenericCollectionModel<T>();

        axios
            .post(baseUrl, bodyModel, BaseApiConfig.baseConfig)
            .then((response) => {

                if (response.data == null) {
                    contract.publishFailure('No data returned From PostWithCollectionResult');
                } else {
                    //
                    // note at this stage the response.data.items are not proper
                    // typescript objects, but just simple poco
                    //
                    model.success = response.data.success;
                    model.errorMessage = response.data.errorMessage;

                    if (convertor) {
                        model.items = convertor.mapToArray(response.data.items);
                    } else {
                        model.items = response.data.items;
                    }


                    contract.publishSuccess(model);
                }
            })
            .catch((error) => {
                ApiBaseError.handleErrorResponse(error);
                contract.publishFailure(error);
            });

        return contract.responder;
    }
}
