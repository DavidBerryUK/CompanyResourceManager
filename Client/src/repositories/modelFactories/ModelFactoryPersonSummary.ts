import { IModelFactory }                       from './interfaces/IModelFactory';
import PersonSummaryModel                       from '@/repositories/models/person/PersonSummaryModel';

export default class ModelFactoryPersonSummary implements
    IModelFactory<PersonSummaryModel> {

    public create(): PersonSummaryModel {
        return new PersonSummaryModel();
    }
}
