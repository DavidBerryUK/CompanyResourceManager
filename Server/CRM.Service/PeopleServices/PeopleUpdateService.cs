using System;
using System.Threading.Tasks;
using AutoMapper;
using CRM.Database.Context;
using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.People.Response;
using CRM.Service.PeopleServices.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace CRM.Service.PeopleServices
{
    public class PeopleUpdateService : IPeopleUpdateService
    {
        private readonly CrmDatabaseContext _crmDatabaseContext;

        public PeopleUpdateService(CrmDatabaseContext crmDatabaseContext)
        {
            _crmDatabaseContext = crmDatabaseContext;
        }

        public async Task<BaseItemResponse<Person>> Create(Person person)
        {
            var response = new BaseItemResponse<Person>();

            var entity = Mapper.Map<Models.Database.Person>(person);
            entity.PersonId = Guid.NewGuid();
            entity.IsActive = true;

            await _crmDatabaseContext.AddAsync(entity);
            await _crmDatabaseContext.SaveChangesAsync();

            response.Entity = Mapper.Map<Person>(entity);

            return response;
        }

        public async Task<BaseItemResponse<Person>> Update(Guid personId, Person person)
        {
            var response = new BaseItemResponse<Person>();
            var data = await _crmDatabaseContext.People.FirstOrDefaultAsync(o=> o.PersonId == personId);

            if (data == null)
            {
                response.ErrorMessage = $"Person {personId} not found";
            }
            else
            {
                Mapper.Map(person, data);
                await _crmDatabaseContext.SaveChangesAsync();
                response.Entity = Mapper.Map<Person>(data);
            } 

            return response;
        }

        public async Task<BaseItemResponse<Person>> Activate(Guid personId)
        {
            return await AmendPersonActiveStatus(personId, true);
        }

        public async Task<BaseItemResponse<Person>> Deactivate(Guid personId)
        {
            return await AmendPersonActiveStatus(personId, false);
        }

        private async Task<BaseItemResponse<Person>> AmendPersonActiveStatus(Guid personId, bool isActive)
        {
            var response = new BaseItemResponse<Person>();
            var data = await _crmDatabaseContext.People.FirstOrDefaultAsync(o => o.PersonId == personId);

            if (data == null)
            {
                response.ErrorMessage = $"Person {personId} not found";
            }
            else
            {
                data.IsActive = isActive;
                await _crmDatabaseContext.SaveChangesAsync();
                response.Entity = Mapper.Map<Person>(data);
            }

            return response;
        }
    }
}
