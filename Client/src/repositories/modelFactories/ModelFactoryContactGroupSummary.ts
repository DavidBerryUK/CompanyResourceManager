import { IModelFactory }                        from './interfaces/IModelFactory';
import ContactGroupSummaryModel                 from '../models/contactGroup/ContactGroupSummaryModel';
import ModelFactoryBase                         from './base/ModelFactoryBase';

export default class ModelFactoryContactGroupSummary
    extends ModelFactoryBase<ContactGroupSummaryModel>
    implements IModelFactory<ContactGroupSummaryModel> {

    public create(): ContactGroupSummaryModel {
        return new ContactGroupSummaryModel();
    }
}
