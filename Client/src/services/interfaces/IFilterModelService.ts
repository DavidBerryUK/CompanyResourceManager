import { IApiModel }                            from '@/repositories/models/interfaces/IApiModel';
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';

/**
 * The filter model service filters a collection of objects with the provided text.
 *
 *  The implementation for each list type may vary from a simple text match to 
 *  complex matching.
 * 
 *  The branch list matches with 4 ranking types and can match on branch numbers and
 *  post codes for example
 * 
 * @export
 * @interface IFilterModelService
 */
export interface IFilterModelService {

    filterWithRankings(
        filterText: string,
        list: GenericCollectionModel<IApiModel>): GenericCollectionModel<IApiModel>
}