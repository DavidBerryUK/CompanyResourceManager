using CRM.Models.Rest.JobRole;
using CRM.Models.Rest.Lists;
using CRM.Service.JobRoleServices.Interfaces;
using CRM.Service.PersonServices.Interfaces;
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
        private readonly IJobRoleGetService _jobRoleGetService;
        private readonly IJobRoleUpdateService _jobRoleUpdateService;
        private readonly IPersonGetService _personGetService;
        private readonly IPersonSimpleQueryService _personSimpleQueryService;


        public JobRoleController(
            IJobRoleGetService jobRoleGetService,
            IJobRoleUpdateService jobRoleUpdateService, 
            IPersonGetService personGetService, 
            IPersonSimpleQueryService personSimpleQueryService)
        {
            //
            // Validate Input Parameters
            //
            _jobRoleGetService = jobRoleGetService
                                 ?? throw new ArgumentNullException(nameof(jobRoleGetService));

            _jobRoleUpdateService = jobRoleUpdateService
                                    ?? throw new ArgumentNullException(nameof(jobRoleUpdateService));

            _personGetService = personGetService
                                ?? throw new ArgumentNullException(nameof(personGetService));

            _personSimpleQueryService = personSimpleQueryService 
                                        ?? throw new ArgumentNullException(nameof(personSimpleQueryService));
        }

        [HttpGet("")]
        public async Task<ActionResult<List<JobRoleSummary>>> All()
        {
            //
            // Validate Input Parameters
            //
            var data = await _jobRoleGetService.GetAllAsync();
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

            var data = await _personSimpleQueryService.GetWithFilterAsync(jobRoleId: jobRoleId);
            return Ok(data);
        }

        [HttpGet("items")]
        public async Task<ActionResult<List<ListItem>>> ListActive()
        {
            //
            // Validate Input Parameters
            //
            var data = await _jobRoleGetService.GetListItemsAsync();
            return Ok(data);
        }

        [HttpPost("filtered")]
        public async Task<ActionResult<List<JobRoleSummary>>> FilteredList(JobRoleFilteredListRequest filter)
        {
            //
            // Validate Input Parameters
            //
            if (filter == null)
            {
                throw new ArgumentNullException(nameof(filter));
            }

            var data = await _jobRoleGetService.GetFilteredAsync(filter);
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

            var data = await _jobRoleGetService.GetByIdAsync(jobRoleId);
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

            var data = await _jobRoleUpdateService.Update(jobRoleId, jobRole);
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

            var data = await _jobRoleUpdateService.Create(jobRole);
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

            var data = await _jobRoleUpdateService.Deactivate(jobRoleId);
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

            var data = await _jobRoleUpdateService.Activate(jobRoleId);
            return Ok(data);
        }

    }
}