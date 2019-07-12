using System;
using System.Threading.Tasks;
using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.People.Request;
using CRM.Models.Rest.People.Response;

namespace CRM.Service.PeopleServices.Interfaces
{
    public interface IPeopleGetService
    {
        Task<BaseCollectionResponse<PersonSummary>> GetAllAsync();

        Task<BaseCollectionResponse<PersonSummary>> GetFilteredAsync(PersonFilteredListRequest filter);

        Task<BaseItemResponse<PersonExtended>> GetByIdAsync(Guid personId);

        Task<BaseCollectionResponse<PersonSummary>> GetPeopleWithJobRole(Guid jobRoleId);
    }
}