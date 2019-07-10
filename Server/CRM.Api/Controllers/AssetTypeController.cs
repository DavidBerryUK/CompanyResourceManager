using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CRM.Models.Rest.AssetType.Requests;
using CRM.Models.Rest.AssetType.Response;
using CRM.Models.Rest.Lists;
using CRM.Service.AssetTypeServices.Interfaces;
using Microsoft.AspNetCore.Mvc;

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
        public async Task<ActionResult<List<AssetType>>> All()
        {
            var data = await _assetTypeGetService.GetAllAsync();
            return Ok(data);
        }

        [HttpGet("items")]
        public async Task<ActionResult<List<ListItem>>> ListShortActive()
        {
            var data = await _assetTypeGetService.GetListItemsAsync();
            return Ok(data);
        }

        [HttpPost("filtered")]
        public async Task<ActionResult<List<AssetType>>> FilteredList(AssetTypeFilteredListRequest filter)
        {
            var data = await _assetTypeGetService.GetFilteredAsync(filter);
            return Ok(data);
        }

        [HttpGet("{assetTypeId}")]
        public async Task<ActionResult<AssetType>> GetById(Guid assetTypeId)
        {
            var data = await _assetTypeGetService.GetByIdAsync(assetTypeId);
            return Ok(data);
        }


        [HttpPut("{assetTypeId}")]
        public async Task<ActionResult<AssetType>> Update(Guid assetTypeId, [FromBody] AssetType assetType)
        {
            var data = await _assetTypeUpdateService.Update(assetTypeId, assetType);
            return Ok(data);
        }

        [HttpPost("")]
        public async Task<ActionResult<AssetType>> Create([FromBody] AssetType assetType)
        {
            var data = await _assetTypeUpdateService.Create(assetType);
            return Ok(data);
        }

        [HttpPut("{assetTypeId}/deactivate")]
        public async Task<ActionResult<AssetType>> Deactivate(Guid assetTypeId)
        {
            var data = await _assetTypeUpdateService.Deactivate(assetTypeId);
            return Ok(data);
        }

        [HttpPut("{assetTypeId}/activate")]
        public async Task<ActionResult<AssetType>> Activate(Guid assetTypeId)
        {
            var data = await _assetTypeUpdateService.Activate(assetTypeId);
            return Ok(data);
        }

    }
}