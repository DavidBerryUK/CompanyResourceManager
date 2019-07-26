using System;
using CRM.Models.Database.Skills;
using CRM.Models.Rest.Skill;
using CRM.Service.Repository.BaseCrudService.Interface;

namespace CRM.Service.Repository.SkillServices.Interfaces
{
    public interface ISkillCrudService : IBaseCrudService<Skill ,SkillSummary, SkillExtended, Guid>
    {
    }
}
