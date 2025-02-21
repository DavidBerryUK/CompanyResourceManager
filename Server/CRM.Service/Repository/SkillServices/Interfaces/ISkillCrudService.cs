﻿using System;
using CRM.Models.Database.Skills;
using CRM.Models.Rest.Skill;
using CRM.Service.Repository.BaseServices.Interface;

namespace CRM.Service.Repository.SkillServices.Interfaces
{
    public interface ISkillCrudService : IBaseExtendedCrudService<Skill, SkillSummary, SkillExtended, Guid>
    {
    }
}