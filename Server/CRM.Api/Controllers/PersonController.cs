using CRM.Models.Rest.Generic;
using CRM.Models.Rest.Person;
using CRM.Service.Repository.PersonServices.Interfaces;
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
        private readonly IPersonCrudService _personCrudService;

        public PersonController(IPersonCrudService personCrudService)
        {
            _personCrudService = personCrudService
                                 ?? throw new ArgumentNullException(nameof(personCrudService));
        }

        [HttpGet("")]
        public async Task<ActionResult<List<PersonSummary>>> All()
        {
            //
            // Validate Input Parameters
            //
            var data = await _personCrudService.GetAllAsSummaryAsync();
            return Ok(data);
        }

        [HttpPost("filtered")]
        public async Task<ActionResult<List<PersonSummary>>> FilteredList(FilteredArchiveRequest filter)
        {
            //
            // Validate Input Parameters
            //
            if (filter == null)
            {
                throw new ArgumentNullException(nameof(filter));
            }

            var data = await _personCrudService.GetFilteredAsSummaryAsync(filter);
            return Ok(data);
        }

        [HttpGet("{personId}")]
        public async Task<ActionResult<PersonExtended>> GetById(Guid personId)
        {
            //
            // Validate Input Parameters
            //
            if (personId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(personId)} can not be blank");
            }

            var data = await _personCrudService.GetItemAsExtendedAsync(personId);
            return Ok(data);
        }

        [HttpPut("{personId}")]
        public async Task<ActionResult<PersonExtended>> Update(Guid personId, [FromBody] PersonExtended person)
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

            var data = await _personCrudService.UpdateExtendedAsync(personId, person);
            return Ok(data);
        }

        [HttpPost("")]
        public async Task<ActionResult<PersonExtended>> Create([FromBody] PersonExtended person)
        {
            //
            // Validate Input Parameters
            //
            if (person == null)
            {
                throw new ArgumentNullException(nameof(person));
            }

            var data = await _personCrudService.CreateAsync(person);
            return Ok(data);
        }

        [HttpPut("{personId}/deactivate")]
        public async Task<ActionResult<PersonSummary>> Deactivate(Guid personId)
        {
            //
            // Validate Input Parameters
            //
            if (personId == Guid.Empty)
            {
                throw new ArgumentException("personId can not be blank");
            }

            var data = await _personCrudService.UpdateActiveStatusAsync(personId, false);
            return Ok(data);
        }

        [HttpPut("{personId}/activate")]
        public async Task<ActionResult<PersonSummary>> Activate(Guid personId)
        {
            //
            // Validate Input Parameters
            //
            if (personId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(personId)} can not be blank");
            }

            var data = await _personCrudService.UpdateActiveStatusAsync(personId, true);
            return Ok(data);
        }
    }
}