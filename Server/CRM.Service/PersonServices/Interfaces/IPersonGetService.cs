using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.Person;
using System;
using System.Threading.Tasks;

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