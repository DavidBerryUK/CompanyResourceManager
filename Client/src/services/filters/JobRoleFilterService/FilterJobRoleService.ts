import { IListFilterByText }                    from './../interfaces/FilterInterfaces';
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';
import JobRoleSummaryModel                      from '@/repositories/models/jobRole/JobRoleSummaryModel';

export default class FilterJobRoleService implements IListFilterByText<JobRoleSummaryModel> {

    filterWithRankings( filterText : string , 
                        list : GenericCollectionModel<JobRoleSummaryModel>) : GenericCollectionModel<JobRoleSummaryModel> {
                    
        var rankingListA = new Array<JobRoleSummaryModel>();
        var rankingListB = new Array<JobRoleSummaryModel>();


        var filterTextLowerCase = filterText.toLowerCase();

        var castList = list.items as Array<JobRoleSummaryModel>;
        
        castList.forEach((item: JobRoleSummaryModel) => {
            var indexOfName = item.name.toLowerCase().indexOf(filterTextLowerCase);
        
            if ( indexOfName == 0) {
                rankingListA.push(item)
            }
          
            else if ( indexOfName > 0) {
                rankingListB.push(item)
            }
        });

        var filteredDataList = new GenericCollectionModel<JobRoleSummaryModel>();
        filteredDataList.items = rankingListA
          .concat(rankingListB);

        return filteredDataList;
    }

}