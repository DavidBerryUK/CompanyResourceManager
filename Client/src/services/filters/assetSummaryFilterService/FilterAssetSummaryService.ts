import { IListFilterByText }                    from './../interfaces/FilterInterfaces';
import AssetSummaryModel                        from '@/repositories/models/asset/AssetSummaryModel';
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';

export default class FilterAssetSummaryService implements IListFilterByText<AssetSummaryModel> {

    public filterWithRankings( filterText: string,
                               list: GenericCollectionModel<AssetSummaryModel>): GenericCollectionModel<AssetSummaryModel> {

        const rankingListA = new Array<AssetSummaryModel>();
        const rankingListB = new Array<AssetSummaryModel>();

        const filterTextLowerCase = filterText.toLowerCase();

        const castList = list.items as Array<AssetSummaryModel>;

        castList.forEach((item: AssetSummaryModel) => {
            const indexOfName = item.name.toLowerCase().indexOf(filterTextLowerCase);

            if ( indexOfName === 0) {
                rankingListA.push(item);
            } else if ( indexOfName > 0) {
                rankingListB.push(item);
            }
        });

        const filteredDataList = new GenericCollectionModel<AssetSummaryModel>();
        filteredDataList.items = rankingListA
          .concat(rankingListB);

        return filteredDataList;
    }
}
