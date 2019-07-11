import { IObjectMapper }                        from "../interfaces/IObjectMapper";
import PersonModel                              from '@/repositories/models/person/PersonModel';

// object mappers transform plain java objects
// into strongly typed typescript objects
export default class ObjectMapperPerson implements IObjectMapper<PersonModel> {
    
    map(item: any): PersonModel {
                        
        var response = Object.assign(new PersonModel(), item);

        return response;
    }
}