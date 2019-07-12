using System;
using System.Threading.Tasks;
using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.Person.Request;
using CRM.Models.Rest.Person.Response;

namespace CRM.Service.PersonServices.Interfaces
{
    public interface IPersonGetService
    {
        Task<BaseCollectionResponse<PersonSummary>> GetAllAsync();

        Task<BaseCollectionResponse<PersonSummary>> GetFilteredAsync(PersonFilteredListRequest filter);

        Task<BaseItemResponse<PersonExtended>> GetByIdAsync(Guid personId);

        Task<BaseCollectionResponse<PersonSummary>> GetPersonWithJobRole(Guid jobRoleId);
    }
}