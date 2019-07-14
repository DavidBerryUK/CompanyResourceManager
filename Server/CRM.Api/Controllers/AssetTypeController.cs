using CRM.Models.Rest.AssetType;
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
            //
            // Validate Input Parameters
            //
            _assetTypeGetService = assetTypeGetService
                                   ?? throw new ArgumentNullException(nameof(assetTypeGetService));

            _assetTypeUpdateService = assetTypeUpdateService
                                      ?? throw new ArgumentNullException(nameof(assetTypeUpdateService));
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
            //
            // Validate Input Parameters
            //
            if (filter == null)
            {
                throw new ArgumentNullException(nameof(filter));
            }

            var data = await _assetTypeGetService.GetFilteredAsync(filter);
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

            var data = await _assetTypeGetService.GetByIdAsync(assetTypeId);
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

            var data = await _assetTypeUpdateService.Update(assetTypeId, assetType);
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

            var data = await _assetTypeUpdateService.Create(assetType);
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

            var data = await _assetTypeUpdateService.Deactivate(assetTypeId);
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

            var data = await _assetTypeUpdateService.Activate(assetTypeId);
            return Ok(data);
        }

    }
}