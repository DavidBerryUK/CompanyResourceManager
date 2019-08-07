import GenericApiRepository                     from '@/repositories/apiBase/GenericApiRepository';
import ListFilterWithArchiveFlag                from '@/repositories/models/listFilter/ListFilterWithArchiveFlag';
import ModelFactoryPersonExtended               from '@/repositories/modelFactories/person/ModelFactoryPersonExtended';
import ModelFactoryPersonSummary                from '@/repositories/modelFactories/person/ModelFactoryPersonSummary';
import PersonExtendedModel                      from '@/repositories/models/person/PersonExtendedModel';
import PersonSummaryModel                       from '@/repositories/models/person/PersonSummaryModel';

export default class PersonRepositoryFactory {

    //
    // create a Person Repository using the generic base repository class
    //  this repository supports all the basic CRUD operations as well
    //  as providing a filtered object list ( providing the server supports the functionality )
    public static getRepository(): GenericApiRepository<PersonSummaryModel, PersonExtendedModel, ListFilterWithArchiveFlag> {
        const repository = new GenericApiRepository<PersonSummaryModel, PersonExtendedModel, ListFilterWithArchiveFlag>(
            'api/person',
            new ModelFactoryPersonSummary(),
            new ModelFactoryPersonExtended());
        return repository;
    }
}
