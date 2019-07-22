import { ApiResponse }                          from '@/repositories/contracts/ApiResponseContract';
import { IObjectMapper }                        from '@/repositories/objectMappers/interfaces/IObjectMapper';

export interface IRepositoryReadItem<T> {
    getById(url: string, convertor: IObjectMapper<T>): ApiResponse<T>;
}
