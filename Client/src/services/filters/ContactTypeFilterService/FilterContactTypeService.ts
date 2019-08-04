import { IListFilterByText }                    from '../interfaces/FilterInterfaces';
import ContactTypeSummaryModel                  from '@/repositories/models/contactType/ContactTypeSummaryModel';
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';
import StringCompare                            from '@/utilities/stringMatch/StringCompare';

export default class FilterContractTypeService implements IListFilterByText<ContactTypeSummaryModel> {

    public filterWithRankings(
        filterText: string,
        list: GenericCollectionModel<ContactTypeSummaryModel>): GenericCollectionModel<ContactTypeSummaryModel> {

        const rankingListA = new Array<ContactTypeSummaryModel>();
        const rankingListB = new Array<ContactTypeSummaryModel>();
        const rankingListC = new Array<ContactTypeSummaryModel>();
        const rankingListD = new Array<ContactTypeSummaryModel>();

        const filterTextLowerCase = filterText.toLowerCase();

        const castList = list.items as Array<ContactTypeSummaryModel>;

        castList.forEach((item: ContactTypeSummaryModel) => {

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

        const filteredDataList = new GenericCollectionModel<ContactTypeSummaryModel>();
        filteredDataList.items = rankingListA
            .concat(rankingListB)
            .concat(rankingListC)
            .concat(rankingListD);

        return filteredDataList;
    }
}
