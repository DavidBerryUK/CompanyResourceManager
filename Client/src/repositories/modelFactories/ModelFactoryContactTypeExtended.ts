import { IModelFactory }                        from './interfaces/IModelFactory';
import ContactTypeExtendedModel                 from '../models/contactType/ContactTypeExtendedModel';

export default class ModelFactoryContactTypeExtended implements
    IModelFactory<ContactTypeExtendedModel> {

    public create(): ContactTypeExtendedModel {
        return new ContactTypeExtendedModel();
    }
}
