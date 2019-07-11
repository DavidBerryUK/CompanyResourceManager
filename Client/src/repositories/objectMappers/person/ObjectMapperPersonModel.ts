import { IObjectMapper }                        from "../interfaces/IObjectMapper";
import PersonModel                              from '@/repositories/models/person/PersonModel';

export default class ObjectMapperPersonModel implements IObjectMapper<PersonModel> {
    
    map(item: any): PersonModel {
                        
        var response = Object.assign(new PersonModel(), item);

        return response;
    }
}