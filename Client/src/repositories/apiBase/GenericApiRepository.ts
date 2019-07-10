import { ApiResponse }                          from "../contracts/ApiResponseContract";
import { EnumSuccessType }                      from "../helpers/SuccessCallbackHelper";
import { IApiModel }                            from '../models/interfaces/IApiModel';
import { IObjectArrayMapper }                   from '@/repositories/objectMappers/interfaces/IObjectArrayMapper';
import { IObjectMapper }                        from '@/repositories/objectMappers/interfaces/IObjectMapper';
import ApiBase                                  from "./ApiBase";
import ApiBasePostWithCollectionResult          from "./lowlevel/ApiBasePostWithCollectionResult";
import BaseApiConfig                            from "./lowlevel/ApiBaseConfig";
import GenericCollectionModel                   from '../models/shared/collections/GenericCollectionModel';
import ListItemModel                            from '@/repositories/models/shared/collections/ListItemModel';
import NotificationFactory                      from '@/services/notifications/NotificationFactory';
import ObjectArrayMapperListItem                from '../objectMappers/list/ObjectArrayMapperListItem';
import SuccessCallbackHelper                    from "../helpers/SuccessCallbackHelper";

/// S = Summary model
/// E = Entity model        :IApiModel
/// F = List Filter Model

export default class GenericApiRepository<E extends IApiModel, S, F> extends ApiBase {

  private baseUrl: string = "";
  private entityObjectMapper: IObjectMapper<E>;
  private summaryListObjectMapper: IObjectArrayMapper<S>;  
  public entityName : string;

  public constructor(
    entityName: string,
    endpoint: string,
    entityObjectMapper: IObjectMapper<E>,
    summaryListObjectMapper: IObjectArrayMapper<S>) {
    super();

    this.entityName = entityName;

    if ( entityObjectMapper == null || entityObjectMapper == undefined ) {
      throw new Error('Can not create GenericApiRepository without an entityObjectMapper');
    }

    if ( summaryListObjectMapper == null || summaryListObjectMapper == undefined ) {
      throw new Error('Can not create GenericApiRepository without an summaryListObjectMapper');
    }

    this.entityObjectMapper = entityObjectMapper;
    this.summaryListObjectMapper = summaryListObjectMapper;
    this.baseUrl = `${BaseApiConfig.baseEndpoint}${endpoint}`;
  }

  //
  // get a list of all items
  //
  getAllAsSummary(): ApiResponse<GenericCollectionModel<S>> {

    return this.baseGetAll<S>(
      this.baseUrl,
      this.summaryListObjectMapper);
      
  }

  //
  // get a list of filtered items
  //
  getFilteredList(filter: F): ApiResponse<GenericCollectionModel<S>> {

    return ApiBasePostWithCollectionResult.post(
      `${this.baseUrl}/filtered`,
      filter,
      this.summaryListObjectMapper);

  }
  
  // get an active list of asset types with just id and name
  //
  getActiveList() : ApiResponse<GenericCollectionModel<ListItemModel>> {
    return this.baseGetAll<ListItemModel>(`${this.baseUrl}/items`, new ObjectArrayMapperListItem());
  }

  ///
  /// get item by item id
  /// will return null if no itemh is found
  ///
  getById(id: string): ApiResponse<E> {

    return this.baseGetById(
      this.baseUrl + "/" + id,
      this.entityObjectMapper);

  }

  //
  // save item details
  //
  save(model: E): ApiResponse<E> {

    return this.baseSave(
      this.baseUrl,
      model,
      this.entityObjectMapper,
      (model, successType) => {this.savedModel(this.entityName, model, successType)})

  }

  deactivate(id: string): ApiResponse<E> {
        
    return this.basePutWithNoModel(
      `${this.baseUrl}/${id}/deactivate`,
      this.entityObjectMapper,
      EnumSuccessType.DeActivatedOk,
      (model, successType) => {this.savedModel(this.entityName, model, successType)})

  }

  activate(id: string): ApiResponse<E> {

    return this.basePutWithNoModel(
      `${this.baseUrl}/${id}/activate`,
      this.entityObjectMapper,
      EnumSuccessType.ActivatedOk,
      (model, successType) => {this.savedModel(this.entityName, model, successType)})

  }

  private savedModel(entityName: string, model: E, successType: EnumSuccessType) {
    
    var notificationHandler = NotificationFactory.instance.getNotificationInstance(entityName);

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

