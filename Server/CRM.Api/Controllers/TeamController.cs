using CRM.Models.Rest.Generic;
using CRM.Models.Rest.Lists;
using CRM.Models.Rest.Skill;
using CRM.Models.Rest.Team;
using CRM.Service.Repository.TeamServices.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CRM.Service.Repository.TeamServices;

namespace CRM.Api.Controllers
{
    [ApiController]
    [Route("api/team")]
    public class TeamController : Controller
    {
        private readonly ITeamCrudService _teamCrudService;
        private readonly ITeamListService _teamListService;

        public TeamController(
            ITeamCrudService teamCrudService, 
            ITeamListService teamListService)
        {
            //
            // Validate Input Parameters
            //
            _teamCrudService = teamCrudService
                    ?? throw new ArgumentNullException(nameof(teamCrudService));

            _teamListService = teamListService
                    ?? throw new ArgumentNullException(nameof(teamListService));
        }

        [HttpGet("")]
        public async Task<ActionResult<List<SkillSummary>>> All()
        {
            //
            // Validate Input Parameters
            //
            var data = await _teamCrudService.GetAllAsSummaryAsync();
            return Ok(data);
        }

        [HttpPost("filtered")]
        public async Task<ActionResult<List<TeamSummary>>> FilteredList(FilteredArchiveRequest filter)
        {
            //
            // Validate Input Parameters
            //
            if (filter == null)
            {
                throw new ArgumentNullException(nameof(filter));
            }

            var data = await _teamCrudService.GetFilteredAsSummaryAsync(filter);
            return Ok(data);
        }

        [HttpGet("{teamId}")]
        public async Task<ActionResult<TeamExtended>> GetById(Guid teamId)
        {
            //
            // Validate Input Parameters
            //
            if (teamId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(teamId)} can not be blank");
            }

            var data = await _teamCrudService.GetItemAsExtendedAsync(teamId);
            return Ok(data);
        }


        [HttpPut("{teamId}")]
        public async Task<ActionResult<TeamExtended>> Update(Guid teamId, [FromBody] TeamExtended team)
        {
            //
            // Validate Input Parameters
            //
            if (teamId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(teamId)} can not be blank");
            }

            if (team == null)
            {
                throw new ArgumentNullException(nameof(team));
            }

            var data = await _teamCrudService.UpdateAsync(teamId, team);
            return Ok(data);
        }

        [HttpPost("")]
        public async Task<ActionResult<TeamExtended>> Create([FromBody] TeamExtended team)
        {
            //
            // Validate Input Parameters
            //
            if (team == null)
            {
                throw new ArgumentNullException(nameof(team));
            }

            var data = await _teamCrudService.CreateAsync(team);
            return Ok(data);
        }

        [HttpPut("{teamId}/deactivate")]
        public async Task<ActionResult<TeamSummary>> Deactivate(Guid teamId)
        {
            //
            // Validate Input Parameters
            //
            if (teamId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(teamId)} can not be blank");
            }

            var data = await _teamCrudService.UpdateActiveStatusAsync(teamId,false);
            return Ok(data);
        }

        [HttpPut("{teamId}/activate")]
        public async Task<ActionResult<TeamSummary>> Activate(Guid teamId)
        {
            //
            // Validate Input Parameters
            //
            if (teamId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(teamId)} can not be blank");
            }

            var data = await _teamCrudService.UpdateActiveStatusAsync(teamId, true);
            return Ok(data);
        }

        [HttpGet("items")]
        public async Task<ActionResult<List<ListItem>>> ItemsActive()
        {
            //
            // Validate Input Parameters
            //
            var data = await _teamCrudService.GetActiveAsListItemsAsync();
            return Ok(data);
        }

        [HttpGet("DevelopTestGetAll")]
        public async Task<ActionResult<List<ListItem>>> List()
        {
        
            var data = await _teamListService.GetAll();
            return Ok(data);
        }

        [HttpGet("DevelopTestGetForDate")]
        public async Task<ActionResult<List<ListItem>>> ListDave()
        {

            var data = await _teamListService.GetAllWithSelectionForPerson(
                Guid.Parse("326F4B79-A524-4190-9524-F682E0AACB0E"));
            return Ok(data);
        }

    }
}