using CRM.Models.Database.Interfaces;
using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.Lists;
using System;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace CRM.Service.Repository.BaseServices.Interface
{
    public interface IBaseListService<TReferenceEntity, TLinkEntity, TPrimaryKey>
        where TReferenceEntity : class, IDatabaseEntityPrimaryKey<TPrimaryKey> 
        where TLinkEntity : class, IDatabaseLinkEntity<TPrimaryKey>
    {

        Task<BaseCollectionResponse<ListItem>> GetAll();

        Task<BaseCollectionResponse<ListItem>> GetAllWithSelection(
            Expression<Func<TReferenceEntity, TPrimaryKey>> referenceKeyProperty,
            Expression<Func<TLinkEntity, TPrimaryKey>> joinProperty,
            Expression<Func<TReferenceEntity, string>> textProperty,
            Expression<Func<TLinkEntity, TPrimaryKey>> filterProperty,
            TPrimaryKey filterValue
        );

        Task<BaseCollectionResponse<ListItem>> GetSelectedOnly(
            Expression<Func<TReferenceEntity, TPrimaryKey>> referenceKeyProperty,
            Expression<Func<TLinkEntity, TPrimaryKey>> joinProperty,
            Expression<Func<TReferenceEntity, string>> textProperty,
            Expression<Func<TLinkEntity, TPrimaryKey>> filterProperty,
            TPrimaryKey filterValue
        );

        Task<BaseCollectionResponse<ListItem>> GetUnSelectedOnly(
            Expression<Func<TReferenceEntity, TPrimaryKey>> referenceKeyProperty,
            Expression<Func<TLinkEntity, TPrimaryKey>> joinProperty,
            Expression<Func<TReferenceEntity, string>> textProperty,
            Expression<Func<TLinkEntity, TPrimaryKey>> filterProperty,
            TPrimaryKey filterValue
        );
    }
}