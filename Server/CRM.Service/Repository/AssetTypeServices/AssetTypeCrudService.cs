using AutoMapper;
using CRM.Database.Context;
using CRM.Models.Database.Assets;
using CRM.Models.Rest.AssetType;
using CRM.Service.Repository.AssetTypeServices.Interfaces;
using CRM.Service.Repository.BaseServices;
using System;
using System.Linq;

namespace CRM.Service.Repository.AssetTypeServices
{
    public class AssetTypeExtendedCrudService :
        BaseExtendedCrudService<AssetType, AssetTypeSummary, AssetTypeExtended, Guid>, IAssetTypeCrudService
    {
        public AssetTypeExtendedCrudService(CrmDatabaseContext dbContext, IMapper mapper) : base(dbContext, mapper)
        {
        }

        public override IQueryable<AssetType> QueryOrder(IQueryable<AssetType> query)
        {
            return query
                .OrderBy(order => order.Name);
        }


        public override Guid CreateNewPrimaryKey()
        {
            return Guid.NewGuid();
        }
    }
}