import { IModelGenericMapper }                 from '@/repositories/modelMappers/interfaces/IModelGenericMapper';
import { ApiResponse }                          from '@/repositories/contracts/ApiResponseContract';

export interface IRepositoryReadItem<T> {
    getById(url: string, convertor: IModelGenericMapper<T>): ApiResponse<T>;
}
