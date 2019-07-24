import { IEntityFactory }                       from './interfaces/IEntityFactory';
import SkillSummaryModel                        from '../models/skill/SkillSummaryModel';

export default class EntityFactorySkillSummary implements
    IEntityFactory<SkillSummaryModel> {

    public create(): SkillSummaryModel {
        return new SkillSummaryModel();
    }
}
