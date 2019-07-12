import { ApiResponse }                          from "../contracts/ApiResponseContract";
import { EnumSuccessType }                      from "../helpers/SuccessCallbackHelper";
import { IApiModel }                            from '../models/interfaces/IApiModel';
import { IObjectArrayMapper }                   from '@/repositories/objectMappers/interfaces/IObjectArrayMapper';
import { IObjectMapper }                        from '@/repositories/objectMappers/interfaces/IObjectMapper';
import ApiBase                                  from "./ApiBase";
import ApiBasePostWithCollectionResult          from "./lowlevel/ApiBasePostWithCollectionResult";
import BaseApiConfig                            from "./lowlevel/ApiBaseConfig";
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';
import ListItemModel                            from '@/repositories/models/shared/collections/ListItemModel';
import NotificationFactory                      from '@/services/notifications/NotificationFactory';
import ObjectArrayMapperListItem                from '../objectMappers/list/ObjectArrayMapperListItem';
import SuccessCallbackHelper                    from "../helpers/SuccessCallbackHelper";

/// S = Summary Entity model
/// E = Extended Entity model        :IApiModel
/// F = List Filter Model

export default class GenericApiRepository<S extends IApiModel, E extends S, F> extends ApiBase {

  private baseUrl: string = "";
  private summaryObjectMapper: IObjectMapper<S>;
  private extendedObjectMapper: IObjectMapper<E>;
  private summaryListObjectMapper: IObjectArrayMapper<S>;  
  public entityName : string;

  public constructor(
    entityName: string,
    endpoint: string,
    summaryObjectMapper: IObjectMapper<S>,
    extendedObjectMapper: IObjectMapper<E>,
    summaryListObjectMapper: IObjectArrayMapper<S>) {
    super();

    this.entityName = entityName;

    if ( summaryObjectMapper == null || summaryObjectMapper == undefined ) {
      throw new Error('Can not create GenericApiRepository without an summaryObjectMapper');
    }

    if ( extendedObjectMapper == null || extendedObjectMapper == undefined ) {
      throw new Error('Can not create GenericApiRepository without an extendedObjectMapper');
    }

    if ( summaryListObjectMapper == null || summaryListObjectMapper == undefined ) {
      throw new Error('Can not create GenericApiRepository without an summaryListObjectMapper');
    }

    this.summaryObjectMapper = summaryObjectMapper;
    this.extendedObjectMapper = extendedObjectMapper;
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
      this.extendedObjectMapper);

  }

  //
  // save item details
  //
  save(model: E): ApiResponse<E> {

    return this.baseSave(
      this.baseUrl,
      model,
      this.extendedObjectMapper,
      (model, successType) => {
        this.savedModel(this.entityName,model, successType)
      });

  }

  deactivate(id: string): ApiResponse<S> {
        
    return this.basePutWithNoModel(
      `${this.baseUrl}/${id}/deactivate`,
      this.summaryObjectMapper,
      EnumSuccessType.DeActivatedOk,
      (model, successType) => {
        this.savedModel(this.entityName, model, successType)
      })

  }

  activate(id: string): ApiResponse<S> {

    return this.basePutWithNoModel(
      `${this.baseUrl}/${id}/activate`,
      this.summaryObjectMapper,
      EnumSuccessType.ActivatedOk,
      (model, successType) => {this.savedModel(this.entityName, model, successType)})

  }

  private savedModel(entityName: string, model: S | E, successType: EnumSuccessType) {
    
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

