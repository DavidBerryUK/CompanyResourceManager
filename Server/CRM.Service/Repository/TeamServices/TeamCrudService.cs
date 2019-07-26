using System;
using System.Linq;
using CRM.Database.Context;
using CRM.Models.Database.Teams;
using CRM.Models.Rest.Team;
using CRM.Service.Repository.BaseCrudService;
using CRM.Service.Repository.TeamServices.Interfaces;

namespace CRM.Service.Repository.TeamServices
{
    public class TeamCrudService : BaseCrudService<Team, TeamSummary, TeamExtended, Guid>, ITeamCrudService
    {
        public TeamCrudService(CrmDatabaseContext dbContext) : base(dbContext)
        {
        }

        public override IQueryable<Team> QueryOrder(IQueryable<Team> query)
        {
            return query
                .OrderBy(order => order.Name);
        }

        
        public override Guid CreateNewPrimaryKey()
        {
            return Guid.NewGuid();
        }
    }
}