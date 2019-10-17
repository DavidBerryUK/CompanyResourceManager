using AutoMapper;
using CRM.Database.Context;
using CRM.Models.Database.Interfaces;
using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.Lists;
using CRM.Service.Repository.BaseServices.DirectSql;
using CRM.Service.Repository.BaseServices.Interface;
using CRM.Service.Repository.BaseServices.Models;
using CRM.Service.Repository.BaseServices.Sql;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace CRM.Service.Repository.BaseServices
{
    public class BaseListService<TReferenceEntity, TLinkEntity, TPrimaryKey>
        : IBaseListService<TReferenceEntity, TLinkEntity, TPrimaryKey>
        where TReferenceEntity : class, IDatabaseEntityPrimaryKey<TPrimaryKey>
        where TLinkEntity : class, IDatabaseLinkEntity<TPrimaryKey>
    {
        private readonly CrmDatabaseContext _crmDatabaseContext;
        private readonly IDirectSqlServices<TPrimaryKey> _directSqlServices;
        private readonly IMapper _mapper;

        public BaseListService(
            CrmDatabaseContext crmDatabaseContext,
            IMapper mapper,
            IDirectSqlServices<TPrimaryKey> directSqlServices)
        {
            _directSqlServices = directSqlServices
                                 ?? throw new ArgumentNullException(nameof(directSqlServices));
            _mapper = mapper
                      ?? throw new ArgumentNullException(nameof(mapper));

            _crmDatabaseContext = crmDatabaseContext
                                  ?? throw new ArgumentNullException(nameof(crmDatabaseContext));
        }

        public async Task<BaseCollectionResponse<ListItem>> GetAll()
        {
            var query = _crmDatabaseContext.Set<TReferenceEntity>();

            var data = await query.ToListAsync();

            var response = new BaseCollectionResponse<ListItem>
            {
                Items = _mapper.Map<List<ListItem>>(data)
            };

            return response;
        }


        public async Task<BaseCollectionResponse<ListItem>> GetSelectedOnly(
            Expression<Func<TReferenceEntity, TPrimaryKey>> referenceKeyProperty,
            Expression<Func<TLinkEntity, TPrimaryKey>> joinProperty,
            Expression<Func<TReferenceEntity, string>> textProperty,
            Expression<Func<TLinkEntity, TPrimaryKey>> filterProperty,
            TPrimaryKey filterValue
        )
        {
            var meta = new TableJoinMetaModel<TReferenceEntity, TLinkEntity, TPrimaryKey>(referenceKeyProperty,
                joinProperty, filterProperty, textProperty);
            var sql =
                ListServiceSqlGenerator<TReferenceEntity, TLinkEntity, TPrimaryKey>.CreateSqlListSelectedOnly(meta);
            var data = await _directSqlServices.GetListItemsFromSql(filterValue, sql);

            var response = new BaseCollectionResponse<ListItem>
            {
                Items = data
            };

            return response;
        }

        public async Task<BaseCollectionResponse<ListItem>> GetUnSelectedOnly(
            Expression<Func<TReferenceEntity, TPrimaryKey>> referenceKeyProperty,
            Expression<Func<TLinkEntity, TPrimaryKey>> joinProperty,
            Expression<Func<TReferenceEntity, string>> textProperty,
            Expression<Func<TLinkEntity, TPrimaryKey>> filterProperty,
            TPrimaryKey filterValue
        )
        {
            var meta = new TableJoinMetaModel<TReferenceEntity, TLinkEntity, TPrimaryKey>(referenceKeyProperty,
                joinProperty, filterProperty, textProperty);
            var sql =
                ListServiceSqlGenerator<TReferenceEntity, TLinkEntity, TPrimaryKey>.CreateSqlListInSelectedOnly(meta);
            var data = await _directSqlServices.GetListItemsFromSql(filterValue, sql);

            var response = new BaseCollectionResponse<ListItem>
            {
                Items = data
            };

            return response;
        }

        public async Task<BaseCollectionResponse<ListItem>> GetAllWithSelection(
            Expression<Func<TReferenceEntity, TPrimaryKey>> referenceKeyProperty,
            Expression<Func<TLinkEntity, TPrimaryKey>> joinProperty,
            Expression<Func<TReferenceEntity, string>> textProperty,
            Expression<Func<TLinkEntity, TPrimaryKey>> filterProperty,
            TPrimaryKey filterValue
        )
        {
            var meta = new TableJoinMetaModel<TReferenceEntity, TLinkEntity, TPrimaryKey>(referenceKeyProperty,
                joinProperty, filterProperty, textProperty);
            var sql =
                ListServiceSqlGenerator<TReferenceEntity, TLinkEntity, TPrimaryKey>.CreateSqlListWithSelectStatus(meta);
            var data = await _directSqlServices.GetListItemsFromSql(filterValue, sql);

            var response = new BaseCollectionResponse<ListItem>
            {
                Items = data
            };

            return response;
        }

        public async Task Update(
            Expression<Func<TLinkEntity, TPrimaryKey>> linkTableKey1Property,
            Expression<Func<TLinkEntity, TPrimaryKey>> linkTableKey2Property,
            TPrimaryKey key1Value,
            TPrimaryKey key2Value,
            bool selected)
        {
            var meta = new TableJoinMetaModel<TReferenceEntity, TLinkEntity, TPrimaryKey>(linkTableKey1Property,
                linkTableKey2Property);

            var sql = selected
                ? ListServiceSqlGenerator<TReferenceEntity, TLinkEntity, TPrimaryKey>.CreateSqlToInsertListItem(meta)
                : ListServiceSqlGenerator<TReferenceEntity, TLinkEntity, TPrimaryKey>.CreateSqlToDeleteListItem(meta);

            await _directSqlServices.ExecuteNoResultSql(sql, key1Value, key2Value);
        }
    }
}