using AutoMapper;
using CRM.Database.Context;
using CRM.Models.Database.Contacts;
using CRM.Models.Rest.Contacts;
using CRM.Service.Repository.BaseServices;
using CRM.Service.Repository.ContactServices.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;

namespace CRM.Service.Repository.ContactServices
{
    public class ContactGroupCrudService : BaseCrudService<ContactGroup, ContactGroupSummary, Guid>,
        IContactGroupCrudService
    {
        public ContactGroupCrudService(CrmDatabaseContext dbContext, IMapper mapper) : base(dbContext, mapper)
        {
        }

        public override IQueryable<ContactGroup> QuerySummaryInclude(IQueryable<ContactGroup> query)
        {
            return query
                .Include(inc => inc.NavContacts)
                .ThenInclude(inc => inc.NavContactType);
        }

        public override Guid CreateNewPrimaryKey()
        {
            return Guid.NewGuid();
        }
    }
}