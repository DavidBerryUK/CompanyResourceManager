using System;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using CRM.Database.Context;
using CRM.Models.Database.Interfaces;
using CRM.Models.Rest.BaseResponse;
using Microsoft.EntityFrameworkCore;

namespace CRM.Service.Repository.BaseCrudService.LowLevel
{
    internal static class Update<TEntity, TRestModel, TPrimaryKey>
            where TEntity : class, IDatabaseEntity<TPrimaryKey>
            where TRestModel : class, new()
    {
        public static async Task<BaseItemResponse<TRestModel>> UpdateAsync(
            CrmDatabaseContext dbContext,
            TPrimaryKey id,
            TRestModel model,
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
                response.ErrorMessage = $"{nameof(TEntity)} {id} not found";
                return response;
            }
            else
            {
                Mapper.Map(  model, data);
                await dbContext.SaveChangesAsync();
            }

            return await ReadItem<TEntity, TRestModel, TPrimaryKey>
                .GetAsync(
                    dbContext, 
                    id, 
                    queryInclude,
                    queryEqualsPrimaryKey);
        }
    }

}
