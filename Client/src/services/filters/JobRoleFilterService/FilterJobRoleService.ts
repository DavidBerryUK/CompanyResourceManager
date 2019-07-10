import JobRoleModel                             from '@/repositories/models/jobRole/JobRoleModel';
import { IFilterModelService }                  from '@/services/interfaces/IFilterModelService';
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';

export default class FilterJobRoleService implements IFilterModelService {

    filterWithRankings( filterText : string , 
                        list : GenericCollectionModel<JobRoleModel>) : GenericCollectionModel<JobRoleModel> {
                    
        var rankingListA = new Array<JobRoleModel>();
        var rankingListB = new Array<JobRoleModel>();


        var filterTextLowerCase = filterText.toLowerCase();

        var castList = list.items as Array<JobRoleModel>;
        
        castList.forEach((item: JobRoleModel) => {
            var indexOfName = item.name.toLowerCase().indexOf(filterTextLowerCase);
        
            if ( indexOfName == 0) {
                rankingListA.push(item)
            }
          
            else if ( indexOfName > 0) {
                rankingListB.push(item)
            }
        });

        var filteredDataList = new GenericCollectionModel<JobRoleModel>();
        filteredDataList.items = rankingListA
          .concat(rankingListB);

        return filteredDataList;
    }

}