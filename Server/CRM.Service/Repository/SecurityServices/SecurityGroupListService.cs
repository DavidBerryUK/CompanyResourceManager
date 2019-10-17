using AutoMapper;
using CRM.Database.Context;
using CRM.Models.Database.Security;
using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.Lists;
using CRM.Service.Repository.BaseServices;
using CRM.Service.Repository.BaseServices.DirectSql;
using CRM.Service.Repository.SecurityServices.Interfaces;
using System;
using System.Threading.Tasks;

namespace CRM.Service.Repository.SecurityServices
{
    public class SecurityGroupListService : BaseListService<SecurityGroup, SecurityGroupPerson, Guid>,
        ISecurityGroupListService
    {
        public SecurityGroupListService(
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
                key => key.SecurityGroupId,
                join => join.SecurityGroupId,
                text => text.Name,
                filter => filter.PersonId,
                personId
            );

            return response;
        }

        public async Task<BaseCollectionResponse<ListItem>> GetSelectedForPerson(Guid personId)
        {
            var response = await GetSelectedOnly(
                key => key.SecurityGroupId,
                join => join.SecurityGroupId,
                text => text.Name,
                filter => filter.PersonId,
                personId
            );

            return response;
        }

        public async Task<BaseCollectionResponse<ListItem>> GetUnSelectedForPerson(Guid personId)
        {
            var response = await GetUnSelectedOnly(
                key => key.SecurityGroupId,
                join => join.SecurityGroupId,
                text => text.Name,
                filter => filter.PersonId,
                personId
            );

            return response;
        }

        public async Task Update(Guid securityGroupId, Guid personId, bool selected)
        {
            await Update(
                key1 => key1.SecurityGroupId,
                key2 => key2.PersonId,
                securityGroupId,
                personId,
                selected
            );
        }
    }
}