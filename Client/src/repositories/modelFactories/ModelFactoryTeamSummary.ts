import { IModelFactory }                       from './interfaces/IModelFactory';
import TeamSummaryModel                         from '../models/team/TeamSummaryModel';

export default class ModelFactoryTeamSummary implements
    IModelFactory<TeamSummaryModel> {

    public create(): TeamSummaryModel {
        return new TeamSummaryModel();
    }
}
