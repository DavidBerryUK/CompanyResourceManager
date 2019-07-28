using CRM.Models.Rest.Generic;
using CRM.Models.Rest.Lists;
using CRM.Models.Rest.Security;
using CRM.Models.Rest.Skill;
using CRM.Service.Repository.SecurityServices.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CRM.Api.Controllers
{
    [ApiController]
    [Route("api/security/group")]
    public class SecurityGroupController : Controller
    {
        private readonly ISecurityGroupCrudService _securityGroupCrudService;

        public SecurityGroupController(
            ISecurityGroupCrudService securityGroupCrudService)
        {
            //
            // Validate Input Parameters
            //
            _securityGroupCrudService = securityGroupCrudService
                                 ?? throw new ArgumentNullException(nameof(securityGroupCrudService));
        }

        [HttpGet("")]
        public async Task<ActionResult<List<SkillSummary>>> All()
        {
            //
            // Validate Input Parameters
            //
            var data = await _securityGroupCrudService.GetAllAsSummaryAsync();
            return Ok(data);
        }

        [HttpGet("list")]
        public async Task<ActionResult<List<ListItem>>> ListActive()
        {
            //
            // Validate Input Parameters
            //
            var data = await _securityGroupCrudService.GetActiveAsListItemsAsync();
            return Ok(data);
        }

        [HttpPost("filtered")]
        public async Task<ActionResult<List<SkillSummary>>> FilteredList(FilteredArchiveRequest filter)
        {
            //
            // Validate Input Parameters
            //
            if (filter == null)
            {
                throw new ArgumentNullException(nameof(filter));
            }

            var data = await _securityGroupCrudService.GetFilteredAsSummaryAsync(filter);
            return Ok(data);
        }

        [HttpGet("{securityGroupId}")]
        public async Task<ActionResult<SkillExtended>> GetById(Guid securityGroupId)
        {
            //
            // Validate Input Parameters
            //
            if (securityGroupId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(securityGroupId)} can not be blank");
            }

            var data = await _securityGroupCrudService.GetItemAsExtendedAsync(securityGroupId);
            return Ok(data);
        }


        [HttpPut("{securityGroupId}")]
        public async Task<ActionResult<SkillExtended>> Update(Guid securityGroupId, [FromBody] SecurityGroupExtended securityGroup)
        {
            //
            // Validate Input Parameters
            //
            if (securityGroupId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(securityGroupId)} can not be blank");
            }

            if (securityGroup == null)
            {
                throw new ArgumentNullException(nameof(securityGroup));
            }

            var data = await _securityGroupCrudService.UpdateAsync(securityGroupId, securityGroup);
            return Ok(data);
        }

        [HttpPost("")]
        public async Task<ActionResult<SkillExtended>> Create([FromBody] SecurityGroupExtended securityGroup)
        {
            //
            // Validate Input Parameters
            //
            if (securityGroup == null)
            {
                throw new ArgumentNullException(nameof(securityGroup));
            }

            var data = await _securityGroupCrudService.CreateAsync(securityGroup);
            return Ok(data);
        }

        [HttpPut("{securityGroupId}/deactivate")]
        public async Task<ActionResult<SkillSummary>> Deactivate(Guid securityGroupId)
        {
            //
            // Validate Input Parameters
            //
            if (securityGroupId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(securityGroupId)} can not be blank");
            }

            var data = await _securityGroupCrudService.UpdateActiveStatusAsync(securityGroupId, false);
            return Ok(data);
        }

        [HttpPut("{securityGroupId}/activate")]
        public async Task<ActionResult<SkillSummary>> Activate(Guid securityGroupId)
        {
            //
            // Validate Input Parameters
            //
            if (securityGroupId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(securityGroupId)} can not be blank");
            }

            var data = await _securityGroupCrudService.UpdateActiveStatusAsync(securityGroupId, true);
            return Ok(data);
        }
    }
}