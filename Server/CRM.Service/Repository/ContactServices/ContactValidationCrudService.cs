using CRM.Database.Context;
using CRM.Models.Database.Contacts;
using CRM.Models.Rest.Contacts;
using CRM.Service.Repository.BaseServices;
using CRM.Service.Repository.ContactServices.Interfaces;
using System;

namespace CRM.Service.Repository.ContactServices
{
    public class ContactValidationCrudService : BaseCrudService<ContactValidation, ContactValidationSummary, Guid>, IContactValidationCrudService
    {
        public ContactValidationCrudService(CrmDatabaseContext dbContext) : base(dbContext)
        {
        }


        public override Guid CreateNewPrimaryKey()
        {
            return Guid.NewGuid();
        }
    }
}