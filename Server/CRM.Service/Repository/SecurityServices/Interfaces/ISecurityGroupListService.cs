using CRM.Models.Database.Security;
using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.Lists;
using CRM.Service.Repository.BaseServices.Interface;
using System;
using System.Threading.Tasks;

namespace CRM.Service.Repository.SecurityServices.Interfaces
{
    public interface ISecurityGroupListService : IBaseListService<SecurityGroup, SecurityGroupPerson, Guid>
    {
        Task<BaseCollectionResponse<ListItem>> GetAllWithSelectionForPerson(Guid personId);

        Task<BaseCollectionResponse<ListItem>> GetSelectedForPerson(Guid personId);

        Task<BaseCollectionResponse<ListItem>> GetUnSelectedForPerson(Guid personId);

        Task Update(Guid skillId, Guid personId, bool selected);
    }
}