using CRM.Models.Rest.JobRole.Requests;
using CRM.Models.Rest.JobRole.Response;
using CRM.Models.Rest.Lists;
using CRM.Service.JobRoleServices.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CRM.Service.PersonServices.Interfaces;

namespace CRM.Api.Controllers
{
    [ApiController]
    [Route("api/jobrole")]
    public class JobRoleController : Controller
    {
        private readonly IJobRoleGetService _jobRoleGetService;
        private readonly IJobRoleUpdateService _jobRoleUpdateService;
        private readonly IPersonGetService _personGetService;


        public JobRoleController(
            IJobRoleGetService jobRoleGetService,
            IJobRoleUpdateService jobRoleUpdateService, 
            IPersonGetService personGetService)
        {
            _jobRoleGetService = jobRoleGetService;
            _jobRoleUpdateService = jobRoleUpdateService;
            _personGetService = personGetService;
        }

        [HttpGet("")]
        public async Task<ActionResult<List<JobRoleSummary>>> All()
        {
            var data = await _jobRoleGetService.GetAllAsync();
            return Ok(data);
        }

        [HttpGet("{jobRoleId}/Person")]
        public async Task<ActionResult<JobRoleSummary>> GetPersonForJobRole(Guid jobRoleId)
        {
            var data = await _personGetService.GetPersonWithJobRole(jobRoleId);
            return Ok(data);
        }

        [HttpGet("items")]
        public async Task<ActionResult<List<ListItem>>> ListActive()
        {
            var data = await _jobRoleGetService.GetListItemsAsync();
            return Ok(data);
        }

        [HttpPost("filtered")]
        public async Task<ActionResult<List<JobRoleSummary>>> FilteredList(JobRoleFilteredListRequest filter)
        {
            var data = await _jobRoleGetService.GetFilteredAsync(filter);
            return Ok(data);
        }

        [HttpGet("{jobRoleId}")]
        public async Task<ActionResult<JobRoleExtended>> GetById(Guid jobRoleId)
        {
            var data = await _jobRoleGetService.GetByIdAsync(jobRoleId);
            return Ok(data);
        }


        [HttpPut("{jobRoleId}")]
        public async Task<ActionResult<JobRoleExtended>> Update(Guid jobRoleId, [FromBody] JobRoleExtended jobRoleSummary)
        {
            var data = await _jobRoleUpdateService.Update(jobRoleId, jobRoleSummary);
            return Ok(data);
        }

        [HttpPost("")]
        public async Task<ActionResult<JobRoleExtended>> Create([FromBody] JobRoleExtended jobRoleSummary)
        {
            var data = await _jobRoleUpdateService.Create(jobRoleSummary);
            return Ok(data);
        }

        [HttpPut("{jobRoleId}/deactivate")]
        public async Task<ActionResult<JobRoleSummary>> Deactivate(Guid jobRoleId)
        {
            var data = await _jobRoleUpdateService.Deactivate(jobRoleId);
            return Ok(data);
        }

        [HttpPut("{jobRoleId}/activate")]
        public async Task<ActionResult<JobRoleSummary>> Activate(Guid jobRoleId)
        {
            var data = await _jobRoleUpdateService.Activate(jobRoleId);
            return Ok(data);
        }

    }
}