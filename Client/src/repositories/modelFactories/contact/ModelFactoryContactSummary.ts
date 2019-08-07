import { IModelFactory }                        from '../interfaces/IModelFactory';
import ContactSummaryModel                      from '@/repositories/models/contact/ContactSummaryModel';
import ModelFactoryBase                         from '../base/ModelFactoryBase';

export default class ModelFactoryContactSummary
    extends ModelFactoryBase<ContactSummaryModel>
    implements IModelFactory<ContactSummaryModel> {

    public create(): ContactSummaryModel {
        return new ContactSummaryModel();
    }
}
