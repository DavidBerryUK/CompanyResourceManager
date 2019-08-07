import GenericApiRepository                     from '@/repositories/apiBase/GenericApiRepository';
import ListFilterWithArchiveFlag                from '@/repositories/models/listFilter/ListFilterWithArchiveFlag';
import ModelFactoryTeamExtended                 from '@/repositories/modelFactories/team/ModelFactoryTeamExtended';
import ModelFactoryTeamSummary                  from '@/repositories/modelFactories/team/ModelFactoryTeamSummary';
import TeamExtendedModel                        from '@/repositories/models/team/TeamExtendedModel';
import TeamSummaryModel                         from '@/repositories/models/team/TeamSummaryModel';

export default class TeamRepositoryFactory {

    //
    // create a Team Repository using the generic base repository class
    //  this repository supports all the basic CRUD operations as well
    //  as providing a filtered object list ( providing the server supports the functionality )
    public static getRepository(): GenericApiRepository<TeamSummaryModel, TeamExtendedModel, ListFilterWithArchiveFlag> {
        const repository = new GenericApiRepository<TeamSummaryModel, TeamExtendedModel, ListFilterWithArchiveFlag>(
            'api/team',
            new ModelFactoryTeamSummary(),
            new ModelFactoryTeamExtended());
        return repository;
    }
}
