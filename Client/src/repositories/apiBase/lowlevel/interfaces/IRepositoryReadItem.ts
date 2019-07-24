import { IObjectGenericMapper }                 from '@/repositories/objectMappers/interfaces/IObjectGenericMapper';
import { ApiResponse }                          from '@/repositories/contracts/ApiResponseContract';

export interface IRepositoryReadItem<T> {
    getById(url: string, convertor: IObjectGenericMapper<T>): ApiResponse<T>;
}
