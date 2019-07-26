import { IListFilterByText }                    from '../interfaces/FilterInterfaces';
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';
import StringCompare                            from '@/utilities/stringMatch/StringCompare';
import TeamSummaryModel                         from '@/repositories/models/team/TeamSummaryModel';

export default class FilterTeamService implements IListFilterByText<TeamSummaryModel> {

    public filterWithRankings(
        filterText: string,
        list: GenericCollectionModel<TeamSummaryModel>): GenericCollectionModel<TeamSummaryModel> {

        const rankingListA = new Array<TeamSummaryModel>();
        const rankingListB = new Array<TeamSummaryModel>();
        const rankingListC = new Array<TeamSummaryModel>();
        const rankingListD = new Array<TeamSummaryModel>();

        const filterTextLowerCase = filterText.toLowerCase();

        const castList = list.items as Array<TeamSummaryModel>;

        castList.forEach((item: TeamSummaryModel) => {

            const ranking = StringCompare.compareWithRanking(filterText, item.entityValue);

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

        const filteredDataList = new GenericCollectionModel<TeamSummaryModel>();
        filteredDataList.items = rankingListA
            .concat(rankingListB)
            .concat(rankingListC)
            .concat(rankingListD);

        return filteredDataList;
    }
}
