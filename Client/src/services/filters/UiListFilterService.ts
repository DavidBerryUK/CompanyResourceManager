import UiListCollection                         from "../../componentsCommonGui/itemList/models/UiListCollection"
import UiListItem                               from "../../componentsCommonGui/itemList/models/UiListItem";


// a filter for generic ui list items, 
//
// this filter has 2 different ranking sections and filters on
//
// start of item  name
// loose item name
//
export default class UiListFilterService {
    
    static filterWithRankings(filterText : string , list : UiListCollection) :  UiListCollection {

        if (!filterText)
        {
          return list;
        }

        var filterTextLowerCase = filterText.toLowerCase();        
    
        var rankingListA = new Array<UiListItem>();
        var rankingListB = new Array<UiListItem>();
          
        list.items.forEach((item: UiListItem) => {
           
          var indexOfText = item.name.toLowerCase().indexOf(filterTextLowerCase);
          
          //
          // match of beginning of the item name
          //
          if (indexOfText == 0) {
            rankingListA.push(item);
          } 
          //
          // match anywhere on branch name
          //
          else if (indexOfText > 0) {
            rankingListB.push(item);
          } 
          
        });
    
        var filteredDataList = new UiListCollection();

        filteredDataList.items = rankingListA
                                .concat(rankingListB);

        return filteredDataList;
    }


}