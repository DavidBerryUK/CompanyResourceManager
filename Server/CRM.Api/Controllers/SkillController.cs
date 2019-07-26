using CRM.Models.Rest.Generic;
using CRM.Models.Rest.Lists;
using CRM.Models.Rest.Skill;
using CRM.Service.Repository.PersonServices.Interfaces;
using CRM.Service.Repository.SkillServices.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CRM.Api.Controllers
{
    [ApiController]
    [Route("api/skill")]
    public class SkillController : Controller
    {
        private readonly ISkillCrudService _skillCrudService;
        private readonly IPersonSimpleQueryService _personSimpleQueryService;


        public SkillController(
            ISkillCrudService skillCrudService,
            IPersonSimpleQueryService personSimpleQueryService)
        {
            //
            // Validate Input Parameters
            //
            _skillCrudService = skillCrudService
                                 ?? throw new ArgumentNullException(nameof(skillCrudService));

            _personSimpleQueryService = personSimpleQueryService 
                                ?? throw new ArgumentNullException(nameof(personSimpleQueryService));
        }

        [HttpGet("")]
        public async Task<ActionResult<List<SkillSummary>>> All()
        {
            //
            // Validate Input Parameters
            //
            var data = await _skillCrudService.GetAllAsSummaryAsync();
            return Ok(data);
        }

        [HttpGet("{skillId}/Person")]
        public async Task<ActionResult<SkillSummary>> GetPersonForSkill(Guid skillId)
        {
            //
            // Validate Input Parameters
            //
            if (skillId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(skillId)} can not be blank");
            }

            var data = await _personSimpleQueryService.GetWithFilterAsync(skillId: skillId);
            return Ok(data);
        }

        [HttpGet("items")]
        public async Task<ActionResult<List<ListItem>>> ListActive()
        {
            //
            // Validate Input Parameters
            //
            var data = await _skillCrudService.GetActiveAsListItemsAsync();
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

            var data = await _skillCrudService.GetFilteredAsSummaryAsync(filter);
            return Ok(data);
        }

        [HttpGet("{skillId}")]
        public async Task<ActionResult<SkillExtended>> GetById(Guid skillId)
        {
            //
            // Validate Input Parameters
            //
            if (skillId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(skillId)} can not be blank");
            }

            var data = await _skillCrudService.GetItemAsExtendedAsync(skillId);
            return Ok(data);
        }


        [HttpPut("{skillId}")]
        public async Task<ActionResult<SkillExtended>> Update(Guid skillId, [FromBody] SkillExtended skill)
        {
            //
            // Validate Input Parameters
            //
            if (skillId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(skillId)} can not be blank");
            }

            if (skill == null)
            {
                throw new ArgumentNullException(nameof(skill));
            }

            var data = await _skillCrudService.UpdateAsync(skillId, skill);
            return Ok(data);
        }

        [HttpPost("")]
        public async Task<ActionResult<SkillExtended>> Create([FromBody] SkillExtended skill)
        {
            //
            // Validate Input Parameters
            //
            if (skill == null)
            {
                throw new ArgumentNullException(nameof(skill));
            }

            var data = await _skillCrudService.CreateAsync(skill);
            return Ok(data);
        }

        [HttpPut("{skillId}/deactivate")]
        public async Task<ActionResult<SkillSummary>> Deactivate(Guid skillId)
        {
            //
            // Validate Input Parameters
            //
            if (skillId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(skillId)} can not be blank");
            }

            var data = await _skillCrudService.UpdateActiveStatusAsync(skillId,false);
            return Ok(data);
        }

        [HttpPut("{skillId}/activate")]
        public async Task<ActionResult<SkillSummary>> Activate(Guid skillId)
        {
            //
            // Validate Input Parameters
            //
            if (skillId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(skillId)} can not be blank");
            }

            var data = await _skillCrudService.UpdateActiveStatusAsync(skillId, true);
            return Ok(data);
        }

    }
}