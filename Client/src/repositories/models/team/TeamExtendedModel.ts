import TeamSummaryModel                         from './TeamSummaryModel';

export default class TeamExtendedModel extends TeamSummaryModel {

    public static className = 'TeamExtendedModel';

    public get entityName(): string {
        return TeamExtendedModel.className;
    }

}
