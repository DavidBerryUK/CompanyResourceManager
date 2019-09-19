using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CRM.Models.Rest.Contacts;
using CRM.Models.Rest.Generic;
using CRM.Models.Rest.Lists;
using CRM.Service.Repository.ContactServices.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace CRM.Api.Controllers
{
    [ApiController]
    [Route("api/contact/type")]
    public class ContactTypeController : Controller
    {
        private readonly IContactTypeCrudService _contactTypeCrudService;

        public ContactTypeController(
            IContactTypeCrudService contactTypeCrudService)
        {
            //
            // Validate Input Parameters
            //
            _contactTypeCrudService = contactTypeCrudService
                                      ?? throw new ArgumentNullException(nameof(contactTypeCrudService));
        }

        [HttpGet("")]
        public async Task<ActionResult<List<ContactTypeSummary>>> All()
        {
            //
            // Validate Input Parameters
            //
            var data = await _contactTypeCrudService.GetAllAsync();
            return Ok(data);
        }

        [HttpPost("filtered")]
        public async Task<ActionResult<List<ContactTypeSummary>>> FilteredList(FilteredArchiveRequest filter)
        {
            //
            // Validate Input Parameters
            //
            if (filter == null)
            {
                throw new ArgumentNullException(nameof(filter));
            }

            var data = await _contactTypeCrudService.GetFilteredAsync(filter);
            return Ok(data);
        }

        [HttpGet("{contactTypeId}")]
        public async Task<ActionResult<ContactTypeSummary>> GetById(Guid contactTypeId)
        {
            //
            // Validate Input Parameters
            //
            if (contactTypeId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(contactTypeId)} can not be blank");
            }

            var data = await _contactTypeCrudService.GetItemAsync(contactTypeId);
            return Ok(data);
        }


        [HttpPut("{contactTypeId}")]
        public async Task<ActionResult<ContactTypeSummary>> Update(Guid contactTypeId,
            [FromBody] ContactTypeSummary contactType)
        {
            //
            // Validate Input Parameters
            //
            if (contactTypeId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(contactTypeId)} can not be blank");
            }

            if (contactType == null)
            {
                throw new ArgumentNullException(nameof(contactType));
            }

            var data = await _contactTypeCrudService.UpdateAsync(contactTypeId, contactType);
            return Ok(data);
        }

        [HttpPost("")]
        public async Task<ActionResult<ContactTypeSummary>> Create([FromBody] ContactTypeSummary contactType)
        {
            //
            // Validate Input Parameters
            //
            if (contactType == null)
            {
                throw new ArgumentNullException(nameof(contactType));
            }

            var data = await _contactTypeCrudService.CreateAsync(contactType);
            return Ok(data);
        }

        [HttpPut("{contactTypeId}/deactivate")]
        public async Task<ActionResult<ContactTypeSummary>> Deactivate(Guid contactTypeId)
        {
            //
            // Validate Input Parameters
            //
            if (contactTypeId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(contactTypeId)} can not be blank");
            }

            var data = await _contactTypeCrudService.UpdateActiveStatusAsync(contactTypeId, false);
            return Ok(data);
        }

        [HttpPut("{contactTypeId}/activate")]
        public async Task<ActionResult<ContactTypeSummary>> Activate(Guid contactTypeId)
        {
            //
            // Validate Input Parameters
            //
            if (contactTypeId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(contactTypeId)} can not be blank");
            }

            var data = await _contactTypeCrudService.UpdateActiveStatusAsync(contactTypeId, true);
            return Ok(data);
        }

        [HttpGet("list")]
        public async Task<ActionResult<List<ListItem>>> ListActive()
        {
            //
            // Validate Input Parameters
            //
            var data = await _contactTypeCrudService.GetActiveAsListItemsAsync();
            return Ok(data);
        }
    }
}