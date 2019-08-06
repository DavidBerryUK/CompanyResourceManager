import ContactExtendedModel                     from '@/repositories/models/contact/ContactExtendedModel';
import { IModelFactory }                        from './interfaces/IModelFactory';
import ModelFactoryBase                         from './base/ModelFactoryBase';


export default class ModelFactoryContactExtended
    extends ModelFactoryBase<ContactExtendedModel>
    implements IModelFactory<ContactExtendedModel> {

    public create(): ContactExtendedModel {
        return new ContactExtendedModel();
    }
}
