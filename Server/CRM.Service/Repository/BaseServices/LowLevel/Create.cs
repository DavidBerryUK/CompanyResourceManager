using AutoMapper;
using CRM.Database.Context;
using CRM.Models.Database.Interfaces;
using CRM.Models.Rest.BaseResponse;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace CRM.Service.Repository.BaseServices.LowLevel
{
    internal static class Create<TEntity, TRestModel, TPrimaryKey>
            where TEntity : class, IDatabaseEntity<TPrimaryKey>
            where TRestModel : class, new()
    {
        public static async Task<BaseItemResponse<TRestModel>> CreateAsync(
            CrmDatabaseContext dbContext,
            TRestModel model,
            Func<IQueryable<TEntity>, IQueryable<TEntity>> queryInclude,
            Func<IQueryable<TEntity>, TPrimaryKey, IQueryable<TEntity>> queryEqualsPrimaryKey)
        {
            var entity = Mapper.Map<TEntity>(model);
            await dbContext.AddAsync(entity);
            await dbContext.SaveChangesAsync();

            var response = await ReadItem<TEntity, TRestModel, TPrimaryKey>
                .GetAsync(dbContext,
                    entity.PrimaryKey,
                    queryInclude,
                    queryEqualsPrimaryKey);

            return response;
        }
    }
}