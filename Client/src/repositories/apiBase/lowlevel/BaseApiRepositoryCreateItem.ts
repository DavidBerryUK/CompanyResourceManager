import { IModelFactory }                        from '@/repositories/modelFactories/interfaces/IModelFactory';
import { ApiResponse }                          from '../../contracts/ApiResponseContract';
import { ApiResponseContract }                  from '../../contracts/ApiResponseContract';
import { EnumSuccessType }                      from '../../helpers/SuccessCallbackHelper';
import { IRepositoryCreateItem }                from './interfaces/IRepositoryCreateItem';
import { ISuccessCallback }                     from '../../helpers/SuccessCallbackHelper';
import { ValidationMessage }                    from '../../contracts/ApiResponseContract';
import ApiBaseError                             from './ApiBaseError';
import axios                                    from 'axios';
import BaseApiConfig                            from './ApiBaseConfig';
import ObjectMapper                             from '@/services/mapper/ObjectMapper';

export default class BaseApiRepositoryCreateItem<T> implements IRepositoryCreateItem<T> {

    /**
     * Post model to server, the simple version of the post will
     * post and return the same type of model, this is used for
     * saving an entity
     *
     * @static
     * @template
     * @param {string} baseUrl - the url address to post to
     * @param {T} entityModel - the model to post to the server
     * @param {EnumSuccessType} successNotificationType - for use on callback, what notification to provide on success
     * @param {ISuccessCallback<T>} successCallback - callback routine in the event of a success,
     *                                                  only for lowlevel routines
     * @returns {(ApiResponse<T>)} - strongly typed response contract
     * @memberof ApiBasePostSimple
     */
    public post( baseUrl: string,
                 entityModel: T,
                 modelFactory: IModelFactory<T>,
                 successNotificationType: EnumSuccessType,
                 successCallback: ISuccessCallback<T>)
                    : ApiResponse<T> {

        const contract = new ApiResponseContract<T>();

        axios
            .post(baseUrl, entityModel, BaseApiConfig.baseConfig)
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
                        const model = ObjectMapper.MapItem<T>( response.data.entity, modelFactory);
                        successCallback(model, successNotificationType);
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
