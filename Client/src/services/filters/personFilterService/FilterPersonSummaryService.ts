import PersonSummaryModel                       from '@/repositories/models/person/PersonSummaryModel';
import { IFilterModelService }                  from '@/services/interfaces/IFilterModelService';
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';

export default class FilterPersonSummaryService implements IFilterModelService {

    filterWithRankings( filterText : string , 
                        list : GenericCollectionModel<PersonSummaryModel>) : GenericCollectionModel<PersonSummaryModel> {
                    
        var rankingListA = new Array<PersonSummaryModel>();
        var rankingListB = new Array<PersonSummaryModel>();
        var rankingListC = new Array<PersonSummaryModel>();
        var rankingListD = new Array<PersonSummaryModel>();

        var filterTextLowerCase = filterText.toLowerCase();

        var castList = list.items as Array<PersonSummaryModel>;
        
        castList.forEach((item: PersonSummaryModel) => {
            var indexOfSurnameName = item.surname.toLowerCase().indexOf(filterTextLowerCase);
            var indexOfForenameName = item.forename.toLowerCase().indexOf(filterTextLowerCase);
            
            
            if ( indexOfSurnameName == 0) {
                rankingListA.push(item)
            }
            else if ( indexOfForenameName == 0) {
                rankingListB.push(item)
            }
            else if ( indexOfSurnameName > 0) {
                rankingListC.push(item)
            } 
            else if ( indexOfForenameName > 0) {
                rankingListD.push(item)
            }
        });

        var filteredDataList = new GenericCollectionModel<PersonSummaryModel>();
        filteredDataList.items = rankingListA
          .concat(rankingListB)
          .concat(rankingListC)
          .concat(rankingListD);


        return filteredDataList;
    }

}