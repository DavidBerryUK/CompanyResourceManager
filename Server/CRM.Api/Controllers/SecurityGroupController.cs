using CRM.Models.Rest.Lists;
using CRM.Models.Rest.Skill;
using CRM.Service.SecurityServices.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CRM.Models.Rest.Security;


namespace CRM.Api.Controllers
{
    [ApiController]
    [Route("api/security/group")]
    public class SecurityGroupController : Controller
    {
        private readonly ISecurityGroupGetService _securityGroupGetService;
        private readonly ISecurityGroupUpdateService _securityGroupUpdateService;
        


        public SecurityGroupController(
            ISecurityGroupGetService securityGroupGetService,
            ISecurityGroupUpdateService securityGroupUpdateService)
        {
            //
            // Validate Input Parameters
            //
            _securityGroupGetService = securityGroupGetService
                                 ?? throw new ArgumentNullException(nameof(securityGroupGetService));

            _securityGroupUpdateService = securityGroupUpdateService
                                    ?? throw new ArgumentNullException(nameof(securityGroupUpdateService));
        }

        [HttpGet("")]
        public async Task<ActionResult<List<SkillSummary>>> All()
        {
            //
            // Validate Input Parameters
            //
            var data = await _securityGroupGetService.GetAllAsync();
            return Ok(data);
        }

        

        [HttpGet("items")]
        public async Task<ActionResult<List<ListItem>>> ListActive()
        {
            //
            // Validate Input Parameters
            //
            var data = await _securityGroupGetService.GetListItemsAsync();
            return Ok(data);
        }

        [HttpPost("filtered")]
        public async Task<ActionResult<List<SkillSummary>>> FilteredList(SecurityGroupFilteredListRequest filter)
        {
            //
            // Validate Input Parameters
            //
            if (filter == null)
            {
                throw new ArgumentNullException(nameof(filter));
            }

            var data = await _securityGroupGetService.GetFilteredAsync(filter);
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

            var data = await _securityGroupGetService.GetByIdAsync(securityGroupId);
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

            var data = await _securityGroupUpdateService.Update(securityGroupId, securityGroup);
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

            var data = await _securityGroupUpdateService.Create(securityGroup);
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

            var data = await _securityGroupUpdateService.Deactivate(securityGroupId);
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

            var data = await _securityGroupUpdateService.Activate(securityGroupId);
            return Ok(data);
        }

    }
}