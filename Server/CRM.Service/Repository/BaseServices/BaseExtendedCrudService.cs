﻿using AutoMapper;
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
    public abstract class BaseExtendedCrudService<TEntity, TSummary, TExtended, TPrimaryKey>
        : IBaseExtendedCrudService<TEntity, TSummary, TExtended, TPrimaryKey>
        where TEntity : class, IDatabaseEntityPrimaryKey<TPrimaryKey>
        where TSummary : class, new()
        where TExtended : class, new()
        where TPrimaryKey : new()
    {
        private readonly CrmDatabaseContext _dbContext;
        private readonly IMapper _mapper;

        protected BaseExtendedCrudService(
            CrmDatabaseContext dbContext,
            IMapper mapper)
        {
            _dbContext = dbContext
                ?? throw new ArgumentNullException(nameof(dbContext));

            _mapper = mapper
                ?? throw new ArgumentNullException(nameof(mapper));
        }

        /// <summary>
        ///     Get a list of all entities
        /// </summary>
        /// <returns></returns>
        public async Task<BaseCollectionResponse<TSummary>> GetAllAsSummaryAsync()
        {
            var data = await ReadCollection<TEntity, TSummary, TPrimaryKey>
                .GetAsync(
                    _dbContext,
                    _mapper,
                    QuerySummaryInclude,
                    QueryOrder);

            return data;
        }

        public async Task<BaseCollectionResponse<TExtended>> GetAllAsExtendedAsync()
        {
            var data = await ReadCollection<TEntity, TExtended, TPrimaryKey>
                .GetAsync(
                    _dbContext,
                    _mapper,
                    QueryExtendedInclude,
                    QueryOrder);

            return data;
        }

        public async Task<BaseCollectionResponse<TSummary>> GetFilteredAsSummaryAsync(FilteredArchiveRequest filter)
        {
            var data = await ReadCollection<TEntity, TSummary, TPrimaryKey>
                .GetAsync(
                    _dbContext,
                    _mapper,
                    QuerySummaryInclude,
                    QueryOrder,
                    query => QueryFilterIsActiveStatus(query, filter.RecordActiveStatusFilter));

            return data;
        }

        public async Task<BaseCollectionResponse<TExtended>> GetFilteredAsExtendedAsync(FilteredArchiveRequest filter)
        {
            var data = await ReadCollection<TEntity, TExtended, TPrimaryKey>
                .GetAsync(
                    _dbContext,
                    _mapper,
                    QueryExtendedInclude,
                    QueryOrder,
                    query => QueryFilterIsActiveStatus(query, filter.RecordActiveStatusFilter));

            return data;
        }

        public async Task<BaseItemResponse<TSummary>> GetItemAsSummaryAsync(TPrimaryKey id)
        {
            var data = await ReadItem<TEntity, TSummary, TPrimaryKey>
                .GetAsync(
                    _dbContext,
                    _mapper,
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

        public async Task<BaseItemResponse<TExtended>> GetItemAsExtendedAsync(TPrimaryKey id)
        {
            var data = await ReadItem<TEntity, TExtended, TPrimaryKey>
                .GetAsync(
                    _dbContext,
                    _mapper,
                    id,
                    QueryExtendedInclude,
                    QueryEqualsPrimaryKey);

            return data;
        }

        public async Task<BaseItemResponse<TSummary>> UpdateActiveStatusAsync(TPrimaryKey id, bool isActive)
        {
            var data = await UpdateStatus<TEntity, TSummary, TPrimaryKey>
                .UpdateAsync(
                    _dbContext,
                    _mapper,
                    id,
                    isActive,
                    QuerySummaryInclude,
                    QueryEqualsPrimaryKey);

            return data;
        }

        public async Task<BaseItemResponse<TExtended>> UpdateExtendedAsync(
            TPrimaryKey id,
            TExtended model)
        {
            var data = await Update<TEntity, TExtended, TPrimaryKey>
                .UpdateAsync(
                    _dbContext,
                    _mapper,
                    id,
                    model,
                    QueryExtendedInclude,
                    QueryEqualsPrimaryKey);

            return data;
        }

        public async Task<BaseItemResponse<TSummary>> UpdateSummaryAsync(TPrimaryKey id, TSummary model)
        {
            var data = await Update<TEntity, TSummary, TPrimaryKey>
                .UpdateAsync(
                    _dbContext,
                    _mapper,
                    id,
                    model,
                    QuerySummaryInclude,
                    QueryEqualsPrimaryKey);

            return data;
        }

        public async Task<BaseItemResponse<TExtended>> CreateAsync(TExtended model)
        {
            var data = await Create<TEntity, TExtended, TPrimaryKey>
                .CreateAsync(
                    _dbContext,
                    _mapper,
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

        private static IQueryable<TEntity> QueryFilterIsActiveStatus(IQueryable<TEntity> query,
            EnumRecordActiveStatus isActiveStatus)
        {
            if (!(query is IQueryable<IDatabaseEntitySupportsActiveProperty> ))
                return query;

            switch (isActiveStatus)
            {
                case EnumRecordActiveStatus.Active:
                    query = query.Where(o => o.IsActive).AsQueryable();
                    break;

                case EnumRecordActiveStatus.InActive:
                    query = query.Where(o => o.IsActive == false).AsQueryable();
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