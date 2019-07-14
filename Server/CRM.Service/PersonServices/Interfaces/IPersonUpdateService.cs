using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.Person;
using System;
using System.Threading.Tasks;

namespace CRM.Service.PersonServices.Interfaces
{
    public interface IPersonUpdateService
    {
        Task<BaseItemResponse<PersonExtended>> Create(PersonExtended person);
        Task<BaseItemResponse<PersonExtended>> Update(Guid personId, PersonExtended person);
        Task<BaseItemResponse<PersonSummary>> Activate(Guid personId);
        Task<BaseItemResponse<PersonSummary>> Deactivate(Guid personId);
    }
}