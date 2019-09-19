using CRM.Models.Rest.Contacts;
using CRM.Models.Rest.Lists;
using CRM.Service.Repository.ContactServices.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CRM.Api.Controllers
{
    [ApiController]
    [Route("api/contact/validation")]
    public class ContactValidationController : Controller
    {
        private readonly IContactValidationCrudService _contactValidationCrudService;

        public ContactValidationController(
            IContactValidationCrudService contactValidationCrudService)
        {
            //
            // Validate Input Parameters
            //
            _contactValidationCrudService = contactValidationCrudService
                                            ?? throw new ArgumentNullException(nameof(contactValidationCrudService));
        }

        [HttpGet("")]
        public async Task<ActionResult<List<ContactValidationSummary>>> All()
        {
            //
            // Validate Input Parameters
            //
            var data = await _contactValidationCrudService.GetAllAsync();
            return Ok(data);
        }

        [HttpGet("{contactTypeId}")]
        public async Task<ActionResult<ContactValidationSummary>> GetById(Guid contactTypeId)
        {
            //
            // Validate Input Parameters
            //
            if (contactTypeId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(contactTypeId)} can not be blank");
            }

            var data = await _contactValidationCrudService.GetItemAsync(contactTypeId);
            return Ok(data);
        }

        [HttpGet("list")]
        public async Task<ActionResult<List<ListItem>>> ListActive()
        {
            //
            // Validate Input Parameters
            //
            var data = await _contactValidationCrudService.GetActiveAsListItemsAsync();
            return Ok(data);
        }
    }
}