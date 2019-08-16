import ContactGroupSummaryModel                 from '@/repositories/models/contactGroup/ContactGroupSummaryModel';
import GenericApiExtendedRepository             from '@/repositories/apiBase/GenericApiExtendedRepository';
import ListFilterWithArchiveFlag                from '@/repositories/models/listFilter/ListFilterWithArchiveFlag';
import ModelFactoryContactGroupSummary          from '@/repositories/modelFactories/contact/ModelFactoryContactGroupSummary';


export default class ContactGroupRepositoryFactory {

    //
    // create a Contact Group Repository using the generic base repository class
    //  this repository supports getting of a contact group, but not updating it
    public static getRepository(): GenericApiExtendedRepository<ContactGroupSummaryModel, ContactGroupSummaryModel, ListFilterWithArchiveFlag> {
        const repository = new GenericApiExtendedRepository<ContactGroupSummaryModel, ContactGroupSummaryModel, ListFilterWithArchiveFlag>(
            'api/contact/group',
            new ModelFactoryContactGroupSummary(),
            new ModelFactoryContactGroupSummary());
        return repository;
    }
}
