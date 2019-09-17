import { IModelFactory }                        from '../interfaces/IModelFactory';
import ContactValidationSummaryModel            from '@/repositories/models/contactValidation/ContactValidationSummaryModel';
import ModelFactoryBase                         from '../base/ModelFactoryBase';

export default class ModelFactoryContactValidationSummary
    extends ModelFactoryBase<ContactValidationSummaryModel>
    implements IModelFactory<ContactValidationSummaryModel> {

    public create(): ContactValidationSummaryModel {
        return new ContactValidationSummaryModel();
    }
}
