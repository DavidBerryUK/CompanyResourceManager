import GenericApiRepository                     from '@/repositories/apiBase/GenericApiRepository';
import ObjectArrayMapperPersonSummaryModel      from '@/repositories/objectMappers/person/ObjectArrayMapperPersonSummary';
import ObjectMapperPerson                       from '@/repositories/objectMappers/person/ObjectMapperPerson';
import PersonListFilterParametersModel          from '@/repositories/models/person/PersonListFilterParametersModal';
import PersonModel                              from '@/repositories/models/person/PersonModel';
import PersonSummaryModel                       from '@/repositories/models/person/PersonSummaryModel';

export default class PersonRepositoryFactory {

    //
    // create a Person Respository using the generic base repository class
    //  this repository supports all the basic CRUD operations as well
    //  as providing a filtered object list ( providing the server supports the functionality )
    static getRepository() : GenericApiRepository<PersonModel, PersonSummaryModel, PersonListFilterParametersModel> {
        var repository = new GenericApiRepository<PersonModel, PersonSummaryModel, PersonListFilterParametersModel>(
            new PersonModel().entityName,
            "api/people",
            new ObjectMapperPerson(),
            new ObjectArrayMapperPersonSummaryModel()
        )
        return repository;
    }
}