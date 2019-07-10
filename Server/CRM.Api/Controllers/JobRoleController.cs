using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CRM.Models.Rest.JobRole.Requests;
using CRM.Models.Rest.JobRole.Response;
using CRM.Models.Rest.People.Response;
using CRM.Service.JobRoleServices.Interfaces;
using CRM.Service.PeopleServices.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace CRM.Api.Controllers
{
    [ApiController]
    [Route("api/jobrole")]
    public class JobRoleController : Controller
    {
        private readonly IJobRoleGetService _jobRoleGetService;
        private readonly IJobRoleUpdateService _jobRoleUpdateService;
        private readonly IPeopleGetService _peopleGetService;


        public JobRoleController(
            IJobRoleGetService jobRoleGetService,
            IJobRoleUpdateService jobRoleUpdateService, 
            IPeopleGetService peopleGetService)
        {
            _jobRoleGetService = jobRoleGetService;
            _jobRoleUpdateService = jobRoleUpdateService;
            _peopleGetService = peopleGetService;
        }

        [HttpGet("")]
        public async Task<ActionResult<List<JobRole>>> All()
        {
            var data = await _jobRoleGetService.GetAllAsync();
            return Ok(data);
        }

        [HttpGet("{jobRoleId}/people")]
        public async Task<ActionResult<PersonExtended>> GetPeopleForJobRole(Guid jobRoleId)
        {
            var data = await _peopleGetService.GetPeopleWithJobRole(jobRoleId);
            return Ok(data);
        }

        [HttpGet("items")]
        public async Task<ActionResult<List<JobRole>>> ListShortActive()
        {
            var data = await _jobRoleGetService.GetListItemsAsync();
            return Ok(data);
        }

        [HttpPost("filtered")]
        public async Task<ActionResult<List<JobRole>>> FilteredList(JobRoleFilteredListRequest filter)
        {
            var data = await _jobRoleGetService.GetFilteredAsync(filter);
            return Ok(data);
        }

        [HttpGet("{jobRoleId}")]
        public async Task<ActionResult<JobRole>> GetById(Guid jobRoleId)
        {
            var data = await _jobRoleGetService.GetByIdAsync(jobRoleId);
            return Ok(data);
        }


        [HttpPut("{jobRoleId}")]
        public async Task<ActionResult<JobRole>> Update(Guid jobRoleId, [FromBody] JobRole jobRole)
        {
            var data = await _jobRoleUpdateService.Update(jobRoleId, jobRole);
            return Ok(data);
        }

        [HttpPost("")]
        public async Task<ActionResult<JobRole>> Create([FromBody] JobRole jobRole)
        {
            var data = await _jobRoleUpdateService.Create(jobRole);
            return Ok(data);
        }

        [HttpPut("{jobRoleId}/deactivate")]
        public async Task<ActionResult<JobRole>> Deactivate(Guid jobRoleId)
        {
            var data = await _jobRoleUpdateService.Deactivate(jobRoleId);
            return Ok(data);
        }

        [HttpPut("{jobRoleId}/activate")]
        public async Task<ActionResult<JobRole>> Activate(Guid jobRoleId)
        {
            var data = await _jobRoleUpdateService.Activate(jobRoleId);
            return Ok(data);
        }

    }
}