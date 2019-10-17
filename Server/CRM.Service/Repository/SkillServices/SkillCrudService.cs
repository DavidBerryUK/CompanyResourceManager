using AutoMapper;
using CRM.Database.Context;
using CRM.Models.Database.Skills;
using CRM.Models.Rest.Skill;
using CRM.Service.Repository.BaseServices;
using CRM.Service.Repository.SkillServices.Interfaces;
using System;
using System.Linq;

namespace CRM.Service.Repository.SkillServices
{
    public class SkillExtendedCrudService : BaseExtendedCrudService<Skill, SkillSummary, SkillExtended, Guid>,
        ISkillCrudService
    {
        public SkillExtendedCrudService(CrmDatabaseContext dbContext, IMapper mapper) : base(dbContext, mapper)
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