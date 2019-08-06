import { IModelFactory }                        from './interfaces/IModelFactory';
import ContactTypeSummaryModel                  from '../models/contactType/ContactTypeSummaryModel';
import ModelFactoryBase                         from './base/ModelFactoryBase';

export default class ModelFactoryContactTypeSummary
    extends ModelFactoryBase<ContactTypeSummaryModel>
    implements IModelFactory<ContactTypeSummaryModel> {

    public create(): ContactTypeSummaryModel {
        return new ContactTypeSummaryModel();
    }
}
