using CRM.Models.Database.Assets;
using CRM.Models.Rest.AssetType;
using CRM.Service.Repository.BaseServices.Interface;
using System;

namespace CRM.Service.Repository.AssetTypeServices.Interfaces
{
    public interface IAssetTypeCrudService : IBaseCrudService<AssetType ,AssetTypeSummary, AssetTypeExtended, Guid>
    {
    }
}
