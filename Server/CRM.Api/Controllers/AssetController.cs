using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CRM.Models.Rest.Asset;
using CRM.Models.Rest.Generic;
using CRM.Service.Repository.AssetServices.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace CRM.Api.Controllers
{
    [ApiController]
    [Route("api/asset")]
    public class AssetController : Controller
    {
        private readonly IAssetCrudService _assetCrudService;

        public AssetController(IAssetCrudService assetCrudService)
        {
            _assetCrudService = assetCrudService
                                ?? throw new ArgumentNullException(nameof(assetCrudService));
        }

        [HttpGet("")]
        public async Task<ActionResult<List<AssetSummary>>> All()
        {
            var data = await _assetCrudService.GetAllAsSummaryAsync();
            return Ok(data);
        }

        [HttpPost("filtered")]
        public async Task<ActionResult<List<AssetSummary>>> FilteredList(FilteredArchiveRequest filter)
        {
            //
            // Validate Input Parameters
            //
            if (filter == null)
            {
                throw new ArgumentNullException(nameof(filter));
            }

            var data = await _assetCrudService.GetFilteredAsSummaryAsync(filter);
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

            var data = await _assetCrudService.GetItemAsExtendedAsync(assetId);
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

            var data = await _assetCrudService.UpdateExtendedAsync(assetId, assetSummary);
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

            var data = await _assetCrudService.CreateAsync(assetSummary);
            return Ok(data);
        }

        [HttpPut("{assetId}/deactivate")]
        public async Task<ActionResult<AssetSummary>> Deactivate(Guid assetId)
        {
            var data = await _assetCrudService.UpdateActiveStatusAsync(assetId, false);
            return Ok(data);
        }

        [HttpPut("{assetId}/activate")]
        public async Task<ActionResult<AssetSummary>> Activate(Guid assetId)
        {
            var data = await _assetCrudService.UpdateActiveStatusAsync(assetId, true);
            return Ok(data);
        }
    }
}