import { IObjectMapper }                        from "../interfaces/IObjectMapper";
import PersonSummaryModel                       from '@/repositories/models/person/PersonSummaryModel';

export default class ObjectMapperPersonSummaryModel implements IObjectMapper<PersonSummaryModel> {
    
    map(item: any): PersonSummaryModel {
                        
        var response = Object.assign(new PersonSummaryModel(), item);

        return response;
    }
}