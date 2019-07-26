import { IModelFactory }                       from './interfaces/IModelFactory';
import TeamExtendedModel                        from '../models/team/TeamExtendedModel';


export default class ModelFactoryTeamExtended implements
    IModelFactory<TeamExtendedModel> {

    public create(): TeamExtendedModel {
        return new TeamExtendedModel();
    }
}
