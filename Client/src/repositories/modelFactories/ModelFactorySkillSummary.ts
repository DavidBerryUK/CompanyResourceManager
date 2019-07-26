import { IModelFactory }                       from './interfaces/IModelFactory';
import SkillSummaryModel                        from '../models/skill/SkillSummaryModel';

export default class ModelFactorySkillSummary implements
    IModelFactory<SkillSummaryModel> {

    public create(): SkillSummaryModel {
        return new SkillSummaryModel();
    }
}
