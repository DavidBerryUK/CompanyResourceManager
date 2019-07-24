import { IEntityFactory }                       from './interfaces/IEntityFactory';
import SkillExtendedModel                        from '../models/skill/SkillExtendedModel';

export default class EntityFactorySkillExtended implements
    IEntityFactory<SkillExtendedModel> {

    public create(): SkillExtendedModel {
        return new SkillExtendedModel();
    }
}
