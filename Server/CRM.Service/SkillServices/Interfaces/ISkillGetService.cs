using System;
using System.Threading.Tasks;
using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.Lists;
using CRM.Models.Rest.Skill;

namespace CRM.Service.SkillServices.Interfaces
{
    public interface ISkillGetService
    {
        Task<BaseCollectionResponse<SkillSummary>> GetAllAsync();
        Task<BaseCollectionResponse<SkillSummary>> GetFilteredAsync(SkillFilteredListRequest filter);
        Task<BaseCollectionResponse<ListItem>> GetListItemsAsync();
        Task<BaseItemResponse<SkillExtended>> GetByIdAsync(Guid skillId);
    }
}