import { IModelFactory }                        from '../interfaces/IModelFactory';
import ContactGroupSummaryModel                 from '../../models/contactGroup/ContactGroupSummaryModel';
import ModelFactoryBase                         from '../base/ModelFactoryBase';
import ModelFactoryContactSummary               from './ModelFactoryContactSummary';

export default class ModelFactoryContactGroupSummary
    extends ModelFactoryBase<ContactGroupSummaryModel>
    implements IModelFactory<ContactGroupSummaryModel> {

    public create(): ContactGroupSummaryModel {
        return new ContactGroupSummaryModel();
    }

    public createFrom(obj: any): ContactGroupSummaryModel {

        const result = this.MapItem(obj);

        // map contacts
        if (obj.contacts !== undefined && Array.isArray(obj.contacts)) {
            result.contacts = new ModelFactoryContactSummary()
                .createArrayFrom(obj.contacts);
        }
        return result;
    }
}
