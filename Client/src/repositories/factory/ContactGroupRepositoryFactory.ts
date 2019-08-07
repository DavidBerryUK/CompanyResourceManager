import ContactGroupExtendedModel                from '@/repositories/models/contactGroup/ContactGroupExtendedModel';
import ContactGroupSummaryModel                 from '@/repositories/models/contactGroup/ContactGroupSummaryModel';
import GenericApiRepository                     from '@/repositories/apiBase/GenericApiRepository';
import ListFilterWithArchiveFlag                from '@/repositories/models/listFilter/ListFilterWithArchiveFlag';
import ModelFactoryContactGroupSummary          from '@/repositories/modelFactories/contact/ModelFactoryContactGroupSummary';
import ModelFactoryContactGroupExtended         from '@/repositories/modelFactories/contact/ModelFactoryContactGroupExtended';

export default class ContactGroupRepositoryFactory {

    //
    // create a Contact Group Repository using the generic base repository class
    //  this repository supports getting of a contact group, but not updating it
    public static getRepository(): GenericApiRepository<ContactGroupSummaryModel, ContactGroupExtendedModel, ListFilterWithArchiveFlag> {
        const repository = new GenericApiRepository<ContactGroupSummaryModel, ContactGroupExtendedModel, ListFilterWithArchiveFlag>(
            'api/contact/group',
            new ModelFactoryContactGroupSummary(),
            new ModelFactoryContactGroupExtended());
        return repository;
    }
}
