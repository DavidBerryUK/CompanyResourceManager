import { IEntityFactory }                       from './interfaces/IEntityFactory';
import PersonExtendedModel                      from '@/repositories/models/person/PersonExtendedModel';


export default class EntityFactoryPersonExtended implements
    IEntityFactory<PersonExtendedModel> {

    public create(): PersonExtendedModel {
        return new PersonExtendedModel();
    }
}
