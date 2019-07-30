import { ApiResponse }                          from '@/repositories/contracts/ApiResponseContract';
import { IModelGenericMapper }                  from '@/repositories/modelMappers/interfaces/IModelGenericMapper';

export interface IRepositoryReadItem<T> {
    getById(url: string, convertor: IModelGenericMapper<T>): ApiResponse<T>;
}
