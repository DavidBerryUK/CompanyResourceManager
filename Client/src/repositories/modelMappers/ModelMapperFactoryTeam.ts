import { IModelGenericMapper }                  from './interfaces/IModelGenericMapper';
import ModelFactoryTeamExtended                from '../modelFactories/ModelFactoryTeamExtended';
import ModelFactoryTeamSummary                 from '../modelFactories/ModelFactoryTeamSummary';
import ModelGenericMapper                       from './generic/ModelGenericMapper';
import TeamExtendedModel                        from '../models/team/TeamExtendedModel';
import TeamSummaryModel                         from '../models/team/TeamSummaryModel';

export default class ModelMapperFactoryTeam {

    public static createSummaryMapper(): IModelGenericMapper<TeamSummaryModel> {
        return new ModelGenericMapper<TeamSummaryModel> (
            new ModelFactoryTeamSummary());
    }

    public static createExtendedMapper(): IModelGenericMapper<TeamExtendedModel> {
        return new ModelGenericMapper<TeamExtendedModel> (
            new ModelFactoryTeamExtended());
    }
}
