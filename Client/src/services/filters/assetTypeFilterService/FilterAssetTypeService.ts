import { IListFilterByText }                    from './../interfaces/FilterInterfaces';
import AssetTypeSummmaryModel                   from '@/repositories/models/assetType/AssetTypeSummaryModel';
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';


export default class FilterAssetTypeService implements IListFilterByText<AssetTypeSummmaryModel> {

    public filterWithRankings(  filterText: string,
                                list: GenericCollectionModel<AssetTypeSummmaryModel>)
                                : GenericCollectionModel<AssetTypeSummmaryModel> {

        const rankingListA = new Array<AssetTypeSummmaryModel>();
        const rankingListB = new Array<AssetTypeSummmaryModel>();
        const filterTextLowerCase = filterText.toLowerCase();

        const castList = list.items as Array<AssetTypeSummmaryModel>;

        castList.forEach((item: AssetTypeSummmaryModel) => {
            const indexOfName = item.name.toLowerCase().indexOf(filterTextLowerCase);

            if ( indexOfName === 0) {
                rankingListA.push(item);
            } else if ( indexOfName > 0) {
                rankingListB.push(item);
            }
        });

        const filteredDataList = new GenericCollectionModel<AssetTypeSummmaryModel>();
        filteredDataList.items = rankingListA
          .concat(rankingListB);

        return filteredDataList;
    }
}
