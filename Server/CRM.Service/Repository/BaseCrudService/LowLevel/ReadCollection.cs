﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using CRM.Database.Context;
using CRM.Models.Database.Interfaces;
using CRM.Models.Rest.BaseResponse;
using Microsoft.EntityFrameworkCore;

namespace CRM.Service.Repository.BaseCrudService.LowLevel
{
    internal static class ReadCollection<TEntity, TRestModel, TPrimaryKey>
        where TEntity : class, IDatabaseEntity<TPrimaryKey>
        where TRestModel : class
    {
        public static async Task<BaseCollectionResponse<TRestModel>> GetAsync(
            CrmDatabaseContext dbContext,
            Func<IQueryable<TEntity>, IQueryable<TEntity>> queryInclude = null,
            Func<IQueryable<TEntity>, IQueryable<TEntity>> querySort = null,
            Func<IQueryable<TEntity>, IQueryable<TEntity>> queryFilter = null)
        {
            var response = new BaseCollectionResponse<TRestModel>();

            var query = dbContext.Set<TEntity>().AsQueryable();

            if (queryInclude != null)
            {
                query = queryInclude(query);
            }

            if (queryFilter != null)
            {
                query = queryFilter(query);
            }

            if (querySort != null)
            {
                query = querySort(query);
            }

            var data = await query.ToListAsync();

            response.Items = Mapper.Map<List<TRestModel>>(data);

            return response;
        }
    }
}