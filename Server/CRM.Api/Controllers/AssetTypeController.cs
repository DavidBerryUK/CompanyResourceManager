using CRM.Models.Rest.AssetType;
using CRM.Models.Rest.Generic;
using CRM.Models.Rest.Lists;
using CRM.Service.Repository.AssetTypeServices.Interfaces;
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
        
        private readonly IAssetTypeCrudService _assetTypeCrudService;


        public AssetTypeController(
            IAssetTypeCrudService assetTypeCrudService)
        {
            //
            // Validate Input Parameters
            //
            _assetTypeCrudService = assetTypeCrudService
                                   ?? throw new ArgumentNullException(nameof(assetTypeCrudService));
        }

        [HttpGet("")]
        public async Task<ActionResult<List<AssetTypeSummary>>> All()
        {
            var data = await _assetTypeCrudService.GetAllAsSummaryAsync();
            return Ok(data);
        }

        [HttpGet("items")]
        public async Task<ActionResult<List<ListItem>>> ListActive()
        {
            var data = await _assetTypeCrudService.GetActiveAsListItemsAsync();
            return Ok(data);
        }

        [HttpPost("filtered")]
        public async Task<ActionResult<List<AssetTypeSummary>>> FilteredList(FilteredArchiveRequest filter)
        {
            //
            // Validate Input Parameters
            //
            if (filter == null)
            {
                throw new ArgumentNullException(nameof(filter));
            }

            var data = await _assetTypeCrudService.GetFilteredAsSummaryAsync(filter);
            return Ok(data);
        }

        [HttpGet("{assetTypeId}")]
        public async Task<ActionResult<AssetTypeExtended>> GetById(Guid assetTypeId)
        {
            //
            // Validate Input Parameters
            //
            if (assetTypeId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(assetTypeId)} can not be blank");
            }

            var data = await _assetTypeCrudService.GetItemAsExtendedAsync(assetTypeId);
            return Ok(data);
        }


        [HttpPut("{assetTypeId}")]
        public async Task<ActionResult<AssetTypeExtended>> Update(Guid assetTypeId, [FromBody] AssetTypeExtended assetType)
        {
            //
            // Validate Input Parameters
            //
            if (assetTypeId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(assetTypeId)} can not be blank");
            }

            if (assetType == null)
            {
                throw new ArgumentNullException(nameof(assetType));
            }

            var data = await _assetTypeCrudService.UpdateAsync(assetTypeId, assetType);
            return Ok(data);
        }

        [HttpPost("")]
        public async Task<ActionResult<AssetTypeExtended>> Create([FromBody] AssetTypeExtended assetType)
        {
            //
            // Validate Input Parameters
            //
            if (assetType == null)
            {
                throw new ArgumentNullException(nameof(assetType));
            }

            var data = await _assetTypeCrudService.CreateAsync(assetType);
            return Ok(data);
        }

        [HttpPut("{assetTypeId}/deactivate")]
        public async Task<ActionResult<AssetTypeSummary>> Deactivate(Guid assetTypeId)
        {
            //
            // Validate Input Parameters
            //
            if (assetTypeId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(assetTypeId)} can not be blank");
            }

            var data = await _assetTypeCrudService.UpdateActiveStatusAsync(assetTypeId,false);
            return Ok(data);
        }

        [HttpPut("{assetTypeId}/activate")]
        public async Task<ActionResult<AssetTypeSummary>> Activate(Guid assetTypeId)
        {
            //
            // Validate Input Parameters
            //
            if (assetTypeId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(assetTypeId)} can not be blank");
            }

            var data = await _assetTypeCrudService.UpdateActiveStatusAsync(assetTypeId,true);
            return Ok(data);
        }

    }
}