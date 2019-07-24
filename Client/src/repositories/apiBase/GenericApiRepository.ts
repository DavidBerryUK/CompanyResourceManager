import { ApiResponse }                          from '../contracts/ApiResponseContract';
import { EnumSuccessType }                      from '../helpers/SuccessCallbackHelper';
import { IApiModel }                            from '../models/interfaces/IApiModel';
import ApiBase                                  from './ApiBase';
import ApiBasePostWithCollectionResult          from './lowlevel/ApiBasePostWithCollectionResult';
import BaseApiConfig                            from './lowlevel/ApiBaseConfig';
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';
import ListItemModel                            from '@/repositories/models/shared/collections/ListItemModel';
import NotificationFactory                      from '@/services/notifications/NotificationFactory';
import SuccessCallbackHelper                    from '../helpers/SuccessCallbackHelper';
import { IObjectGenericMapper }                 from '../objectMappers/interfaces/IObjectGenericMapper';
import ObjectMapperFactoryListItem from '../objectMappers/ObjectMapperFactoryListItem';

/// S = Summary Entity model
/// E = Extended Entity model        :IApiModel
/// F = List Filter Model

export default class GenericApiRepository<S extends IApiModel, E extends S, F> extends ApiBase {

  public entityName: string;

  private baseUrl: string = '';
  private objectSummaryEntitytMapper: IObjectGenericMapper<S>;
  private objectExtendedEntitytMapper: IObjectGenericMapper<E>;


  public constructor(
    entityName: string,
    endpoint: string,
    objectSummaryEntitytMapper: IObjectGenericMapper<S>,
    objectExtendedEntitytMapper: IObjectGenericMapper<E>) {
    super();

    this.entityName = entityName;

    if ( objectSummaryEntitytMapper === null || objectSummaryEntitytMapper === undefined ) {
      throw new Error('Can not create GenericApiRepository without an Summary Object Mapper');
    }

    if ( objectExtendedEntitytMapper === null || objectExtendedEntitytMapper === undefined ) {
      throw new Error('Can not create GenericApiRepository without an Extended Object Mapper');
    }

    this.objectSummaryEntitytMapper = objectSummaryEntitytMapper;
    this.objectExtendedEntitytMapper = objectExtendedEntitytMapper;
    this.baseUrl = `${BaseApiConfig.baseEndpoint}${endpoint}`;
  }

  //
  // get a list of all items
  //
  public getAllAsSummary():
    ApiResponse<GenericCollectionModel<S>> {

    return this.baseGetAll<S>(
      this.baseUrl,
      this.objectSummaryEntitytMapper);
  }

  //
  // get a list of filtered items
  //
  public getFilteredList(filter: F):
    ApiResponse<GenericCollectionModel<S>> {

    return ApiBasePostWithCollectionResult.post(
      `${this.baseUrl}/filtered`,
      filter,
      this.objectSummaryEntitytMapper);

  }

  // get an active list of asset types with just id and name
  //
  public getActiveList(): ApiResponse<GenericCollectionModel<ListItemModel>> {
    return this.baseGetAll<ListItemModel>(
      `${this.baseUrl}/items`,
      ObjectMapperFactoryListItem.createMapper());
  }

  ///
  /// get item by item id
  /// will return null if no itemh is found
  ///
  public getById(id: string): ApiResponse<E> {
    return this.baseGetById(
      this.baseUrl + '/' + id,
      this.objectExtendedEntitytMapper);

  }

  //
  // save item details
  //
  public save(model: E): ApiResponse<E> {

    return this.baseSave(
      this.baseUrl,
      model,
      this.objectExtendedEntitytMapper,
      (returnedModel, successType) => {
        this.savedModel(this.entityName, returnedModel, successType);
      });

  }

  public deactivate(id: string): ApiResponse<S> {
    return this.basePutWithNoModel(
      `${this.baseUrl}/${id}/deactivate`,
      this.objectSummaryEntitytMapper,
      EnumSuccessType.DeActivatedOk,
      (model, successType) => {
        this.savedModel(this.entityName, model, successType);
      });

  }

  public activate(id: string): ApiResponse<S> {
    return this.basePutWithNoModel(
      `${this.baseUrl}/${id}/activate`,
      this.objectSummaryEntitytMapper,
      EnumSuccessType.ActivatedOk,
      (model, successType) => {this.savedModel(this.entityName, model, successType);
      });

  }

  private savedModel(entityName: string, model: S | E, successType: EnumSuccessType) {
    const notificationHandler = NotificationFactory.instance.getNotificationInstance(entityName);

    switch (successType) {

      case EnumSuccessType.CreatedOk:
        notificationHandler.publishItemActivated(model);
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
