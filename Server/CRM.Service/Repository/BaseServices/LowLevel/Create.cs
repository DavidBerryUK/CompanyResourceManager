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
        where TEntity : class, IDatabaseEntityPrimaryKey<TPrimaryKey>
        where TRestModel : class, new()
    {
        public static async Task<BaseItemResponse<TRestModel>> CreateAsync(
            CrmDatabaseContext dbContext,
            IMapper mapper,
            TRestModel model,
            TPrimaryKey primaryKey,
            Func<IQueryable<TEntity>, IQueryable<TEntity>> queryInclude,
            Func<IQueryable<TEntity>, TPrimaryKey, IQueryable<TEntity>> queryEqualsPrimaryKey)
        {
            var entity = mapper.Map<TEntity>(model);
            entity.PrimaryKey = primaryKey;

            if (entity is IDatabaseEntitySupportsActiveProperty)
            {
                entity.IsActive = true;
            }

            await dbContext.AddAsync(entity);
            await dbContext.SaveChangesAsync();

            var response = await ReadItem<TEntity, TRestModel, TPrimaryKey>
                .GetAsync(dbContext,
                    mapper,
                    entity.PrimaryKey,
                    queryInclude,
                    queryEqualsPrimaryKey);

            return response;
        }
    }
}