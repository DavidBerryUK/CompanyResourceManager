import { IListFilterByText }                    from './../interfaces/FilterInterfaces';
import AssetTypeSummmaryModel                   from '@/repositories/models/assetType/AssetTypeSummaryModel';
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';


export default class FilterAssetTypeService implements IListFilterByText<AssetTypeSummmaryModel> {

    filterWithRankings( filterText : string , 
                        list : GenericCollectionModel<AssetTypeSummmaryModel>) : GenericCollectionModel<AssetTypeSummmaryModel> {
                    
        var rankingListA = new Array<AssetTypeSummmaryModel>();
        var rankingListB = new Array<AssetTypeSummmaryModel>();


        var filterTextLowerCase = filterText.toLowerCase();

        var castList = list.items as Array<AssetTypeSummmaryModel>;
        
        castList.forEach((item: AssetTypeSummmaryModel) => {
            var indexOfName = item.name.toLowerCase().indexOf(filterTextLowerCase);
        
            if ( indexOfName == 0) {
                rankingListA.push(item)
            }
          
            else if ( indexOfName > 0) {
                rankingListB.push(item)
            }
        });

        var filteredDataList = new GenericCollectionModel<AssetTypeSummmaryModel>();
        filteredDataList.items = rankingListA
          .concat(rankingListB);

        return filteredDataList;
    }

}