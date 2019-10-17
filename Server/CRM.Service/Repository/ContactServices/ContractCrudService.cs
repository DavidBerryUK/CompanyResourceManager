using AutoMapper;
using CRM.Database.Context;
using CRM.Models.Database.Contacts;
using CRM.Models.Rest.Contacts;
using CRM.Service.Repository.BaseServices;
using CRM.Service.Repository.ContactServices.Interfaces;
using System;

namespace CRM.Service.Repository.ContactServices
{
    public class ContactCrudService : BaseCrudService<Contact, ContactSummary, Guid>, IContactCrudService
    {
        public ContactCrudService(CrmDatabaseContext dbContext, IMapper mapper) : base(dbContext, mapper)
        {
        }


        public override Guid CreateNewPrimaryKey()
        {
            return Guid.NewGuid();
        }
    }
}