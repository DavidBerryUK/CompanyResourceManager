import ContactTypeExtendedModel                 from '../models/contactType/ContactTypeExtendedModel';
import ContactTypeSummaryModel                  from '@/repositories/models/contactType/ContactTypeSummaryModel';
import GenericApiExtendedRepository             from '@/repositories/apiBase/GenericApiExtendedRepository';
import ListFilterWithArchiveFlag                from '@/repositories/models/listFilter/ListFilterWithArchiveFlag';
import ModelFactoryContactTypeExtended          from '../modelFactories/contact/ModelFactoryContactTypeExtended';
import ModelFactoryContactTypeSummary           from '@/repositories/modelFactories/contact/ModelFactoryContactTypeSummary';

export default class ContactTypeRepositoryFactory {

    //
    // create a Contact Type Repository using the generic base repository class
    //  this repository supports all the basic CRUD operations as well
    //  as providing a filtered object list ( providing the server supports the functionality )
    public static getRepository(): GenericApiExtendedRepository<ContactTypeSummaryModel, ContactTypeExtendedModel, ListFilterWithArchiveFlag> {
        const repository = new GenericApiExtendedRepository<ContactTypeSummaryModel, ContactTypeExtendedModel, ListFilterWithArchiveFlag>(
            'api/contact/type',
            new ModelFactoryContactTypeSummary(),
            new ModelFactoryContactTypeExtended());
        return repository;
    }
}
