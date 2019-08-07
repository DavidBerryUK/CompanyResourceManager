import { IModelFactory }                        from '../interfaces/IModelFactory';
import TeamSummaryModel                         from '../../models/team/TeamSummaryModel';
import ModelFactoryBase                         from '../base/ModelFactoryBase';

export default class ModelFactoryTeamSummary
    extends ModelFactoryBase<TeamSummaryModel>
    implements IModelFactory<TeamSummaryModel> {

    public create(): TeamSummaryModel {
        return new TeamSummaryModel();
    }
}
