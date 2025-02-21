﻿using AutoMapper;
using CRM.Database.Context;
using CRM.Models.Database.Assets;
using CRM.Models.Rest.Asset;
using CRM.Service.Repository.AssetServices.Interfaces;
using CRM.Service.Repository.BaseServices;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;

namespace CRM.Service.Repository.AssetServices
{
    public class AssetExtendedCrudService : BaseExtendedCrudService<Asset, AssetSummary, AssetExtended, Guid>,
        IAssetCrudService
    {
        public AssetExtendedCrudService(CrmDatabaseContext dbContext, IMapper mapper) : base(dbContext, mapper)
        {
        }

        public override IQueryable<Asset> QueryOrder(IQueryable<Asset> query)
        {
            return query
                .OrderBy(order => order.Name);
        }

        public override IQueryable<Asset> QuerySummaryInclude(IQueryable<Asset> query)
        {
            return query
                .Include(include => include.NavAssetType);
        }

        public override IQueryable<Asset> QueryExtendedInclude(IQueryable<Asset> query)
        {
            return query
                .Include(include => include.NavAssetType);
        }

        public override Guid CreateNewPrimaryKey()
        {
            return Guid.NewGuid();
        }
    }
}