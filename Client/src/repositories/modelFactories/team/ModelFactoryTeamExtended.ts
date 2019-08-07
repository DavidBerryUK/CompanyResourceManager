import { IModelFactory }                        from '../interfaces/IModelFactory';
import TeamExtendedModel                        from '../../models/team/TeamExtendedModel';
import ModelFactoryBase                         from '../base/ModelFactoryBase';

export default class ModelFactoryTeamExtended
    extends ModelFactoryBase<TeamExtendedModel>
    implements IModelFactory<TeamExtendedModel> {

    public create(): TeamExtendedModel {
        return new TeamExtendedModel();
    }
}
