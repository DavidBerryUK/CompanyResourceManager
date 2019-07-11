import GenericApiRepository                     from '@/repositories/apiBase/GenericApiRepository';
import ObjectArrayMapperPersonSummaryModel      from '@/repositories/objectMappers/person/ObjectArrayMapperPersonSummary';
import ObjectMapperPersonModel                       from '@/repositories/objectMappers/person/ObjectMapperPersonModel';
import PersonListFilterParametersModel          from '@/repositories/models/person/PersonListFilterParametersModal';
import PersonModel                              from '@/repositories/models/person/PersonModel';
import PersonSummaryModel                       from '@/repositories/models/person/PersonSummaryModel';

export default class PersonRepositoryFactory {

    static getRepository() : GenericApiRepository<PersonModel, PersonSummaryModel, PersonListFilterParametersModel> {
        var repository = new GenericApiRepository<PersonModel, PersonSummaryModel, PersonListFilterParametersModel>(
            new PersonModel().entityName,
            "api/people",
            new ObjectMapperPersonModel(),
            new ObjectArrayMapperPersonSummaryModel()
        )
        return repository;
    }
}