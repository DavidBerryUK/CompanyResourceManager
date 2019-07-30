import { IModelFactory }                        from './interfaces/IModelFactory';
import SkillExtendedModel                        from '../models/skill/SkillExtendedModel';

export default class ModelFactorySkillExtended implements
    IModelFactory<SkillExtendedModel> {

    public create(): SkillExtendedModel {
        return new SkillExtendedModel();
    }
}
