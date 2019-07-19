import { IListFilterByText }                    from './../interfaces/FilterInterfaces';
import AssetSummaryModel                        from '@/repositories/models/asset/AssetSummaryModel';
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';

export default class FilterAssetSummaryService implements IListFilterByText<AssetSummaryModel> {

    filterWithRankings( filterText : string , 
                        list : GenericCollectionModel<AssetSummaryModel>) : GenericCollectionModel<AssetSummaryModel> {
                    
        var rankingListA = new Array<AssetSummaryModel>();
        var rankingListB = new Array<AssetSummaryModel>();


        var filterTextLowerCase = filterText.toLowerCase();

        var castList = list.items as Array<AssetSummaryModel>;
        
        castList.forEach((item: AssetSummaryModel) => {
            var indexOfName = item.name.toLowerCase().indexOf(filterTextLowerCase);
        
            if ( indexOfName == 0) {
                rankingListA.push(item)
            }
          
            else if ( indexOfName > 0) {
                rankingListB.push(item)
            }
        });

        var filteredDataList = new GenericCollectionModel<AssetSummaryModel>();
        filteredDataList.items = rankingListA
          .concat(rankingListB);

        return filteredDataList;
    }

}