using System;
using System.Threading.Tasks;
using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.People.Response;

namespace CRM.Service.PeopleServices.Interfaces
{
    public interface IPeopleUpdateService
    {
        Task<BaseItemResponse<Person>> Create(Person person);
        Task<BaseItemResponse<Person>> Update(Guid personId, Person person);
        Task<BaseItemResponse<Person>> Activate(Guid personId);
        Task<BaseItemResponse<Person>> Deactivate(Guid personId);
    }
}