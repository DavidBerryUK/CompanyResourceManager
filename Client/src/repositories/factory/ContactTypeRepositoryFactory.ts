import ContactTypeSummaryModel                  from '@/repositories/models/contactType/ContactTypeSummaryModel';
import GenericApiExtendedRepository             from '@/repositories/apiBase/GenericApiExtendedRepository';
import ListFilterWithArchiveFlag                from '@/repositories/models/listFilter/ListFilterWithArchiveFlag';
import ModelFactoryContactTypeSummary           from '@/repositories/modelFactories/contact/ModelFactoryContactTypeSummary';

export default class ContactTypeRepositoryFactory {

    //
    // create a Contact Type Repository using the generic base repository class
    //  this repository supports all the basic CRUD operations as well
    //  as providing a filtered object list ( providing the server supports the functionality )
    public static getRepository(): GenericApiExtendedRepository<ContactTypeSummaryModel, ContactTypeSummaryModel, ListFilterWithArchiveFlag> {
        const repository = new GenericApiExtendedRepository<ContactTypeSummaryModel, ContactTypeSummaryModel, ListFilterWithArchiveFlag>(
            'api/contact/type',
            new ModelFactoryContactTypeSummary(),
            new ModelFactoryContactTypeSummary());
        return repository;
    }
}
