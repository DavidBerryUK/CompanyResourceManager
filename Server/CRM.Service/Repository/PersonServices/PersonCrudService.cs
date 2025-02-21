﻿using AutoMapper;
using CRM.Database.Context;
using CRM.Models.Database.Persons;
using CRM.Models.Rest.Person;
using CRM.Service.Repository.BaseServices;
using CRM.Service.Repository.PersonServices.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;

namespace CRM.Service.Repository.PersonServices
{
    public class PersonExtendedCrudService : BaseExtendedCrudService<Person, PersonSummary, PersonExtended, Guid>,
        IPersonCrudService
    {
        public PersonExtendedCrudService(CrmDatabaseContext dbContext, IMapper mapper) : base(dbContext, mapper)
        {
        }

        public override IQueryable<Person> QueryOrder(IQueryable<Person> query)
        {
            return query
                .OrderBy(order => order.Surname)
                .ThenBy(order => order.Forename);
        }

        public override IQueryable<Person> QuerySummaryInclude(IQueryable<Person> query)
        {
            return query
                .Include(include => include.NavJobRole);
        }

        public override IQueryable<Person> QueryExtendedInclude(IQueryable<Person> query)
        {
            return query
                .Include(include => include.NavJobRole);
        }

        public override Guid CreateNewPrimaryKey()
        {
            return Guid.NewGuid();
        }
    }
}