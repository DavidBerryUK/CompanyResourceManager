﻿using System;
using CRM.Models.Database.Teams;
using CRM.Models.Rest.Team;
using CRM.Service.Repository.BaseServices.Interface;

namespace CRM.Service.Repository.TeamServices.Interfaces
{
    public interface ITeamCrudService : IBaseExtendedCrudService<Team, TeamSummary, TeamExtended, Guid>
    {
    }
}