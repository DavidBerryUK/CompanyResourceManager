import { ApiResponse }                          from '@/repositories/contracts/ApiResponseContract';
import { ApiResponseContract }                  from './../contracts/ApiResponseContract';
import { EnumSuccessType }                      from '@/repositories/helpers/SuccessCallbackHelper';
import { IApiModel }                            from '@/repositories/models/interfaces/IApiModel';
import { IModelFactory }                        from '../modelFactories/interfaces/IModelFactory';
import ApiBase                                  from '@/repositories/apiBase/ApiBase';
import ApiBasePostWithCollectionResult          from '@/repositories/apiBase/lowlevel/ApiBasePostWithCollectionResult';
import BaseApiConfig                            from '@/repositories/apiBase/lowlevel/ApiBaseConfig';
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';
import ListItemModel                            from '@/repositories/models/ListItem/ListItemModel';
import ModelFactoryListItem                     from '../modelFactories/ModelFactoryListItem';
import NotificationFactory                      from '@/services/notifications/NotificationFactory';
import SuccessCallbackHelper                    from '@/repositories/helpers/SuccessCallbackHelper';

// Top Level of the repository that provides the following functions
// * activate             - restore a record from being archived
// * deactivate           - archive a record
// * getActiveList        - get a list of active records, key value only
// * getAllAsSummary      - get a list of all records ( summary model version )
// * getById              - get single record ( extended model version )
// * getFilteredList      - get a list of filtered records ( summary model version )
// * save                 - save a record ( extended model version )
//
// This calls lower level functions on the ApiBase class, which in turn
// calls very low level classes for each of the functions above.
// The low level classes de-couple the application from the network package
// used to connect to the server, it also provides a common wrapper to
// add a layer of application functionallity that is available by default
// for all modules requiring API functions.

/// S = Summary Entity model
/// E = Extended Entity model        :IApiModel
/// F = List Filter Model
export default class GenericApiRepository<S extends IApiModel, E extends S, F> extends ApiBase {

  public entityName: string;

  private baseUrl: string = '';
  private objectSummaryModelFactory: IModelFactory<S>;
  private objectExtendedModelFactory: IModelFactory<E>;


  public constructor(
    endpoint: string,
    objectSummaryModelFactory: IModelFactory<S>,
    objectExtendedModelFactory: IModelFactory<E>) {
    super();

    if ( objectSummaryModelFactory === null || objectSummaryModelFactory === undefined ) {
      throw new Error('Can not create GenericApiRepository without an Summary Object Factory');
    }

    if ( objectExtendedModelFactory === null || objectExtendedModelFactory === undefined ) {
      throw new Error('Can not create GenericApiRepository without an Extended Object Factory');
    }

    this.objectSummaryModelFactory = objectSummaryModelFactory;
    this.objectExtendedModelFactory = objectExtendedModelFactory;
    this.entityName = this.objectExtendedModelFactory.create().entityName;
    this.baseUrl = `${BaseApiConfig.baseEndpoint}${endpoint}`;
  }

  //
  // get a list of all items
  //
  public getAllAsSummary():
    ApiResponse<GenericCollectionModel<S>> {
    return this.baseGetAll<S>(
      this.baseUrl,
      this.objectExtendedModelFactory);
  }

  //
  // get a list of filtered items
  //
  public getFilteredList(filter: F):
    ApiResponse<GenericCollectionModel<S>> {

    return ApiBasePostWithCollectionResult.post(
      `${this.baseUrl}/filtered`,
      filter,
      this.objectSummaryModelFactory);

  }

  // get an active list of asset types with just id and name
  //
  public getActiveList(): ApiResponse<GenericCollectionModel<ListItemModel>> {
    return this.baseGetAll<ListItemModel>(
      `${this.baseUrl}/list`,
      new ModelFactoryListItem());
  }

  ///
  /// get item by item id
  /// will return null if no itemh is found
  ///
  public getById(id: string): ApiResponse<E> {

    if (  id === '00000000-0000-0000-0000-000000000000' ||
          id === 'new') {

      const data = this.objectExtendedModelFactory.create();
      const contract = new ApiResponseContract<E>();
      contract.publishSuccess(data);
      return contract.responder;
    }

    return this.baseGetById(
      this.baseUrl + '/' + id,
      this.objectExtendedModelFactory);

  }

  //
  // save item details
  //
  public save(model: E): ApiResponse<E> {

    return this.baseSave(
      this.baseUrl,
      model,
      this.objectExtendedModelFactory,
      (returnedModel, successType) => {
        this.publishModelSavedNotification(this.entityName, returnedModel, successType);
      });

  }

  public deactivate(id: string): ApiResponse<S> {
    return this.basePutWithNoModel(
      `${this.baseUrl}/${id}/deactivate`,
      this.objectSummaryModelFactory,
      EnumSuccessType.DeActivatedOk,
      (model, successType) => {
        this.publishModelSavedNotification(this.entityName, model, successType);
      });

  }

  public activate(id: string): ApiResponse<S> {
    return this.basePutWithNoModel(
      `${this.baseUrl}/${id}/activate`,
      this.objectSummaryModelFactory,
      EnumSuccessType.ActivatedOk,
      (model, successType) => {
        this.publishModelSavedNotification(this.entityName, model, successType);
      });

  }

  /**
   * Publishes notifications to inform any interested pieces of code that an entity
   * have saved, successfully. Is an error occurs then the lower level code
   * will publish an appropriate message to the notification channel.
   * @param entityName The name of the entity saved / updated / deleted
   * @param model the model after has been updated
   * @param successType Success Type
   */
  private publishModelSavedNotification(
    entityName: string,
    model: S | E,
    successType: EnumSuccessType) {
    const notificationHandler = NotificationFactory.instance.getNotificationInstance(entityName);

    switch (successType) {

      case EnumSuccessType.CreatedOk:
        notificationHandler.publishItemCreated(model);
        break;

      case EnumSuccessType.UpdatedOk:
        notificationHandler.publishItemUpdated(model);
        break;

      case EnumSuccessType.ActivatedOk:
        notificationHandler.publishItemActivated(model);
        break;

      case EnumSuccessType.DeActivatedOk:
        notificationHandler.publishItemDeactivated(model);
        break;

      default:
          NotificationFactory.instance.genericNotifications().publishMessage(`Item ${SuccessCallbackHelper.enumSuccessTypeToString(successType)}`);
    }
  }
}
