using AutoMapper;
using CRM.Database.Context;
using CRM.Models.Database.Interfaces;
using CRM.Models.Rest.BaseResponse;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace CRM.Service.Repository.BaseServices.LowLevel
{
    internal static class ReadItem<TEntity, TRestModel, TPrimaryKey>
        where TEntity : class, IDatabaseEntityPrimaryKey<TPrimaryKey>
        where TRestModel : class, new()
    {
        public static async Task<BaseItemResponse<TRestModel>> GetAsync(
            CrmDatabaseContext dbContext,
            TPrimaryKey id,
            Func<IQueryable<TEntity>, IQueryable<TEntity>> queryInclude,
            Func<IQueryable<TEntity>, TPrimaryKey, IQueryable<TEntity>> queryEqualsPrimaryKey)
        {
            var response = new BaseItemResponse<TRestModel>();

            var query = dbContext.Set<TEntity>().AsQueryable();
            query = queryInclude(query);
            query = queryEqualsPrimaryKey(query, id);
            var data = await query.FirstOrDefaultAsync();

            if (data == null)
            {
                response.ErrorMessage = $"{typeof(TEntity).Name} {id} not found";
            }

            response.Entity = Mapper.Map<TRestModel>(data);

            return response;
        }
    }
}