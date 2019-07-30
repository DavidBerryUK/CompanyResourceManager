import { IModelFactory }                        from './interfaces/IModelFactory';
import PersonExtendedModel                      from '@/repositories/models/person/PersonExtendedModel';


export default class ModelFactoryPersonExtended implements
    IModelFactory<PersonExtendedModel> {

    public create(): PersonExtendedModel {
        return new PersonExtendedModel();
    }
}
