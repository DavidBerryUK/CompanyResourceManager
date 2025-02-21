﻿using CRM.Models.Database.Assets;
using CRM.Models.Rest.Asset;
using CRM.Service.Repository.BaseServices.Interface;
using System;

namespace CRM.Service.Repository.AssetServices.Interfaces
{
    public interface IAssetCrudService : IBaseExtendedCrudService<Asset, AssetSummary, AssetExtended, Guid>
    {
    }
}