using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.Person;
using System;
using System.Threading.Tasks;

namespace CRM.Service.PersonServices.Interfaces
{
    public interface IPersonSimpleQueryService
    {
        Task<BaseCollectionResponse<PersonSummary>> GetWithFilterAsync(Guid? jobRoleId = null, Guid? skillId = null);
    }
}