import ContactTypeExtendedModel                 from '@/repositories/models/contactType/ContactTypeExtendedModel';
import ContactTypeSummaryModel                  from '@/repositories/models/contactType/ContactTypeSummaryModel';
import GenericApiRepository                     from '@/repositories/apiBase/GenericApiRepository';
import ListFilterWithArchiveFlag                from '@/repositories/models/listFilter/ListFilterWithArchiveFlag';
import ModelMapperFactoryContactType            from '@/repositories/modelMappers/ModelMapperFactoryContactType';

export default class ContactTypeRepositoryFactory {

    //
    // create a Contact Type Respository using the generic base repository class
    //  this repository supports all the basic CRUD operations as well
    //  as providing a filtered object list ( providing the server supports the functionality )
    public static getRepository(): GenericApiRepository<ContactTypeSummaryModel, ContactTypeExtendedModel, ListFilterWithArchiveFlag> {
        const repository = new GenericApiRepository<ContactTypeSummaryModel, ContactTypeExtendedModel, ListFilterWithArchiveFlag>(
            'api/contact/type',
            ModelMapperFactoryContactType.createSummaryMapper(),
            ModelMapperFactoryContactType.createExtendedMapper());
        return repository;
    }
}
