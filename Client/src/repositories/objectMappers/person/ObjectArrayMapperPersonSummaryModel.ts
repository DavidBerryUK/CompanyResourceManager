import { IObjectArrayMapper }                   from "../interfaces/IObjectArrayMapper";
import PersonSummaryModel                       from "../../models/person/PersonSummaryModel";

// object mappers transform plain java objects
// into strongly typed typescript objects
export default class ObjectArrayMapperPersonSummaryModel implements IObjectArrayMapper<PersonSummaryModel> {
    
    map(dataArray: any[]): Array<PersonSummaryModel> {
        
        var response = new Array<PersonSummaryModel>();
        
        response = dataArray.map((item) => { return  Object.assign(new PersonSummaryModel(), item) });

        return response;
    }
}