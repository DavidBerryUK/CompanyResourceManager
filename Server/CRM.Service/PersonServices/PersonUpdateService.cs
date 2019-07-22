using AutoMapper;
using CRM.Database.Context;
using CRM.Models.Database.Persons;
using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.Person;
using CRM.Service.PersonServices.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;

namespace CRM.Service.PersonServices
{
    public class PersonUpdateService : IPersonUpdateService
    {
        private readonly CrmDatabaseContext _crmDatabaseContext;

        public PersonUpdateService(CrmDatabaseContext crmDatabaseContext)
        {
            _crmDatabaseContext = crmDatabaseContext
                                  ?? throw new ArgumentNullException(nameof(crmDatabaseContext));
        }

        public async Task<BaseItemResponse<PersonExtended>> Create(PersonExtended person)
        {
            //
            // Validate Input Parameters
            //
            if (person == null)
            {
                throw new ArgumentNullException(nameof(person));
            }

            var response = new BaseItemResponse<PersonExtended>();

            var entity = Mapper.Map<Person>(person);
            entity.PersonId = Guid.NewGuid();
            entity.IsActive = true;

            await _crmDatabaseContext.AddAsync(entity);
            await _crmDatabaseContext.SaveChangesAsync();

            var data = await _crmDatabaseContext
                .Persons
                .Include(inc => inc.NavJobRole)
                .FirstOrDefaultAsync(o => o.PersonId == entity.PersonId);

            response.Entity = Mapper.Map<PersonExtended>(data);

            return response;
        }

        public async Task<BaseItemResponse<PersonExtended>> Update(Guid personId, PersonExtended person)
        {
            //
            // Validate Input Parameters
            //
            if (personId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(personId)} can not be blank");
            }

            if (person == null)
            {
                throw new ArgumentNullException(nameof(person));
            }

            var response = new BaseItemResponse<PersonExtended>();
            var data = await _crmDatabaseContext.Persons.FirstOrDefaultAsync(o=> o.PersonId == personId);

            if (data == null)
            {
                response.ErrorMessage = $"{nameof(person)} {personId} not found";
            }

            Mapper.Map(person, data);
            await _crmDatabaseContext.SaveChangesAsync();

            data = await _crmDatabaseContext
                .Persons
                .Include(inc => inc.NavJobRole)
                .FirstOrDefaultAsync(o => o.PersonId == personId);

            response.Entity = Mapper.Map<PersonExtended>(data);

            return response;
        }

        public async Task<BaseItemResponse<PersonSummary>> Activate(Guid personId)
        {
            //
            // Validate Input Parameters
            //
            if (personId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(personId)} can not be blank");
            }

            return await AmendPersonActiveStatus(personId, true);
        }

        public async Task<BaseItemResponse<PersonSummary>> Deactivate(Guid personId)
        {
            //
            // Validate Input Parameters
            //
            if (personId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(personId)} can not be blank");
            }

            return await AmendPersonActiveStatus(personId, false);
        }

        private async Task<BaseItemResponse<PersonSummary>> AmendPersonActiveStatus(Guid personId, bool isActive)
        {
            //
            // Validate Input Parameters
            //
            if (personId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(personId)} can not be blank");
            }

            var response = new BaseItemResponse<PersonSummary>();
            var data = await _crmDatabaseContext
                .Persons
                .Include(inc => inc.NavJobRole)
                .FirstOrDefaultAsync(o => o.PersonId == personId);

            if (data == null)
            {
                response.ErrorMessage = $"{nameof(personId)} {personId} not found";
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
