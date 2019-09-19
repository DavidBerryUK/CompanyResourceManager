﻿using System;
using System.Linq;
using CRM.Database.Context;
using CRM.Models.Database.Skills;
using CRM.Models.Rest.Skill;
using CRM.Service.Repository.BaseServices;
using CRM.Service.Repository.SkillServices.Interfaces;

namespace CRM.Service.Repository.SkillServices
{
    public class SkillExtendedCrudService : BaseExtendedCrudService<Skill, SkillSummary, SkillExtended, Guid>,
        ISkillCrudService
    {
        public SkillExtendedCrudService(CrmDatabaseContext dbContext) : base(dbContext)
        {
        }

        public override IQueryable<Skill> QueryOrder(IQueryable<Skill> query)
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