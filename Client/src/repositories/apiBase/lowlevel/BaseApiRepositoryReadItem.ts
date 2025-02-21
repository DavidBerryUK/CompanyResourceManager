import { IModelFactory }                        from './../../modelFactories/interfaces/IModelFactory';
import { ApiResponse }                          from '../../contracts/ApiResponseContract';
import { ApiResponseContract }                  from '../../contracts/ApiResponseContract';
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
        modelFactory: IModelFactory<T>): ApiResponse<T> {
        const contract = new ApiResponseContract<T>();

        axios
            .get(url, BaseApiConfig.baseConfig)
            .then((response) => {
                if (response.data == null) {
                    contract.publishFailure('No data returned');
                } else {
                    if (response.data.entity) {
                        const model = modelFactory.createFrom(response.data.entity);
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
