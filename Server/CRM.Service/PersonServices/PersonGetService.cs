﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using CRM.Database.Context;
using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.Enums;
using CRM.Models.Rest.Person;
using CRM.Service.PersonServices.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace CRM.Service.PersonServices
{
    public class PersonGetService : IPersonGetService
    {
        private readonly CrmDatabaseContext _crmDatabaseContext;

        public PersonGetService(CrmDatabaseContext crmDatabaseContext)
        {
            _crmDatabaseContext = crmDatabaseContext;
        }


        public async Task<BaseCollectionResponse<PersonSummary>> GetAllAsync()
        {
            var response = new BaseCollectionResponse<PersonSummary>();

            var data = await _crmDatabaseContext
                .Persons
                .Include(inc => inc.NavJobRole)
                .OrderBy(order=> order.Surname)
                .ThenBy(order => order.Forename)
                .ToListAsync();

            response.Items = Mapper.Map<List<PersonSummary>>(data);

            return response;
        }

        public async Task<BaseCollectionResponse<PersonSummary>> GetFilteredAsync(PersonFilteredListRequest filter)
        {
            var response = new BaseCollectionResponse<PersonSummary>();

            var query  = _crmDatabaseContext
                .Persons
                .Include(inc => inc.NavJobRole)
                .AsQueryable();

            switch (filter.RecordActiveStatusFilter)
            {
                case EnumRecordActiveStatus.Active:
                    query = query.Where(o => o.IsActive).AsQueryable();
                    break;

                case EnumRecordActiveStatus.InActive:
                    query = query.Where(o => o.IsActive == false).AsQueryable();
                    break;
            }

            query = query
                .OrderBy(order => order.Surname)
                .ThenBy(order => order.Forename);

            var data = await query.ToListAsync();

            response.Items = Mapper.Map<List<PersonSummary>>(data);

            return response;
        }

        public async Task<BaseItemResponse<PersonExtended>> GetByIdAsync(Guid personId)
        {
            var response = new BaseItemResponse<PersonExtended>();
            var data = await _crmDatabaseContext
                .Persons
                .Include(inc => inc.NavJobRole)
                .FirstOrDefaultAsync(o=> o.PersonId == personId);
            
            response.Entity = Mapper.Map<PersonExtended>(data);

            return response;
        }

        public async Task<BaseCollectionResponse<PersonSummary>> GetPersonWithJobRole(Guid jobRoleId)
        {
            var response = new BaseCollectionResponse<PersonSummary>();

            var data = await _crmDatabaseContext
                .Persons
                .Include(inc => inc.NavJobRole)
                .Where(o => o.JobRoleId == jobRoleId)
                .Where(o=> o.IsActive)
                .OrderBy(order => order.Surname)
                .ThenBy(order => order.Forename)
                .ToListAsync();

            response.Items = Mapper.Map<List<PersonSummary>>(data);

            return response;
        }
    }
}
