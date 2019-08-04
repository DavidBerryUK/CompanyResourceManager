import { IModelFactory }                        from './interfaces/IModelFactory';
import ContactTypeSummaryModel                  from '../models/contactType/ContactTypeSummaryModel';

export default class ModelFactoryContactTypeSummary implements
    IModelFactory<ContactTypeSummaryModel> {

    public create(): ContactTypeSummaryModel {
        return new ContactTypeSummaryModel();
    }
}
