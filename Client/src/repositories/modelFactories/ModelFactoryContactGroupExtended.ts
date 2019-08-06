import { IModelFactory }                        from './interfaces/IModelFactory';
import ContactGroupExtendedModel                from '../models/contactGroup/ContactGroupExtendedModel';

export default class ModelFactoryContactGroupExtended implements
    IModelFactory<ContactGroupExtendedModel> {

    public create(): ContactGroupExtendedModel {
        return new ContactGroupExtendedModel();
    }
}
