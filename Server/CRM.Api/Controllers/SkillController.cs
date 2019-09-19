using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CRM.Models.Rest.Generic;
using CRM.Models.Rest.Lists;
using CRM.Models.Rest.Skill;
using CRM.Service.Repository.PersonServices.Interfaces;
using CRM.Service.Repository.SkillServices.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace CRM.Api.Controllers
{
    [ApiController]
    [Route("api/skill")]
    public class SkillController : Controller
    {
        private readonly IPersonSimpleQueryService _personSimpleQueryService;
        private readonly ISkillCrudService _skillCrudService;
        private readonly ISkillListService _skillListService;


        public SkillController(
            ISkillCrudService skillCrudService,
            IPersonSimpleQueryService personSimpleQueryService,
            ISkillListService skillListService)
        {
            //
            // Validate Input Parameters
            //
            _skillCrudService = skillCrudService
                                ?? throw new ArgumentNullException(nameof(skillCrudService));

            _personSimpleQueryService = personSimpleQueryService
                                        ?? throw new ArgumentNullException(nameof(personSimpleQueryService));

            _skillListService = skillListService
                                ?? throw new ArgumentNullException(nameof(skillListService));
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

            var data = await _skillCrudService.UpdateExtendedAsync(skillId, skill);
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

            var data = await _skillCrudService.UpdateActiveStatusAsync(skillId, false);
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

        [HttpGet("list")]
        public async Task<ActionResult<List<ListItem>>> ListAll()
        {
            var data = await _skillListService.GetAll();
            return Ok(data);
        }

        [HttpGet("list/person/{personId}/all")]
        public async Task<ActionResult<List<ListItem>>> ListAllWithSelection(Guid personId)
        {
            var data = await _skillListService.GetAllWithSelectionForPerson(personId);
            return Ok(data);
        }

        [HttpGet("list/person/{personId}/selected")]
        public async Task<ActionResult<List<ListItem>>> ListSelected(Guid personId)
        {
            var data = await _skillListService.GetSelectedForPerson(personId);
            return Ok(data);
        }

        [HttpGet("list/person/{personId}/unselected")]
        public async Task<ActionResult<List<ListItem>>> ListUnselected(Guid personId)
        {
            var data = await _skillListService.GetUnSelectedForPerson(personId);
            return Ok(data);
        }

        [HttpPut("list/{skillId}/person/{personId}/{selected}")]
        public async Task<ActionResult<List<ListItem>>> ListUnselected(Guid skillId, Guid personId, bool selected)
        {
            await _skillListService.Update(skillId, personId, selected);
            return Ok();
        }
    }
}