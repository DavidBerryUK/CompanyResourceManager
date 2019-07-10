import { IObjectArrayMapper }                   from "../interfaces/IObjectArrayMapper";
import PersonSummaryModel                       from "../../models/person/PersonSummaryModel";


export default class ObjectArrayMapperPersonSummaryModel implements IObjectArrayMapper<PersonSummaryModel> {
    
    map(dataArray: any[]): Array<PersonSummaryModel> {
        
        var response = new Array<PersonSummaryModel>();
        
        response = dataArray.map((item) => { return  Object.assign(new PersonSummaryModel(), item) });

        return response;
    }
}