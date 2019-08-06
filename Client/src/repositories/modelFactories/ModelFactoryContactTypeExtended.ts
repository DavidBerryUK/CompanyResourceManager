import { IModelFactory }                        from './interfaces/IModelFactory';
import ContactTypeExtendedModel                 from '../models/contactType/ContactTypeExtendedModel';
import ModelFactoryBase                         from './base/ModelFactoryBase';

export default class ModelFactoryContactTypeExtended
    extends ModelFactoryBase<ContactTypeExtendedModel>
    implements IModelFactory<ContactTypeExtendedModel> {

    public create(): ContactTypeExtendedModel {
        return new ContactTypeExtendedModel();
    }
}
