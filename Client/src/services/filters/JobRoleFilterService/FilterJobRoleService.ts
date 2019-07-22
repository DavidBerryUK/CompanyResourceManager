import { IListFilterByText }                    from './../interfaces/FilterInterfaces';
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';
import JobRoleSummaryModel                      from '@/repositories/models/jobRole/JobRoleSummaryModel';

export default class FilterJobRoleService implements IListFilterByText<JobRoleSummaryModel> {

    public filterWithRankings(  filterText: string ,
                                list: GenericCollectionModel<JobRoleSummaryModel>): GenericCollectionModel<JobRoleSummaryModel> {

        const rankingListA = new Array<JobRoleSummaryModel>();
        const rankingListB = new Array<JobRoleSummaryModel>();

        const filterTextLowerCase = filterText.toLowerCase();

        const castList = list.items as Array<JobRoleSummaryModel>;

        castList.forEach((item: JobRoleSummaryModel) => {
            const indexOfName = item.name.toLowerCase().indexOf(filterTextLowerCase);

            if ( indexOfName === 0) {
                rankingListA.push(item);
            } else if ( indexOfName > 0) {
                rankingListB.push(item);
            }
        });

        const filteredDataList = new GenericCollectionModel<JobRoleSummaryModel>();
        filteredDataList.items = rankingListA
          .concat(rankingListB);

        return filteredDataList;
    }
}
