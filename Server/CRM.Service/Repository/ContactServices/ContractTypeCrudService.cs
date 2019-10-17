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
    public class ContactTypeCrudService : BaseExtendedCrudService<ContactType, ContactTypeSummary, ContactTypeExtended, Guid>,
        IContactTypeCrudService
    {
        public ContactTypeCrudService(CrmDatabaseContext dbContext, IMapper mapper) : base(dbContext, mapper)
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

        public override IQueryable<ContactType> QueryExtendedInclude(IQueryable<ContactType> query)
        {
            return query = query.Include(inc => inc.NavContactValidation);
        }
    }
}