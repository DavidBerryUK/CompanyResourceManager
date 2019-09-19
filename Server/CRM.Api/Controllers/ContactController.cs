using System;
using System.Threading.Tasks;
using CRM.Models.Rest.Contacts;
using CRM.Service.Repository.ContactServices.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace CRM.Api.Controllers
{
    [ApiController]
    [Route("api/contact")]
    public class ContactController : Controller
    {
        private readonly IContactCrudService _contactCrudService;

        public ContactController(
            IContactCrudService contactCrudService)
        {
            //
            // Validate Input Parameters
            //
            _contactCrudService = contactCrudService
                                  ?? throw new ArgumentNullException(nameof(_contactCrudService));
        }


        [HttpGet("{contactItemId}")]
        public async Task<ActionResult<ContactSummary>> GetById(Guid contactItemId)
        {
            //
            // Validate Input Parameters
            //
            if (contactItemId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(contactItemId)} can not be blank");
            }

            var data = await _contactCrudService.GetItemAsync(contactItemId);
            return Ok(data);
        }


        [HttpPut("{contactItemId}")]
        public async Task<ActionResult<ContactSummary>> Update(Guid contactItemId,
            [FromBody] ContactSummary contactItem)
        {
            //
            // Validate Input Parameters
            //
            if (contactItemId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(contactItemId)} can not be blank");
            }

            if (contactItem == null)
            {
                throw new ArgumentNullException(nameof(contactItem));
            }

            var data = await _contactCrudService.UpdateAsync(contactItemId, contactItem);
            return Ok(data);
        }
    }
}