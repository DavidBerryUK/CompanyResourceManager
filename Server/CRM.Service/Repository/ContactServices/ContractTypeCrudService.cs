using CRM.Database.Context;
using CRM.Models.Database.Contacts;
using CRM.Models.Rest.Contacts;
using CRM.Service.Repository.BaseServices;
using CRM.Service.Repository.ContactServices.Interfaces;
using System;
using System.Linq;

namespace CRM.Service.Repository.ContactServices
{
    public class ContactTypeCrudService : BaseCrudService<ContactType, ContactTypeSummary, Guid>,
        IContactTypeCrudService
    {
        public ContactTypeCrudService(CrmDatabaseContext dbContext) : base(dbContext)
        {
        }

        public override IQueryable<ContactType> QueryOrder(IQueryable<ContactType> query)
        {
            return query
                .OrderBy(order => order.Name);
        }

        public override Guid CreateNewPrimaryKey()
        {
            return Guid.NewGuid();
        }
    }
}