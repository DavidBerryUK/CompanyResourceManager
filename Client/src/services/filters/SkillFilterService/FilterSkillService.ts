import { IListFilterByText }                    from '../interfaces/FilterInterfaces';
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';
import SkillSummaryModel                        from '@/repositories/models/skill/SkillSummaryModel';
import StringCompare                            from '@/utilities/stringMatch/StringCompare';

export default class FilterSkillService implements IListFilterByText<SkillSummaryModel> {

    public filterWithRankings(
        filterText: string,
        list: GenericCollectionModel<SkillSummaryModel>): GenericCollectionModel<SkillSummaryModel> {

        const rankingListA = new Array<SkillSummaryModel>();
        const rankingListB = new Array<SkillSummaryModel>();
        const rankingListC = new Array<SkillSummaryModel>();
        const rankingListD = new Array<SkillSummaryModel>();

        const filterTextLowerCase = filterText.toLowerCase();

        const castList = list.items as Array<SkillSummaryModel>;

        castList.forEach((item: SkillSummaryModel) => {

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

        const filteredDataList = new GenericCollectionModel<SkillSummaryModel>();
        filteredDataList.items = rankingListA
            .concat(rankingListB)
            .concat(rankingListC)
            .concat(rankingListD);

        return filteredDataList;
    }
}
