import { IModelFactory }                        from './interfaces/IModelFactory';
import PersonExtendedModel                      from '@/repositories/models/person/PersonExtendedModel';
import ModelFactoryBase                         from './base/ModelFactoryBase';


export default class ModelFactoryPersonExtended
    extends ModelFactoryBase<PersonExtendedModel>
    implements IModelFactory<PersonExtendedModel> {

    public create(): PersonExtendedModel {
        return new PersonExtendedModel();
    }
}
