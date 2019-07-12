using AutoMapper;
using CRM.Database.Context;
using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.People.Response;
using CRM.Service.PeopleServices.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;

namespace CRM.Service.PeopleServices
{
    public class PeopleUpdateService : IPeopleUpdateService
    {
        private readonly CrmDatabaseContext _crmDatabaseContext;

        public PeopleUpdateService(CrmDatabaseContext crmDatabaseContext)
        {
            _crmDatabaseContext = crmDatabaseContext;
        }

        public async Task<BaseItemResponse<PersonExtended>> Create(PersonExtended person)
        {
            var response = new BaseItemResponse<PersonExtended>();

            var entity = Mapper.Map<Models.Database.Person>(person);
            entity.PersonId = Guid.NewGuid();
            entity.IsActive = true;

            await _crmDatabaseContext.AddAsync(entity);
            await _crmDatabaseContext.SaveChangesAsync();

            var data = await _crmDatabaseContext
                .People
                .Include(inc => inc.NavJobRole)
                .FirstOrDefaultAsync(o => o.PersonId == entity.PersonId);

            response.Entity = Mapper.Map<PersonExtended>(data);

            return response;
        }

        public async Task<BaseItemResponse<PersonExtended>> Update(Guid personId, PersonExtended person)
        {
            var response = new BaseItemResponse<PersonExtended>();
            var data = await _crmDatabaseContext.People.FirstOrDefaultAsync(o=> o.PersonId == personId);

            if (data == null)
            {
                response.ErrorMessage = $"PersonSummary {personId} not found";
            }

            Mapper.Map(person, data);
            await _crmDatabaseContext.SaveChangesAsync();

            data = await _crmDatabaseContext
                .People
                .Include(inc => inc.NavJobRole)
                .FirstOrDefaultAsync(o => o.PersonId == personId);

            response.Entity = Mapper.Map<PersonExtended>(data);

            return response;
        }

        public async Task<BaseItemResponse<PersonSummary>> Activate(Guid personId)
        {
            return await AmendPersonActiveStatus(personId, true);
        }

        public async Task<BaseItemResponse<PersonSummary>> Deactivate(Guid personId)
        {
            return await AmendPersonActiveStatus(personId, false);
        }

        private async Task<BaseItemResponse<PersonSummary>> AmendPersonActiveStatus(Guid personId, bool isActive)
        {
            var response = new BaseItemResponse<PersonSummary>();
            var data = await _crmDatabaseContext.People.FirstOrDefaultAsync(o => o.PersonId == personId);

            if (data == null)
            {
                response.ErrorMessage = $"PersonSummary {personId} not found";
            }
            else
            {
                data.IsActive = isActive;
                await _crmDatabaseContext.SaveChangesAsync();
                response.Entity = Mapper.Map<PersonSummary>(data);
            }

            return response;
        }
    }
}
