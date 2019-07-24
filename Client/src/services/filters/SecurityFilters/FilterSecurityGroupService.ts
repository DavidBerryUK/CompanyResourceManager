import { IListFilterByText }                    from '../interfaces/FilterInterfaces';
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';
import SecurityGroupSummaryModel                from '@/repositories/models/securityGroup/SecurityGroupSummaryModel';
import StringCompare                            from '@/utilities/stringMatch/StringCompare';

export default class FilterSecurityGroupService implements IListFilterByText<SecurityGroupSummaryModel> {

    public filterWithRankings(
        filterText: string,
        list: GenericCollectionModel<SecurityGroupSummaryModel>): GenericCollectionModel<SecurityGroupSummaryModel> {

        const rankingListA = new Array<SecurityGroupSummaryModel>();
        const rankingListB = new Array<SecurityGroupSummaryModel>();
        const rankingListC = new Array<SecurityGroupSummaryModel>();
        const rankingListD = new Array<SecurityGroupSummaryModel>();

        const filterTextLowerCase = filterText.toLowerCase();

        const castList = list.items as Array<SecurityGroupSummaryModel>;

        castList.forEach((item: SecurityGroupSummaryModel) => {

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

        const filteredDataList = new GenericCollectionModel<SecurityGroupSummaryModel>();
        filteredDataList.items = rankingListA
            .concat(rankingListB)
            .concat(rankingListC)
            .concat(rankingListD);

        return filteredDataList;
    }
}
