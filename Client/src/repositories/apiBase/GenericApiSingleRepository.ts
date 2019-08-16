import { ApiResponse }                          from '@/repositories/contracts/ApiResponseContract';
import { ApiResponseContract }                  from '../contracts/ApiResponseContract';
import { EnumSuccessType }                      from '@/repositories/helpers/SuccessCallbackHelper';
import { IApiModel }                            from '@/repositories/models/interfaces/IApiModel';
import { IModelFactory }                        from '../modelFactories/interfaces/IModelFactory';
import ApiBase                                  from '@/repositories/apiBase/ApiBase';
import ApiBasePostWithCollectionResult          from '@/repositories/apiBase/lowlevel/ApiBasePostWithCollectionResult';
import BaseApiConfig                            from '@/repositories/apiBase/lowlevel/ApiBaseConfig';
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';
import ListItemModel                            from '@/repositories/models/ListItem/ListItemModel';
import ModelFactoryListItem                     from '../modelFactories/listItem/ModelFactoryListItem';
import NotificationFactory                      from '@/services/notifications/NotificationFactory';
import SuccessCallbackHelper                    from '@/repositories/helpers/SuccessCallbackHelper';

// Top Level of the repository that provides the following functions
// * activate             - restore a record from being archived
// * deactivate           - archive a record
// * getActiveList        - get a list of active records, key value only
// * getAllAsSummary      - get a list of all records
// * getById              - get single record
// * getFilteredList      - get a list of filtered records
// * save                 - save a record
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
export default class GenericApiSingleRepository<T extends IApiModel, F> extends ApiBase {

  public entityName: string;

  private baseUrl: string = '';
  private objectModelFactory: IModelFactory<T>;



  public constructor(
    endpoint: string,
    objectModelFactory: IModelFactory<T>) {
    super();

    if ( objectModelFactory === null || objectModelFactory === undefined ) {
      throw new Error('Can not create GenericApiExtendedRepository without an Summary Object Factory');
    }

    this.objectModelFactory = objectModelFactory;
    this.entityName = this.objectModelFactory.create().entityName;
    this.baseUrl = `${BaseApiConfig.baseEndpoint}${endpoint}`;
  }

  //
  // get a list of all items
  //
  public getAllAsSummary():
    ApiResponse<GenericCollectionModel<T>> {
    return this.baseGetAll<T>(
      this.baseUrl,
      this.objectModelFactory);
  }

  //
  // get a list of filtered items
  //
  public getFilteredList(filter: F):
    ApiResponse<GenericCollectionModel<T>> {

    return ApiBasePostWithCollectionResult.post(
      `${this.baseUrl}/filtered`,
      filter,
      this.objectModelFactory);

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
  public getById(id: string): ApiResponse<T> {

    if (  id === '00000000-0000-0000-0000-000000000000' ||
          id === 'new') {

      const data = this.objectModelFactory.create();
      const contract = new ApiResponseContract<T>();
      contract.publishSuccess(data);
      return contract.responder;
    }

    return this.baseGetById(
      this.baseUrl + '/' + id,
      this.objectModelFactory);

  }

  //
  // save item details
  //
  public save(model: T): ApiResponse<T> {

    return this.baseSave(
      this.baseUrl,
      model,
      this.objectModelFactory,
      (returnedModel, successType) => {
        this.publishModelSavedNotification(this.entityName, returnedModel, successType);
      });

  }

  public deactivate(id: string): ApiResponse<T> {
    return this.basePutWithNoModel(
      `${this.baseUrl}/${id}/deactivate`,
      this.objectModelFactory,
      EnumSuccessType.DeActivatedOk,
      (model, successType) => {
        this.publishModelSavedNotification(this.entityName, model, successType);
      });

  }

  public activate(id: string): ApiResponse<T> {
    return this.basePutWithNoModel(
      `${this.baseUrl}/${id}/activate`,
      this.objectModelFactory,
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
    model: T,
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
