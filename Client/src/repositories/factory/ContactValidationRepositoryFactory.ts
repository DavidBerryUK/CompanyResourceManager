import ContactValidationSummaryModel            from '@/repositories/models/contactValidation/ContactValidationSummaryModel';
import GenericApiExtendedRepository             from '@/repositories/apiBase/GenericApiExtendedRepository';
import ListFilter                               from '@/repositories/models/listFilter/ListFilterWithArchiveFlag';
import ModelFactoryContactValidationSummary     from '@/repositories/modelFactories/contact/ModelFactoryContactValidationSummary';


export default class ContactValidationRepositoryFactory {

    //
    // create a Contact Validation Repository using the generic base repository class
    //  this repository supports all the basic CRUD operations as well
    //  as providing a filtered object list ( providing the server supports the functionality )
    public static getRepository(): GenericApiExtendedRepository<ContactValidationSummaryModel, ContactValidationSummaryModel, ListFilter> {
        const repository = new GenericApiExtendedRepository<ContactValidationSummaryModel, ContactValidationSummaryModel, ListFilter>(
            'api/contact/validation',
            new ModelFactoryContactValidationSummary(),
            new ModelFactoryContactValidationSummary());
        return repository;
    }
}
