using System;
using System.Threading.Tasks;
using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.Person;

namespace CRM.Service.Repository.PersonServices.Interfaces
{
    public interface IPersonSimpleQueryService
    {
        Task<BaseCollectionResponse<PersonSummary>> GetWithFilterAsync(Guid? jobRoleId = null, Guid? skillId = null);
    }
}