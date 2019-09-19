using System;
using System.Linq;
using CRM.Database.Context;
using CRM.Models.Database.Assets;
using CRM.Models.Rest.AssetType;
using CRM.Service.Repository.AssetTypeServices.Interfaces;
using CRM.Service.Repository.BaseServices;

namespace CRM.Service.Repository.AssetTypeServices
{
    public class AssetTypeExtendedCrudService :
        BaseExtendedCrudService<AssetType, AssetTypeSummary, AssetTypeExtended, Guid>, IAssetTypeCrudService
    {
        public AssetTypeExtendedCrudService(CrmDatabaseContext dbContext) : base(dbContext)
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