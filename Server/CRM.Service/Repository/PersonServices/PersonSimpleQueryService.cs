using AutoMapper;
using CRM.Database.Context;
using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.Person;
using CRM.Service.Repository.PersonServices.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRM.Service.Repository.PersonServices
{
    public class PersonSimpleQueryService : IPersonSimpleQueryService
    {
        private readonly CrmDatabaseContext _crmDatabaseContext;
        private readonly IMapper _mapper;

        public PersonSimpleQueryService(
            CrmDatabaseContext crmDatabaseContext, 
            IMapper mapper)
        {
            _crmDatabaseContext = crmDatabaseContext
                                  ?? throw new ArgumentNullException(nameof(crmDatabaseContext));
            _mapper = mapper
                      ?? throw new ArgumentNullException(nameof(mapper));
        }

        public async Task<BaseCollectionResponse<PersonSummary>> GetWithFilterAsync(Guid? jobRoleId = null,
            Guid? skillId = null)
        {
            var response = new BaseCollectionResponse<PersonSummary>();

            var query = _crmDatabaseContext
                .Persons
                .Include(inc => inc.NavJobRole)
                .Where(o => o.IsActive)
                .AsQueryable();

            if (jobRoleId.HasValue && jobRoleId.Value != Guid.Empty)
                query = query.Where(o => o.JobRoleId == jobRoleId.Value);

            if (skillId.HasValue && skillId.Value != Guid.Empty)
                query = query.Where(o => o.NavPersonSkills.Any(skill => skill.SkillId == skillId.Value));

            query = query.OrderBy(order => order.Surname)
                .ThenBy(order => order.Forename);

            var data = await query.ToListAsync();

            response.Items = _mapper.Map<List<PersonSummary>>(data);

            return response;
        }
    }
}