import ListItemModel                            from '@/repositories/models/listitem/ListItemModel';
import StringCompare                            from '@/utilities/stringMatch/StringCompare';

export default class FilterListItemService {

    public filterWithRankings(filterText: string, list: Array<ListItemModel>): Array<ListItemModel> {

        const rankingListA = new Array<ListItemModel>();
        const rankingListB = new Array<ListItemModel>();
        const rankingListC = new Array<ListItemModel>();
        const rankingListD = new Array<ListItemModel>();


        const filterTextLowerCase = filterText ? filterText.toLowerCase() : '';

        list.forEach((item: ListItemModel) => {

            const ranking = StringCompare.compareWithRanking(filterTextLowerCase, item.entityValue);

            if (ranking === 100) {
                rankingListA.push(item);
            } else if (ranking >= 75) {
                rankingListB.push(item);
            } else if (ranking >= 50) {
                rankingListC.push(item);
            } else if (ranking > 0) {
                rankingListD.push(item);
            }
        });

        const result = rankingListA
            .concat(rankingListB)
            .concat(rankingListC)
            .concat(rankingListD);

        return result;
    }
}
