using CRM.Models.Rest.Asset.Requests;
using CRM.Models.Rest.Asset.Response;
using CRM.Service.AssetServices.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CRM.Api.Controllers
{
    [ApiController]
    [Route("api/asset")]
    public class AssetController : Controller
    {
        private readonly IAssetGetService _assetGetService;
        private readonly IAssetUpdateService _assetUpdateService;


        public AssetController(
            IAssetGetService assetGetService, 
            IAssetUpdateService assetUpdateService)
        {
            _assetGetService = assetGetService;
            _assetUpdateService = assetUpdateService;
        }

        [HttpGet("")]
        public async Task<ActionResult<List<AssetSummary>>> All()
        {
            var data = await _assetGetService.GetAllAsync();
            return Ok(data);
        }

        [HttpPost("filtered")]
        public async Task<ActionResult<List<AssetSummary>>> FilteredList(AssetFilteredListRequest filter)
        {
            var data = await _assetGetService.GetFilteredAsync(filter);
            return Ok(data);
        }


        [HttpGet("{assetId}")]
        public async Task<ActionResult<AssetExtended>> GetById(Guid assetId)
        {
            var data = await _assetGetService.GetByIdAsync(assetId);
            return Ok(data);
        }

        [HttpPut("{assetId}")]
        public async Task<ActionResult<AssetExtended>> Update(Guid assetId, [FromBody] AssetExtended assetSummary)
        {
            var data = await _assetUpdateService.Update(assetId, assetSummary);
            return Ok(data);
        }

        [HttpPost("")]
        public async Task<ActionResult<AssetExtended>> Create([FromBody] AssetExtended assetSummary)
        {
            var data = await _assetUpdateService.Create(assetSummary);
            return Ok(data);
        }

        [HttpPut("{assetId}/deactivate")]
        public async Task<ActionResult<AssetSummary>> Deactivate(Guid assetId)
        {
            var data = await _assetUpdateService.Deactivate(assetId);
            return Ok(data);
        }

        [HttpPut("{assetId}/activate")]
        public async Task<ActionResult<AssetSummary>> Activate(Guid assetId)
        {
            var data = await _assetUpdateService.Activate(assetId);
            return Ok(data);
        }
    }
}