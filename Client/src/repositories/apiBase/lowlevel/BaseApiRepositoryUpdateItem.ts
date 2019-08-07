import { ApiResponse }                          from '../../contracts/ApiResponseContract';
import { ApiResponseContract }                  from '../../contracts/ApiResponseContract';
import { EnumSuccessType }                      from '../../helpers/SuccessCallbackHelper';
import { IModelFactory }                        from './../../modelFactories/interfaces/IModelFactory';
import { IRepositoryUpdateItem }                from './interfaces/IRepositoryUpdateItem';
import { ISuccessCallback }                     from '../../helpers/SuccessCallbackHelper';
import { ValidationMessage }                    from '../../contracts/ApiResponseContract';
import ApiBaseError                             from './ApiBaseError';
import axios                                    from 'axios';
import BaseApiConfig                            from './ApiBaseConfig';

export default class BaseApiRepositoryUpdateItem<T> implements IRepositoryUpdateItem<T> {
    /**
     *
     *
     * @static
     * @template T
     * @param {string} baseUrl
     * @param {(T | null)} model
     * @param {T} newObject
     * @param {EnumSuccessType} successType
     * @param {ISuccessCallback<T>} successCallback
     * @returns {(ApiResponse<T>)}
     * @memberof ApiBasePut
     */
    public put(  baseUrl: string,
                 model: T | null,
                 modelFactory: IModelFactory<T>,
                 successType: EnumSuccessType,
                 successCallback: ISuccessCallback<T>): ApiResponse<T> {

        const contract = new ApiResponseContract<T>();

        axios
            .put(baseUrl, model, BaseApiConfig.baseConfig)
            .then((response) => {

                if (response.data == null) {
                    contract.publishFailure('No data returned');
                } else {

                    if (response.data.hasValidationMessages) {
                        if (response.data.validationMessages) {
                            contract.publishValidationErrorsRaised(response.data.validationMessages);
                        } else {
                            contract.publishValidationErrorsRaised(new Array<ValidationMessage>());
                        }
                        return;
                    }

                    if (response.data.entity) {
                        const mappedModel = modelFactory.createFrom(response.data);
                        successCallback( mappedModel, successType);
                        contract.publishSuccess(mappedModel);
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
