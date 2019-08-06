import { IModelFactory }                        from './interfaces/IModelFactory';
import ContactGroupSummaryModel                 from '../models/contactGroup/ContactGroupSummaryModel';

export default class ModelFactoryContactGroupSummary implements
    IModelFactory<ContactGroupSummaryModel> {

    public create(): ContactGroupSummaryModel {
        return new ContactGroupSummaryModel();
    }
}
