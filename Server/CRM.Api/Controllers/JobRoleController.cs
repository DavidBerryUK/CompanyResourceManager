using CRM.Models.Rest.Generic;
using CRM.Models.Rest.JobRole;
using CRM.Models.Rest.Lists;
using CRM.Service.Repository.JobRoleServices.Interfaces;
using CRM.Service.Repository.PersonServices.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CRM.Api.Controllers
{
    [ApiController]
    [Route("api/jobrole")]
    public class JobRoleController : Controller
    {
        private readonly IJobRoleCrudService _jobRoleCrudService;
        private readonly IPersonSimpleQueryService _personSimpleQueryService;


        public JobRoleController(
            IJobRoleCrudService jobRoleCrudService,
            IPersonSimpleQueryService personSimpleQueryService)
        {
            //
            // Validate Input Parameters
            //
            _jobRoleCrudService = jobRoleCrudService
                                  ?? throw new ArgumentNullException(nameof(jobRoleCrudService));

            _personSimpleQueryService = personSimpleQueryService
                                        ?? throw new ArgumentNullException(nameof(personSimpleQueryService));
        }

        [HttpGet("")]
        public async Task<ActionResult<List<JobRoleSummary>>> All()
        {
            //
            // Validate Input Parameters
            //
            var data = await _jobRoleCrudService.GetAllAsSummaryAsync();
            return Ok(data);
        }

        [HttpGet("{jobRoleId}/Person")]
        public async Task<ActionResult<JobRoleSummary>> GetPersonForJobRole(Guid jobRoleId)
        {
            //
            // Validate Input Parameters
            //
            if (jobRoleId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(jobRoleId)} can not be blank");
            }

            var data = await _personSimpleQueryService.GetWithFilterAsync(jobRoleId);
            return Ok(data);
        }

        [HttpGet("list")]
        public async Task<ActionResult<List<ListItem>>> ListActive()
        {
            //
            // Validate Input Parameters
            //
            var data = await _jobRoleCrudService.GetActiveAsListItemsAsync();
            return Ok(data);
        }

        [HttpPost("filtered")]
        public async Task<ActionResult<List<JobRoleSummary>>> FilteredList(FilteredArchiveRequest filter)
        {
            //
            // Validate Input Parameters
            //
            if (filter == null)
            {
                throw new ArgumentNullException(nameof(filter));
            }

            var data = await _jobRoleCrudService.GetFilteredAsSummaryAsync(filter);
            return Ok(data);
        }

        [HttpGet("{jobRoleId}")]
        public async Task<ActionResult<JobRoleExtended>> GetById(Guid jobRoleId)
        {
            //
            // Validate Input Parameters
            //
            if (jobRoleId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(jobRoleId)} can not be blank");
            }

            var data = await _jobRoleCrudService.GetItemAsExtendedAsync(jobRoleId);
            return Ok(data);
        }


        [HttpPut("{jobRoleId}")]
        public async Task<ActionResult<JobRoleExtended>> Update(Guid jobRoleId, [FromBody] JobRoleExtended jobRole)
        {
            //
            // Validate Input Parameters
            //
            if (jobRoleId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(jobRoleId)} can not be blank");
            }

            if (jobRole == null)
            {
                throw new ArgumentNullException(nameof(jobRole));
            }

            var data = await _jobRoleCrudService.UpdateExtendedAsync(jobRoleId, jobRole);
            return Ok(data);
        }

        [HttpPost("")]
        public async Task<ActionResult<JobRoleExtended>> Create([FromBody] JobRoleExtended jobRole)
        {
            //
            // Validate Input Parameters
            //
            if (jobRole == null)
            {
                throw new ArgumentNullException(nameof(jobRole));
            }

            var data = await _jobRoleCrudService.CreateAsync(jobRole);
            return Ok(data);
        }

        [HttpPut("{jobRoleId}/deactivate")]
        public async Task<ActionResult<JobRoleSummary>> Deactivate(Guid jobRoleId)
        {
            //
            // Validate Input Parameters
            //
            if (jobRoleId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(jobRoleId)} can not be blank");
            }

            var data = await _jobRoleCrudService.UpdateActiveStatusAsync(jobRoleId, false);
            return Ok(data);
        }

        [HttpPut("{jobRoleId}/activate")]
        public async Task<ActionResult<JobRoleSummary>> Activate(Guid jobRoleId)
        {
            //
            // Validate Input Parameters
            //
            if (jobRoleId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(jobRoleId)} can not be blank");
            }

            var data = await _jobRoleCrudService.UpdateActiveStatusAsync(jobRoleId, true);
            return Ok(data);
        }
    }
}