using CRM.Models.Rest.AssetType.Requests;
using CRM.Models.Rest.AssetType.Response;
using CRM.Models.Rest.Lists;
using CRM.Service.AssetTypeServices.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CRM.Api.Controllers
{
    [ApiController]
    [Route("api/assettype")]
    public class AssetTypeController : Controller
    {
        private readonly IAssetTypeGetService _assetTypeGetService;
        private readonly IAssetTypeUpdateService _assetTypeUpdateService;


        public AssetTypeController(
            IAssetTypeGetService assetTypeGetService, 
            IAssetTypeUpdateService assetTypeUpdateService)
        {
            _assetTypeGetService = assetTypeGetService;
            _assetTypeUpdateService = assetTypeUpdateService;
        }

        [HttpGet("")]
        public async Task<ActionResult<List<AssetTypeSummary>>> All()
        {
            var data = await _assetTypeGetService.GetAllAsync();
            return Ok(data);
        }

        [HttpGet("items")]
        public async Task<ActionResult<List<ListItem>>> ListActive()
        {
            var data = await _assetTypeGetService.GetListItemsAsync();
            return Ok(data);
        }

        [HttpPost("filtered")]
        public async Task<ActionResult<List<AssetTypeSummary>>> FilteredList(AssetTypeFilteredListRequest filter)
        {
            var data = await _assetTypeGetService.GetFilteredAsync(filter);
            return Ok(data);
        }

        [HttpGet("{assetTypeId}")]
        public async Task<ActionResult<AssetTypeExtended>> GetById(Guid assetTypeId)
        {
            var data = await _assetTypeGetService.GetByIdAsync(assetTypeId);
            return Ok(data);
        }


        [HttpPut("{assetTypeId}")]
        public async Task<ActionResult<AssetTypeExtended>> Update(Guid assetTypeId, [FromBody] AssetTypeSummary assetTypeSummary)
        {
            var data = await _assetTypeUpdateService.Update(assetTypeId, assetTypeSummary);
            return Ok(data);
        }

        [HttpPost("")]
        public async Task<ActionResult<AssetTypeExtended>> Create([FromBody] AssetTypeExtended assetTypeSummary)
        {
            var data = await _assetTypeUpdateService.Create(assetTypeSummary);
            return Ok(data);
        }

        [HttpPut("{assetTypeId}/deactivate")]
        public async Task<ActionResult<AssetTypeSummary>> Deactivate(Guid assetTypeId)
        {
            var data = await _assetTypeUpdateService.Deactivate(assetTypeId);
            return Ok(data);
        }

        [HttpPut("{assetTypeId}/activate")]
        public async Task<ActionResult<AssetTypeSummary>> Activate(Guid assetTypeId)
        {
            var data = await _assetTypeUpdateService.Activate(assetTypeId);
            return Ok(data);
        }

    }
}