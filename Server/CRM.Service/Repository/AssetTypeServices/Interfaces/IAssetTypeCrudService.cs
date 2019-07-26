using System;
using CRM.Models.Database.Assets;
using CRM.Models.Rest.AssetType;
using CRM.Service.Repository.BaseCrudService.Interface;

namespace CRM.Service.Repository.AssetTypeServices.Interfaces
{
    public interface IAssetTypeCrudService : IBaseCrudService<AssetType ,AssetTypeSummary, AssetTypeExtended, Guid>
    {
    }
}
