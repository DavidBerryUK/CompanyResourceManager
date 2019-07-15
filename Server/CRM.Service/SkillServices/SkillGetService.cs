using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using CRM.Database.Context;
using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.Enums;
using CRM.Models.Rest.Lists;
using CRM.Models.Rest.Skill;
using CRM.Service.SkillServices.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace CRM.Service.SkillServices
{
    public class SkillGetService : ISkillGetService
    {
        private readonly CrmDatabaseContext _crmDatabaseContext;

        public SkillGetService(CrmDatabaseContext crmDatabaseContext)
        {
            _crmDatabaseContext = crmDatabaseContext
                                  ?? throw new ArgumentNullException(nameof(crmDatabaseContext));
        }

        public async Task<BaseCollectionResponse<SkillSummary>> GetAllAsync()
        {
            var response = new BaseCollectionResponse<SkillSummary>();

            var data = await _crmDatabaseContext
                .Skills
                .OrderBy(o => o.Name)
                .ToListAsync();

            response.Items = Mapper.Map<List<SkillSummary>>(data);

            return response;
        }

        public async Task<BaseCollectionResponse<ListItem>> GetListItemsAsync()
        {
            var response = new BaseCollectionResponse<ListItem>();

            var data = await _crmDatabaseContext
                .Skills
                .Where(o=> o.IsActive)
                .OrderBy(o=> o.Name)
                .ToListAsync();

            response.Items = Mapper.Map<List<ListItem>>(data);

            return response;
        }

        public async Task<BaseCollectionResponse<SkillSummary>> GetFilteredAsync(SkillFilteredListRequest filter)
        {
            //
            // Validate Input Parameters
            //
            if (filter == null)
            {
                throw new ArgumentNullException(nameof(filter));
            }

            var response = new BaseCollectionResponse<SkillSummary>();

            var query = _crmDatabaseContext
                .Skills
                .AsQueryable();

            switch (filter.RecordActiveStatusFilter)
            {
                case EnumRecordActiveStatus.Active:
                    query = query.Where(o => o.IsActive).AsQueryable();
                    break;

                case EnumRecordActiveStatus.InActive:
                    query = query.Where(o => o.IsActive == false).AsQueryable();
                    break;

                case EnumRecordActiveStatus.All:
                    break;

                default:
                    throw new ArgumentOutOfRangeException();
            }

            query = query
                .OrderBy(order => order.Name);

            var data = await query.ToListAsync();

            response.Items = Mapper.Map<List<SkillSummary>>(data);

            return response;
        }

        public async Task<BaseItemResponse<SkillExtended>> GetByIdAsync(Guid skillId)
        {
            //
            // Validate Input Parameters
            //
            var response = new BaseItemResponse<SkillExtended>();

            var data = await _crmDatabaseContext
                .Skills
                .FirstOrDefaultAsync(o => o.SkillId== skillId);

            response.Entity = Mapper.Map<SkillExtended>(data);

            return response;
        }
    }
}
