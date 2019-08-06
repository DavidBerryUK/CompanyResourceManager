import { IModelFactory }                        from './interfaces/IModelFactory';
import SkillExtendedModel                       from '../models/skill/SkillExtendedModel';
import ModelFactoryBase                         from './base/ModelFactoryBase';

export default class ModelFactorySkillExtended
    extends ModelFactoryBase<SkillExtendedModel>
    implements IModelFactory<SkillExtendedModel> {

    public create(): SkillExtendedModel {
        return new SkillExtendedModel();
    }
}
