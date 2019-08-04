import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';

export interface IListFilterByText<T> {
    filterWithRankings( filterText: string ,
                        list: GenericCollectionModel<T>): GenericCollectionModel<T>;
}
