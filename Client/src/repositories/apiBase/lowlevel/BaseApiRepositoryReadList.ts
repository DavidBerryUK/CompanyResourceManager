import { IRepositoryReadList }              from './interfaces/IRepositoryReadList';
import { ApiResponse }                      from '../../contracts/ApiResponseContract';
import { ApiResponseContract }              from '../../contracts/ApiResponseContract';
import { IObjectArrayMapper }               from '@/repositories/objectMappers/interfaces/IObjectArrayMapper';
import ApiBaseError                         from './ApiBaseError';
import axios                                from 'axios';
import BaseApiConfig                        from './ApiBaseConfig';
import GenericCollectionModel               from '@/repositories/models/shared/collections/GenericCollectionModel';

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
    public getAll<T>(baseUrl: string, convertor?: IObjectArrayMapper<T>): ApiResponse<GenericCollectionModel<T>> {

        const contract = new ApiResponseContract<GenericCollectionModel<T>>();
        const model = new GenericCollectionModel<T>();

        axios
            .get(baseUrl, BaseApiConfig.baseConfig)
            .then((response) => {
                model.success = response.data.success;
                model.errorMessage = response.data.errorMessage;                

                if (convertor) {                    
                    model.items = convertor.map(response.data.items);
                } else {                    
                    model.items = response.data.items;
                }

                contract.publishSuccess(model);
            })
            .catch((error) => {
                ApiBaseError.handleErrorResponse(error);
                contract.publishFailure(error);
            });

        return contract.responder;
    }

}
