import { ApiResponse }                          from '../../contracts/ApiResponseContract';
import { ApiResponseContract }                  from '../../contracts/ApiResponseContract';
import { IModelFactory }                        from '@/repositories/modelFactories/interfaces/IModelFactory';
import { IRepositoryReadList }                  from './interfaces/IRepositoryReadList';
import ApiBaseError                             from './ApiBaseError';
import axios                                    from 'axios';
import BaseApiConfig                            from './ApiBaseConfig';
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';
import ObjectMapper                             from '@/services/mapper/ObjectMapper';

export default class BaseApiRepositoryReadList<T> implements IRepositoryReadList<T> {

    /**
     * low level method for retrieving a list of typescript object
     * from an API
     * @static
     * @template T - The type of model to place the results in
     * @param {string} baseUrl - the api url address
     * @returns {ApiResponse<GenericCollectionModel<T>>}
     * @memberof ApiBaseGetAll
     */
    public getAll(
        baseUrl: string,
        modelFactory: IModelFactory<T>)
        : ApiResponse<GenericCollectionModel<T>> {

        const contract = new ApiResponseContract<GenericCollectionModel<T>>();
        const model = new GenericCollectionModel<T>();

        axios
            .get(baseUrl, BaseApiConfig.baseConfig)
            .then((response) => {
                model.success = response.data.success;
                model.errorMessage = response.data.errorMessage;

                model.items = ObjectMapper.MapArray(response.data.items, modelFactory);

                contract.publishSuccess(model);
            })
            .catch((error) => {
                ApiBaseError.handleErrorResponse(error);
                contract.publishFailure(error);
            });

        return contract.responder;
    }

}
