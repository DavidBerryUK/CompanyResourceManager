using System;
using System.Linq;
using CRM.Database.Context;
using CRM.Models.Database.Teams;
using CRM.Models.Rest.Team;
using CRM.Service.Repository.BaseServices;
using CRM.Service.Repository.TeamServices.Interfaces;

namespace CRM.Service.Repository.TeamServices
{
    public class TeamExtendedCrudService : BaseExtendedCrudService<Team, TeamSummary, TeamExtended, Guid>,
        ITeamCrudService
    {
        public TeamExtendedCrudService(CrmDatabaseContext dbContext) : base(dbContext)
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