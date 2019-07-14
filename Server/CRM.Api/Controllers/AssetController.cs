using CRM.Models.Rest.Asset;
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
            //
            // Validate Input Parameters
            //
            _assetGetService = assetGetService
                               ?? throw new ArgumentNullException(nameof(assetGetService));

            _assetUpdateService = assetUpdateService
                                  ?? throw new ArgumentNullException(nameof(assetUpdateService));
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
            //
            // Validate Input Parameters
            //
            if (filter == null)
            {
                throw new ArgumentNullException(nameof(filter));
            }

            var data = await _assetGetService.GetFilteredAsync(filter);
            return Ok(data);
        }


        [HttpGet("{assetId}")]
        public async Task<ActionResult<AssetExtended>> GetById(Guid assetId)
        {
            //
            // Validate Input Parameters
            //
            if (assetId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(assetId)} can not be blank");
            }

            var data = await _assetGetService.GetByIdAsync(assetId);
            return Ok(data);
        }

        [HttpPut("{assetId}")]
        public async Task<ActionResult<AssetExtended>> Update(Guid assetId, [FromBody] AssetExtended assetSummary)
        {
            //
            // Validate Input Parameters
            //
            if (assetId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(assetId)} can not be blank");
            }

            if (assetSummary == null)
            {
                throw new ArgumentNullException(nameof(assetSummary));
            }

            var data = await _assetUpdateService.Update(assetId, assetSummary);
            return Ok(data);
        }

        [HttpPost("")]
        public async Task<ActionResult<AssetExtended>> Create([FromBody] AssetExtended assetSummary)
        {
            //
            // Validate Input Parameters
            //
            if (assetSummary == null)
            {
                throw new ArgumentNullException(nameof(assetSummary));
            }

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