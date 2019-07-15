using CRM.Models.Rest.Skill;
using CRM.Models.Rest.Lists;
using CRM.Service.JobRoleServices.Interfaces;
using CRM.Service.PersonServices.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CRM.Service.SkillServices.Interfaces;

namespace CRM.Api.Controllers
{
    [ApiController]
    [Route("api/skill")]
    public class SkillController : Controller
    {
        private readonly ISkillGetService _skillGetService;
        private readonly ISkillUpdateService _skillUpdateService;
        private readonly IPersonGetService _personGetService;
        private readonly IPersonSimpleQueryService _personSimpleQueryService;


        public SkillController(
            ISkillGetService skillGetService,
            ISkillUpdateService skillUpdateService, 
            IPersonGetService personGetService, 
            IPersonSimpleQueryService personSimpleQueryService)
        {
            //
            // Validate Input Parameters
            //
            _skillGetService = skillGetService
                                 ?? throw new ArgumentNullException(nameof(skillGetService));

            _skillUpdateService = skillUpdateService
                                    ?? throw new ArgumentNullException(nameof(skillUpdateService));

            _personGetService = personGetService
                                ?? throw new ArgumentNullException(nameof(personGetService));

            _personSimpleQueryService = personSimpleQueryService 
                                ?? throw new ArgumentNullException(nameof(personSimpleQueryService));
        }

        [HttpGet("")]
        public async Task<ActionResult<List<SkillSummary>>> All()
        {
            //
            // Validate Input Parameters
            //
            var data = await _skillGetService.GetAllAsync();
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
            var data = await _skillGetService.GetListItemsAsync();
            return Ok(data);
        }

        [HttpPost("filtered")]
        public async Task<ActionResult<List<SkillSummary>>> FilteredList(SkillFilteredListRequest filter)
        {
            //
            // Validate Input Parameters
            //
            if (filter == null)
            {
                throw new ArgumentNullException(nameof(filter));
            }

            var data = await _skillGetService.GetFilteredAsync(filter);
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

            var data = await _skillGetService.GetByIdAsync(skillId);
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

            var data = await _skillUpdateService.Update(skillId, skill);
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

            var data = await _skillUpdateService.Create(skill);
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

            var data = await _skillUpdateService.Deactivate(skillId);
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

            var data = await _skillUpdateService.Activate(skillId);
            return Ok(data);
        }

    }
}