import GenericApiRepository                     from '@/repositories/apiBase/GenericApiRepository';
import ListFilterWithArchiveFlag                from '@/repositories/models/listFilter/ListFilterWithArchiveFlag';
import ObjectArrayMapperPersonSummaryModel      from '@/repositories/objectMappers/person/ObjectArrayMapperPersonSummaryModel';
import ObjectMapperPersonExtendedModel          from '../objectMappers/person/ObjectMapperPersonExtendedModel';
import ObjectMapperPersonSummaryModel           from '@/repositories/objectMappers/person/ObjectMapperPersonSummaryModel';
import PersonExtendedModel                      from '../models/person/PersonExtendedModel';
import PersonSummaryModel                       from '@/repositories/models/person/PersonSummaryModel';

export default class PersonRepositoryFactory {

    //
    // create a Person Respository using the generic base repository class
    //  this repository supports all the basic CRUD operations as well
    //  as providing a filtered object list ( providing the server supports the functionality )
    public static getRepository(): GenericApiRepository<PersonSummaryModel, PersonExtendedModel, ListFilterWithArchiveFlag> {
        const repository = new GenericApiRepository<PersonSummaryModel, PersonExtendedModel, ListFilterWithArchiveFlag>(
            new PersonSummaryModel().entityName,
            'api/person',
            new ObjectMapperPersonSummaryModel(),
            new ObjectMapperPersonExtendedModel(),
            new ObjectArrayMapperPersonSummaryModel());
        return repository;
    }
}
