import { IModelFactory }                        from '../interfaces/IModelFactory';
import SkillSummaryModel                        from '../../models/skill/SkillSummaryModel';
import ModelFactoryBase                         from '../base/ModelFactoryBase';

export default class ModelFactorySkillSummary
    extends ModelFactoryBase<SkillSummaryModel>
    implements IModelFactory<SkillSummaryModel> {

    public create(): SkillSummaryModel {
        return new SkillSummaryModel();
    }
}
