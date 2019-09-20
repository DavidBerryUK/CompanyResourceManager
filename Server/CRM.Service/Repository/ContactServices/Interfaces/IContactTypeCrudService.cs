using CRM.Models.Database.Contacts;
using CRM.Models.Rest.Contacts;
using CRM.Service.Repository.BaseServices.Interface;
using System;

namespace CRM.Service.Repository.ContactServices.Interfaces
{
    public interface IContactTypeCrudService : IBaseExtendedCrudService<ContactType, ContactTypeSummary, ContactTypeExtended, Guid>
    {
    }
}