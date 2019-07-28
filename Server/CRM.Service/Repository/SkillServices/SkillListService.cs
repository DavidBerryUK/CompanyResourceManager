using CRM.Database.Context;
using CRM.Models.Database.Skills;
using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.Lists;
using CRM.Service.Repository.BaseServices;
using CRM.Service.Repository.SkillServices.Interfaces;
using System;
using System.Threading.Tasks;

namespace CRM.Service.Repository.SkillServices
{
    public class SkillListService : BaseListService<Skill,PersonSkill,Guid>, ISkillListService
    {

        public SkillListService(CrmDatabaseContext dbContext) : base(dbContext)
        {

        }

        public async Task<BaseCollectionResponse<ListItem>> GetAllWithSelectionForPerson(Guid personId)
        {
            var response = await GetAllWithSelection(
                key => key.SkillId,
                join => join.SkillId,
                text => text.Name,
                filter => filter.PersonId,
                personId
            );

            return response;
        }

        public async Task<BaseCollectionResponse<ListItem>> GetSelectedForPerson(Guid personId)
        {
            var response = await GetSelectedOnly(
                key => key.SkillId,
                join => join.SkillId,
                text => text.Name,
                filter => filter.PersonId,
                personId
            );

            return response;
        }

        public async Task<BaseCollectionResponse<ListItem>> GetUnSelectedForPerson(Guid personId)
        {
            var response = await GetUnSelectedOnly(
                key => key.SkillId,
                join => join.SkillId,
                text => text.Name,
                filter => filter.PersonId,
                personId
            );

            return response;
        }
    }
}
