using AutoMapper;
using CRM.Database.Context;
using CRM.Models.Database.Skills;
using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.Lists;
using CRM.Service.Repository.BaseServices;
using CRM.Service.Repository.BaseServices.DirectSql;
using CRM.Service.Repository.SkillServices.Interfaces;
using System;
using System.Threading.Tasks;

namespace CRM.Service.Repository.SkillServices
{
    public class SkillListService : BaseListService<Skill, PersonSkill, Guid>, ISkillListService
    {
        public SkillListService(
            IDirectSqlServices<Guid> directSqlServices, 
            IMapper mapper,
            CrmDatabaseContext dbContext) :
            base(
                dbContext, 
                mapper,
                directSqlServices)
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

        public async Task Update(Guid skillId, Guid personId, bool selected)
        {
            await Update(
                key1 => key1.SkillId,
                key2 => key2.PersonId,
                skillId,
                personId,
                selected
            );
        }
    }
}