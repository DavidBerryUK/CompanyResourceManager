using System;
using CRM.Models.Database.Teams;
using CRM.Models.Rest.Team;
using CRM.Service.Repository.BaseCrudService.Interface;

namespace CRM.Service.Repository.TeamServices.Interfaces
{
    public interface ITeamCrudService : IBaseCrudService<Team ,TeamSummary, TeamExtended, Guid>
    {
    }
}
