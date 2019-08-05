using CRM.Models.Rest.Generic;
using CRM.Models.Rest.Lists;
using CRM.Models.Rest.Contacts;
using CRM.Service.Repository.PersonServices.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CRM.Service.Repository.ContractServices.Interfaces;


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
            var data = await _contactTypeCrudService.GetAllAsSummaryAsync();
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

            var data = await _contactTypeCrudService.GetFilteredAsSummaryAsync(filter);
            return Ok(data);
        }

        [HttpGet("{contactTypeId}")]
        public async Task<ActionResult<ContactTypeExtended>> GetById(Guid contactTypeId)
        {
            //
            // Validate Input Parameters
            //
            if (contactTypeId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(contactTypeId)} can not be blank");
            }

            var data = await _contactTypeCrudService.GetItemAsExtendedAsync(contactTypeId);
            return Ok(data);
        }


        [HttpPut("{contactTypeId}")]
        public async Task<ActionResult<ContactTypeExtended>> Update(Guid contactTypeId, [FromBody] ContactTypeExtended contactType)
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

            var data = await _contactTypeCrudService.UpdateExtendedAsync(contactTypeId, contactType);
            return Ok(data);
        }

        [HttpPost("")]
        public async Task<ActionResult<ContactTypeExtended>> Create([FromBody] ContactTypeExtended contactType)
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