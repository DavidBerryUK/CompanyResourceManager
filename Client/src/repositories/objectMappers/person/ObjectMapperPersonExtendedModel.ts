import { IObjectMapper }                        from "../interfaces/IObjectMapper";
import PersonExtendedModel                      from '@/repositories/models/person/PersonExtendedModel';

// object mappers transform plain java objects
// into strongly typed typescript objects
export default class ObjectMapperPersonExtendedModel implements IObjectMapper<PersonExtendedModel> {
    
    map(item: any): PersonExtendedModel {
                        
        var response = Object.assign(new PersonExtendedModel(), item);

        return response;
    }
}