using CRM.Models.Rest.Contacts;
using CRM.Service.Repository.ContractServices.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;


namespace CRM.Api.Controllers
{
    [ApiController]
    [Route("api/contact/group")]
    public class ContactGroupController : Controller
    {
        private readonly IContactGroupCrudService _contactGroupCrudService;

        public ContactGroupController(
            IContactGroupCrudService contactGroupCrudService)
        {
            //
            // Validate Input Parameters
            //
            _contactGroupCrudService = contactGroupCrudService
                ?? throw new ArgumentNullException(nameof(_contactGroupCrudService));

        }

        

        [HttpGet("{contactGroupId}")]
        public async Task<ActionResult<ContactTypeSummary>> GetById(Guid contactGroupId)
        {
            //
            // Validate Input Parameters
            //
            if (contactGroupId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(contactGroupId)} can not be blank");
            }

            var data = await _contactGroupCrudService.GetItemAsync(contactGroupId);
            return Ok(data);
        }


        [HttpPut("{contactGroupId}")]
        public async Task<ActionResult<ContactTypeSummary>> Update(Guid contactGroupId, [FromBody] ContactGroupSummary contactGroup)
        {
            //
            // Validate Input Parameters
            //
            if (contactGroupId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(contactGroupId)} can not be blank");
            }

            if (contactGroup == null)
            {
                throw new ArgumentNullException(nameof(contactGroup));
            }

            var data = await _contactGroupCrudService.UpdateAsync(contactGroupId, contactGroup);
            return Ok(data);
        }

    }
}