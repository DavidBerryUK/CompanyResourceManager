using CRM.Models.Rest.BaseResponse;
using System;
using System.Threading.Tasks;
using CRM.Models.Rest.Skill;

namespace CRM.Service.JobRoleServices.Interfaces
{
    public interface ISkillUpdateService
    {
        Task<BaseItemResponse<SkillExtended>> Create(SkillExtended skill);
        Task<BaseItemResponse<SkillExtended>> Update(Guid skillId, SkillExtended skill);
        Task<BaseItemResponse<SkillSummary>> Activate(Guid skillId);
        Task<BaseItemResponse<SkillSummary>> Deactivate(Guid skillId);
    }
}