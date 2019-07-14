using CRM.Models.Rest.Person;
using CRM.Service.PersonServices.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CRM.Api.Controllers
{
    [ApiController]
    [Route("api/Person")]
    public class PersonController : Controller
    {
        private readonly IPersonGetService _personGetService;
        private readonly IPersonUpdateService _personUpdateService;

        public PersonController(
            IPersonGetService personGetService,
            IPersonUpdateService personUpdateService)
        {
            _personGetService = personGetService
                ?? throw new ArgumentNullException(nameof(personGetService));

            _personUpdateService = personUpdateService
                ?? throw new ArgumentNullException(nameof(personUpdateService));
        }

        [HttpGet("")]
        public async Task<ActionResult<List<PersonSummary>>> All()
        {
            var data = await _personGetService.GetAllAsync();
            return Ok(data);
        }

        [HttpPost("filtered")]
        public async Task<ActionResult<List<PersonSummary>>> FilteredList(PersonFilteredListRequest filter)
        {
            if (filter == null)
            {
                throw new ArgumentNullException(nameof(filter));
            }

            var data = await _personGetService.GetFilteredAsync(filter);
            return Ok(data);
        }

        [HttpGet("{personId}")]
        public async Task<ActionResult<PersonExtended>> GetById(Guid personId)
        {
            if (personId == Guid.Empty)
            {
                throw new ArgumentException($@"personId can not be blank");
            }

            var data = await _personGetService.GetByIdAsync(personId);
            return Ok(data);
        }

        [HttpPut("{personId}")]
        public async Task<ActionResult<PersonExtended>> Update(Guid personId, [FromBody] PersonExtended person)
        {
            if (personId == Guid.Empty)
            {
                throw new ArgumentException($@"personId can not be blank");
            }

            if (person == null)
            {
                throw new ArgumentNullException(nameof(person));
            }

            var data = await _personUpdateService.Update(personId, person);
            return Ok(data);
        }

        [HttpPost("")]
        public async Task<ActionResult<PersonExtended>> Create( [FromBody] PersonExtended person)
        {
            if (person == null)
            {
                throw new ArgumentNullException(nameof(person));
            }

            var data = await _personUpdateService.Create( person);
            return Ok(data);
        }

        [HttpPut("{personId}/deactivate")]
        public async Task<ActionResult<PersonSummary>> Deactivate(Guid personId)
        {
            if (personId == Guid.Empty)
            {
                throw new ArgumentException($@"personId can not be blank");
            }

            var data = await _personUpdateService.Deactivate(personId);
            return Ok(data);
        }

        [HttpPut("{personId}/activate")]
        public async Task<ActionResult<PersonSummary>> Activate(Guid personId)
        {
            if (personId == Guid.Empty)
            {
                throw new ArgumentException($@"personId can not be blank");
            }

            var data = await _personUpdateService.Activate(personId);
            return Ok(data);
        }
    }
}