import UiListCollection                         from '../../componentsCommonGui/itemList/models/UiListCollection';
import UiListItem                               from '../../componentsCommonGui/itemList/models/UiListItem';

// a filter for generic ui list items,
//
// this filter has 2 different ranking sections and filters on
//
// start of item  name
// loose item name
//
export default class UiListFilterService {

  public static filterWithRankings(filterText: string, list: UiListCollection): UiListCollection {

    if (!filterText) {
      return list;
    }

    const filterTextLowerCase = filterText.toLowerCase();

    const rankingListA = new Array<UiListItem>();
    const rankingListB = new Array<UiListItem>();

    list.items.forEach((item: UiListItem) => {

      const indexOfText = item.name.toLowerCase().indexOf(filterTextLowerCase);

      //
      // match of beginning of the item name
      //
      if (indexOfText === 0) {
        rankingListA.push(item);
      } else if (indexOfText > 0) {
        rankingListB.push(item);
      }

    });

    const filteredDataList = new UiListCollection();

    filteredDataList.items = rankingListA
      .concat(rankingListB);

    return filteredDataList;
  }
}
