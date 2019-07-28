using CRM.Database.Context;
using CRM.Models.Database.Skills;
using CRM.Models.Rest.Skill;
using CRM.Service.Repository.BaseServices;
using CRM.Service.Repository.SkillServices.Interfaces;
using System;
using System.Linq;

namespace CRM.Service.Repository.SkillServices
{
    public class SkillCrudService : BaseCrudService<Skill, SkillSummary, SkillExtended, Guid>, ISkillCrudService
    {
        public SkillCrudService(CrmDatabaseContext dbContext) : base(dbContext)
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