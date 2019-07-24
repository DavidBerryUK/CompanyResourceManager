import { IEntityFactory }                       from './interfaces/IEntityFactory';
import PersonSummaryModel                       from '@/repositories/models/person/PersonSummaryModel';

export default class EntityFactoryPersonSummary implements
    IEntityFactory<PersonSummaryModel> {

    public create(): PersonSummaryModel {
        return new PersonSummaryModel();
    }
}
