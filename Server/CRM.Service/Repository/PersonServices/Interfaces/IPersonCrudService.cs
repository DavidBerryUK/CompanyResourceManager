using System;
using CRM.Models.Database.Persons;
using CRM.Models.Rest.Person;
using CRM.Service.Repository.BaseCrudService.Interface;

namespace CRM.Service.Repository.PersonServices.Interfaces
{
    public interface IPersonCrudService : IBaseCrudService<Person,PersonSummary, PersonExtended, Guid>
    {
    }
}
