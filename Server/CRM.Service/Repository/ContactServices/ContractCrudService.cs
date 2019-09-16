using System;
using CRM.Database.Context;
using CRM.Models.Database.Contacts;
using CRM.Models.Rest.Contacts;
using CRM.Service.Repository.BaseServices;
using CRM.Service.Repository.ContactServices.Interfaces;

namespace CRM.Service.Repository.ContactServices
{
    public class ContactCrudService : BaseCrudService<Contact,  ContactSummary, Guid>, IContactCrudService
    {
        public ContactCrudService(CrmDatabaseContext dbContext) : base(dbContext)
        {
        }


        public override Guid CreateNewPrimaryKey()
        {
            return Guid.NewGuid();
        }
    }
}