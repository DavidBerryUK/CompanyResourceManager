using CRM.Database.Context;
using CRM.Models.Database.Teams;
using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.Lists;
using CRM.Service.Repository.BaseServices;
using CRM.Service.Repository.BaseServices.DirectSql;
using CRM.Service.Repository.TeamServices.Interfaces;
using System;
using System.Threading.Tasks;

namespace CRM.Service.Repository.TeamServices
{
    public class TeamListService : BaseListService<Team,PersonTeam,Guid>, ITeamListService
    {

        public TeamListService(IDirectSqlServices<Guid> directSqlServices, CrmDatabaseContext dbContext) : base(dbContext, directSqlServices)
        {

        }

        public async Task<BaseCollectionResponse<ListItem>> GetAllWithSelectionForPerson(Guid personId)
        {
            var response = await GetAllWithSelection(
                key => key.TeamId,
                join => join.TeamId,
                text => text.Name,
                filter => filter.PersonId,
                personId
            );

            return response;
        }

        public async Task<BaseCollectionResponse<ListItem>> GetSelectedForPerson(Guid personId)
        {
            var response = await GetSelectedOnly(
                key => key.TeamId,
                join => join.TeamId,
                text => text.Name,
                filter => filter.PersonId,
                personId
            );

            return response;
        }

        public async Task<BaseCollectionResponse<ListItem>> GetUnSelectedForPerson(Guid personId)
        {
            var response = await GetUnSelectedOnly(
                key => key.TeamId,
                join => join.TeamId,
                text => text.Name,
                filter => filter.PersonId,
                personId
            );

            return response;
        }

        public async Task Update(Guid teamId, Guid personId, bool selected)
        {
            await Update(
                key1 => key1.TeamId,
                key2 => key2.PersonId,
                teamId,
                personId,
                selected
            );

            return;
        }

    }
}
