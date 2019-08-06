import { IModelFactory }                        from './interfaces/IModelFactory';
import ContactGroupExtendedModel                from '../models/contactGroup/ContactGroupExtendedModel';
import ModelFactoryBase                         from './base/ModelFactoryBase';

export default class ModelFactoryContactGroupExtended
    extends ModelFactoryBase<ContactGroupExtendedModel>
    implements IModelFactory<ContactGroupExtendedModel> {

    public create(): ContactGroupExtendedModel {
        return new ContactGroupExtendedModel();
    }
}
