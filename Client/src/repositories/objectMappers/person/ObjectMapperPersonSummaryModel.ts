import { IObjectMapper }                        from '../interfaces/IObjectMapper';
import PersonSummaryModel                       from '@/repositories/models/person/PersonSummaryModel';

// object mappers transform plain java objects
// into strongly typed typescript objects
export default class ObjectMapperPersonSummaryModel implements IObjectMapper<PersonSummaryModel> {

    public map(item: any): PersonSummaryModel {
        const response = Object.assign(new PersonSummaryModel(), item);
        return response;
    }
}
