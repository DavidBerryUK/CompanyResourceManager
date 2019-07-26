import { ApiResponse }                          from '../../contracts/ApiResponseContract';
import { ApiResponseContract }                  from '../../contracts/ApiResponseContract';
import { IModelGenericMapper }                 from '@/repositories/modelMappers/interfaces/IModelGenericMapper';
import { IRepositoryReadItem }                  from './interfaces/IRepositoryReadItem';
import ApiBaseError                             from './ApiBaseError';
import axios                                    from 'axios';
import BaseApiConfig                            from './ApiBaseConfig';

export default class BaseApiRepositoryReadItem<T> implements IRepositoryReadItem<T> {

    /**
     * low level api to get an entity by its primary key
     *
     * @static
     * @template T - the type of typescript model to place the data in
     * @param {string} url - the api url endpoint
     * @param {T} newObject - an new empty typescript object to place the results in
     * @returns {(ApiResponse<T>)} - strongly typed api promise
     * @memberof ApiBaseGetById
     */
    public getById(
        url: string,
        convertor: IModelGenericMapper<T>): ApiResponse<T> {
        const contract = new ApiResponseContract<T>();

        axios
            .get(url, BaseApiConfig.baseConfig)
            .then((response) => {
                if (response.data == null) {
                    contract.publishFailure('No data returned');
                } else {
                    // console.log(response.data);

                    if (response.data.entity) {
                        const model = convertor.mapToEntity(response.data.entity);
                        contract.publishSuccess(model);

                    } else {
                        contract.publishFailure('No data entity returned');
                    }
                }
            })
            .catch((error) => {
                ApiBaseError.handleErrorResponse(error);
                contract.publishFailure(error);
            });

        return contract.responder;
    }
}
