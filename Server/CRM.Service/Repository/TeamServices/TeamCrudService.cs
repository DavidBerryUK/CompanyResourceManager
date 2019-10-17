using AutoMapper;
using CRM.Database.Context;
using CRM.Models.Database.Teams;
using CRM.Models.Rest.Team;
using CRM.Service.Repository.BaseServices;
using CRM.Service.Repository.TeamServices.Interfaces;
using System;
using System.Linq;

namespace CRM.Service.Repository.TeamServices
{
    public class TeamExtendedCrudService : BaseExtendedCrudService<Team, TeamSummary, TeamExtended, Guid>,
        ITeamCrudService
    {
        public TeamExtendedCrudService(CrmDatabaseContext dbContext, IMapper mapper) : base(dbContext, mapper)
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