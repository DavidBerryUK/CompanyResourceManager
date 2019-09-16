import ContactSummaryModel                      from '@/repositories/models/contact/ContactSummaryModel';
import GenericApiSingleRepository               from '../apiBase/GenericApiSingleRepository';
import ListFilterWithArchiveFlag                from '@/repositories/models/listFilter/ListFilterWithArchiveFlag';
import ModelFactoryContactSummary               from '@/repositories/modelFactories/contact/ModelFactoryContactSummary';


export default class ContactRepositoryFactory {

    //
    // create a Contact Group Repository using the generic base repository class
    //  this repository supports getting of a contact group, but not updating it
    public static getRepository(): GenericApiSingleRepository<ContactSummaryModel,  ListFilterWithArchiveFlag> {

        const repository = new GenericApiSingleRepository<ContactSummaryModel,  ListFilterWithArchiveFlag>(
            'api/contact',
            new ModelFactoryContactSummary());

        return repository;
    }
}
