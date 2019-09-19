using System;
using System.Threading.Tasks;
using CRM.Models.Database.Skills;
using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.Lists;
using CRM.Service.Repository.BaseServices.Interface;

namespace CRM.Service.Repository.SkillServices.Interfaces
{
    public interface ISkillListService : IBaseListService<Skill, PersonSkill, Guid>
    {
        Task<BaseCollectionResponse<ListItem>> GetAllWithSelectionForPerson(Guid personId);

        Task<BaseCollectionResponse<ListItem>> GetSelectedForPerson(Guid personId);

        Task<BaseCollectionResponse<ListItem>> GetUnSelectedForPerson(Guid personId);

        Task Update(Guid skillId, Guid personId, bool selected);
    }
}