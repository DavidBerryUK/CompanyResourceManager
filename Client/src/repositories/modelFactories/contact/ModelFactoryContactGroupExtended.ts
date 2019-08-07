import { IModelFactory }                        from '../interfaces/IModelFactory';
import ContactGroupExtendedModel                from '../../models/contactGroup/ContactGroupExtendedModel';
import ModelFactoryBase                         from '../base/ModelFactoryBase';
import ModelFactoryContactExtended              from '@/repositories/modelFactories/contact/ModelFactoryContactExtended';

export default class ModelFactoryContactGroupExtended
    extends ModelFactoryBase<ContactGroupExtendedModel>
    implements IModelFactory<ContactGroupExtendedModel> {

    public create(): ContactGroupExtendedModel {
        return new ContactGroupExtendedModel();
    }

    public createFrom(obj: any): ContactGroupExtendedModel {

        const result = this.MapItem(obj);

        // map contacts
        if (obj.contacts !== undefined && Array.isArray(obj.contacts)) {
            result.contacts = new ModelFactoryContactExtended()
                .createArrayFrom(obj.contacts);
        }
        return result;
    }
}
