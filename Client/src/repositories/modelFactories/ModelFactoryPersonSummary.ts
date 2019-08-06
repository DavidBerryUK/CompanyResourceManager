import { IModelFactory }                        from './interfaces/IModelFactory';
import PersonSummaryModel                       from '@/repositories/models/person/PersonSummaryModel';
import ModelFactoryBase                         from './base/ModelFactoryBase';

export default class ModelFactoryPersonSummary
    extends ModelFactoryBase<PersonSummaryModel>
    implements IModelFactory<PersonSummaryModel> {

    public create(): PersonSummaryModel {
        return new PersonSummaryModel();
    }
}
