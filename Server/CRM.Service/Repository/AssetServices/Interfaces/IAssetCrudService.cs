using System;
using CRM.Models.Database.Assets;
using CRM.Models.Rest.Asset;
using CRM.Service.Repository.BaseCrudService.Interface;

namespace CRM.Service.Repository.AssetServices.Interfaces
{
    public interface IAssetCrudService : IBaseCrudService<Asset ,AssetSummary, AssetExtended, Guid>
    {
    }
}
