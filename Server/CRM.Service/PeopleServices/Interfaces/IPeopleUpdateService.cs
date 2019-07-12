using System;
using System.Threading.Tasks;
using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.People.Response;

namespace CRM.Service.PeopleServices.Interfaces
{
    public interface IPeopleUpdateService
    {
        Task<BaseItemResponse<PersonExtended>> Create(PersonExtended person);
        Task<BaseItemResponse<PersonExtended>> Update(Guid personId, PersonExtended person);
        Task<BaseItemResponse<PersonSummary>> Activate(Guid personId);
        Task<BaseItemResponse<PersonSummary>> Deactivate(Guid personId);
    }
}