import GenericApiRepository                     from '@/repositories/apiBase/GenericApiRepository';
import ObjectArrayMapperPersonSummaryModel      from '@/repositories/objectMappers/person/ObjectArrayMapperPersonSummaryModel';
import ObjectMapperPersonExtendedModel          from '../objectMappers/person/ObjectMapperPersonExtendedModel';
import ObjectMapperPersonSummaryModel           from '@/repositories/objectMappers/person/ObjectMapperPersonSummaryModel';
import PersonExtendedModel                      from '../models/person/PersonExtendedModel';
import PersonListFilterParametersModel          from '@/repositories/models/person/PersonListFilterParametersModal';
import PersonSummaryModel                       from '@/repositories/models/person/PersonSummaryModel';

export default class PersonRepositoryFactory {

    //
    // create a Person Respository using the generic base repository class
    //  this repository supports all the basic CRUD operations as well
    //  as providing a filtered object list ( providing the server supports the functionality )
    static getRepository() : GenericApiRepository<PersonSummaryModel, PersonExtendedModel, PersonListFilterParametersModel> {
        var repository = new GenericApiRepository<PersonSummaryModel, PersonExtendedModel, PersonListFilterParametersModel>(
            new PersonSummaryModel().entityName,
            "api/people",
            new ObjectMapperPersonSummaryModel(),
            new ObjectMapperPersonExtendedModel(),
            new ObjectArrayMapperPersonSummaryModel()
        )
        return repository;
    }
}