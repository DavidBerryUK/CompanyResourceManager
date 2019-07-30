import { IListFilterByText }                    from '../interfaces/FilterInterfaces';
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';
import PersonSummaryModel                       from '@/repositories/models/person/PersonSummaryModel';
import StringCompare                            from '@/utilities/stringMatch/StringCompare';

export default class FilterPersonSummaryService implements IListFilterByText<PersonSummaryModel> {

    public filterWithRankings( filterText: string,
                               list: GenericCollectionModel<PersonSummaryModel>)
                                : GenericCollectionModel<PersonSummaryModel> {

        const rankingListA = new Array<PersonSummaryModel>();
        const rankingListB = new Array<PersonSummaryModel>();
        const rankingListC = new Array<PersonSummaryModel>();
        const rankingListD = new Array<PersonSummaryModel>();

        const filterTextLowerCase = filterText.toLowerCase();

        const castList = list.items as Array<PersonSummaryModel>;

        castList.forEach((item: PersonSummaryModel) => {

            const ranking = StringCompare.compareWithRanking(filterText, item.entityValue);

            if ( ranking === 100) {
                rankingListA.push(item);
            } else if ( ranking >= 75) {
                rankingListB.push(item);
            } else if ( ranking >= 50) {
                rankingListC.push(item);
            } else if ( ranking > 0) {
                rankingListD.push(item);
            }
        });

        const filteredDataList = new GenericCollectionModel<PersonSummaryModel>();
        filteredDataList.items = rankingListA
          .concat(rankingListB)
          .concat(rankingListC)
          .concat(rankingListD);

        return filteredDataList;
    }
}
