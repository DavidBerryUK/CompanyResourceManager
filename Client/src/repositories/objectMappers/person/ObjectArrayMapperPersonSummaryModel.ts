import { IObjectArrayMapper }                   from '../interfaces/IObjectArrayMapper';
import PersonSummaryModel                       from '../../models/person/PersonSummaryModel';

// object mappers transform plain java objects
// into strongly typed typescript objects
export default class ObjectArrayMapperPersonSummaryModel implements IObjectArrayMapper<PersonSummaryModel> {

    public map(dataArray: any[]): Array<PersonSummaryModel> {
        let response = new Array<PersonSummaryModel>();
        response = dataArray.map((item) => Object.assign(new PersonSummaryModel(), item));
        return response;
    }
}
