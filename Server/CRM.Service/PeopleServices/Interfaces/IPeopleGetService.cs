using System;
using System.Threading.Tasks;
using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.People.Request;
using CRM.Models.Rest.People.Response;

namespace CRM.Service.PeopleServices.Interfaces
{
    public interface IPeopleGetService
    {
        Task<BaseCollectionResponse<PersonExtended>> GetAllAsync();

        Task<BaseCollectionResponse<PersonExtended>> GetFilteredAsync(PersonFilteredListRequest filter);

        Task<BaseItemResponse<PersonExtended>> GetByIdAsync(Guid personId);

        Task<BaseCollectionResponse<PersonExtended>> GetPeopleWithJobRole(Guid jobRoleId);
    }
}