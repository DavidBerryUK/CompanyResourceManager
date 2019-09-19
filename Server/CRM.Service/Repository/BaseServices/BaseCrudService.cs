using CRM.Database.Context;
using CRM.Models.Database.Interfaces;
using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.Enums;
using CRM.Models.Rest.Generic;
using CRM.Models.Rest.Lists;
using CRM.Service.Repository.BaseServices.Interface;
using CRM.Service.Repository.BaseServices.LowLevel;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace CRM.Service.Repository.BaseServices
{
    public abstract class BaseCrudService<TEntity, TRestModel, TPrimaryKey>
        : IBaseCrudService<TEntity, TRestModel, TPrimaryKey>
        where TEntity : class, IDatabaseEntityPrimaryKey<TPrimaryKey>
        where TRestModel : class, new()
        where TPrimaryKey : new()
    {
        private readonly CrmDatabaseContext _dbContext;

        protected BaseCrudService(CrmDatabaseContext dbContext)
        {
            _dbContext = dbContext;
        }

        /// <summary>
        ///     Get a list of all entities
        /// </summary>
        /// <returns></returns>
        public async Task<BaseCollectionResponse<TRestModel>> GetAllAsync()
        {
            var data = await ReadCollection<TEntity, TRestModel, TPrimaryKey>
                .GetAsync(
                    _dbContext,
                    QuerySummaryInclude,
                    QueryOrder);

            return data;
        }

        public async Task<BaseCollectionResponse<TRestModel>> GetFilteredAsync(FilteredArchiveRequest filter)
        {
            var data = await ReadCollection<TEntity, TRestModel, TPrimaryKey>
                .GetAsync(
                    _dbContext,
                    QuerySummaryInclude,
                    QueryOrder,
                    query => QueryFilterIsActiveStatus(query, filter.RecordActiveStatusFilter));

            return data;
        }

        public async Task<BaseItemResponse<TRestModel>> GetItemAsync(TPrimaryKey id)
        {
            var data = await ReadItem<TEntity, TRestModel, TPrimaryKey>
                .GetAsync(
                    _dbContext,
                    id,
                    QuerySummaryInclude,
                    QueryEqualsPrimaryKey);

            return data;
        }

        public async Task<BaseCollectionResponse<ListItem>> GetActiveAsListItemsAsync()
        {
            var data = await ReadCollection<TEntity, ListItem, TPrimaryKey>
                .GetAsync(
                    _dbContext,
                    null,
                    QueryOrder,
                    query => QueryFilterIsActiveStatus(query, EnumRecordActiveStatus.Active));

            return data;
        }

        public async Task<BaseItemResponse<TRestModel>> UpdateActiveStatusAsync(TPrimaryKey id, bool isActive)
        {
            var data = await UpdateStatus<TEntity, TRestModel, TPrimaryKey>
                .UpdateAsync(
                    _dbContext,
                    id,
                    isActive,
                    QuerySummaryInclude,
                    QueryEqualsPrimaryKey);

            return data;
        }

        public async Task<BaseItemResponse<TRestModel>> UpdateAsync(
            TPrimaryKey id,
            TRestModel model)
        {
            var data = await Update<TEntity, TRestModel, TPrimaryKey>
                .UpdateAsync(
                    _dbContext,
                    id,
                    model,
                    QueryExtendedInclude,
                    QueryEqualsPrimaryKey);

            return data;
        }

        public async Task<BaseItemResponse<TRestModel>> CreateAsync(TRestModel model)
        {
            var data = await Create<TEntity, TRestModel, TPrimaryKey>
                .CreateAsync(
                    _dbContext,
                    model,
                    CreateNewPrimaryKey(),
                    QueryExtendedInclude,
                    QueryEqualsPrimaryKey);

            return data;
        }

        public virtual TPrimaryKey CreateNewPrimaryKey()
        {
            return new TPrimaryKey();
        }

        /// <summary>
        ///     Define the order of summary fetch
        /// </summary>
        /// <param name="query"></param>
        /// <returns></returns>
        public virtual IQueryable<TEntity> QueryOrder(IQueryable<TEntity> query)
        {
            return query;
        }

        /// <summary>
        ///     Define additional records to read
        /// </summary>
        /// <param name="query"></param>
        /// <returns></returns>
        public virtual IQueryable<TEntity> QuerySummaryInclude(IQueryable<TEntity> query)
        {
            return query;
        }

        /// <summary>
        ///     Define additional records to read
        /// </summary>
        /// <param name="query"></param>
        /// <returns></returns>
        public virtual IQueryable<TEntity> QueryExtendedInclude(IQueryable<TEntity> query)
        {
            return query;
        }

        private static IQueryable<TEntity> QueryEqualsPrimaryKey(IQueryable<TEntity> entity, TPrimaryKey value)
        {
            return entity.Where(o => o.PrimaryKey.Equals(value));
        }

        private static IQueryable<TEntity> QueryFilterIsActiveStatus(
            IQueryable<TEntity> query,
            EnumRecordActiveStatus isActiveStatus)
        {


            if (!(query is IQueryable<IDatabaseEntitySupportsActiveProperty>))
                return query;

            switch (isActiveStatus)
            {
                case EnumRecordActiveStatus.Active:
                    query = query
                        .Where(o => o.IsActive)
                        .AsQueryable();
                    break;

                case EnumRecordActiveStatus.InActive:
                    query = query
                        .Where(o => o.IsActive == false)
                        .AsQueryable();
                    break;

                case EnumRecordActiveStatus.All:
                    break;

                default:
                    throw new ArgumentOutOfRangeException();
            }

            return query;
        }
    }
}