import SkillSummaryModel                      from './SkillSummaryModel';

export default class SkillExtendedModel extends SkillSummaryModel {

    public static className = 'SkillExtendedModel';

    public get entityName(): string {
        return SkillExtendedModel.className;
    }
}
