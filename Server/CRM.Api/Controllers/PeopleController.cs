using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CRM.Models.Rest.People.Request;
using CRM.Models.Rest.People.Response;
using CRM.Service.PeopleServices.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace CRM.Api.Controllers
{
    [ApiController]
    [Route("api/people")]
    public class PeopleController : Controller
    {
        private readonly IPeopleGetService _peopleGetService;
        private readonly IPeopleUpdateService _peopleUpdateService;

        public PeopleController(
            IPeopleGetService peopleGetService,
            IPeopleUpdateService peopleUpdateService)
        {
            _peopleGetService = peopleGetService;
            _peopleUpdateService = peopleUpdateService;
        }

        [HttpGet("")]
        public async Task<ActionResult<List<Person>>> All()
        {
            var data = await _peopleGetService.GetAllAsync();
            return Ok(data);
        }

        [HttpPost("filtered")]
        public async Task<ActionResult<List<Person>>> FilteredList(PersonFilteredListRequest filter)
        {
            var data = await _peopleGetService.GetFilteredAsync(filter);
            return Ok(data);
        }

        [HttpGet("{personId}")]
        public async Task<ActionResult<Person>> GetById(Guid personId)
        {
            var data = await _peopleGetService.GetByIdAsync(personId);
            return Ok(data);
        }

        [HttpPut("{personId}")]
        public async Task<ActionResult<Person>> Update(Guid personId, [FromBody] Person person)
        {
            var data = await _peopleUpdateService.Update(personId, person);
            return Ok(data);
        }

        [HttpPost("")]
        public async Task<ActionResult<Person>> Create( [FromBody] Person person)
        {
            var data = await _peopleUpdateService.Create( person);
            return Ok(data);
        }

        [HttpPut("{personId}/deactivate")]
        public async Task<ActionResult<Person>> Deactivate(Guid personId)
        {
            var data = await _peopleUpdateService.Deactivate(personId);
            return Ok(data);
        }

        [HttpPut("{personId}/activate")]
        public async Task<ActionResult<Person>> Activate(Guid personId)
        {
            var data = await _peopleUpdateService.Activate(personId);
            return Ok(data);
        }
    }
}