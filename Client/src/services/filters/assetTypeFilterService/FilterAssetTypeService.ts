import { IFilterModelService }                  from '@/services/interfaces/IFilterModelService';
import AssetTypeModel                           from '@/repositories/models/assetType/AssetTypeModel';
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';

export default class FilterAssetTypeService implements IFilterModelService {

    filterWithRankings( filterText : string , 
                        list : GenericCollectionModel<AssetTypeModel>) : GenericCollectionModel<AssetTypeModel> {
                    
        var rankingListA = new Array<AssetTypeModel>();
        var rankingListB = new Array<AssetTypeModel>();


        var filterTextLowerCase = filterText.toLowerCase();

        var castList = list.items as Array<AssetTypeModel>;
        
        castList.forEach((item: AssetTypeModel) => {
            var indexOfName = item.name.toLowerCase().indexOf(filterTextLowerCase);
        
            if ( indexOfName == 0) {
                rankingListA.push(item)
            }
          
            else if ( indexOfName > 0) {
                rankingListB.push(item)
            }
        });

        var filteredDataList = new GenericCollectionModel<AssetTypeModel>();
        filteredDataList.items = rankingListA
          .concat(rankingListB);

        return filteredDataList;
    }

}