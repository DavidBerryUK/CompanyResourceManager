using CRM.Models.Database.Interfaces;
using System;
using System.Linq.Expressions;

namespace CRM.Service.Repository.BaseServices.Models
{
    internal class TableJoinMetaModel<TReferenceEntity, TLinkEntity, TPrimaryKey>
        where TReferenceEntity : class, IDatabaseEntity<TPrimaryKey>
        where TLinkEntity : class, IDatabaseLinkEntity<TPrimaryKey>
    {
        public TableJoinMetaModel (
            Expression<Func<TReferenceEntity, TPrimaryKey>> referenceKeyProperty,
            Expression<Func<TLinkEntity, TPrimaryKey>> joinProperty,
            Expression<Func<TLinkEntity, TPrimaryKey>> filterProperty,
            Expression<Func<TReferenceEntity, string>> textProperty)
        {
            if (!(referenceKeyProperty.Body is MemberExpression referenceKeyFieldMember))
            {
                throw new ArgumentException($"${nameof(referenceKeyProperty)} is not a valid member expression");
            }

            if (!(joinProperty.Body is MemberExpression joinFieldMember))
            {
                throw new ArgumentException($"${nameof(joinProperty)} is not a valid member expression");
            }

            if (!(filterProperty.Body is MemberExpression filterFieldMember))
            {
                throw new ArgumentException($"${nameof(filterProperty)} is not a valid member expression");
            }

            if (!(textProperty.Body is MemberExpression textFieldMember))
            {
                throw new ArgumentException($"${nameof(textProperty)} is not a valid member expression");
            }


            ReferenceTableName = typeof(TReferenceEntity).Name;
            LinkTableName = typeof(TLinkEntity).Name;
            ReferenceTableKeyPropertyName = referenceKeyFieldMember.Member.Name;
            LinkTableJoinPropertyName = joinFieldMember.Member.Name;
            LinkTableFilterPropertyName = filterFieldMember.Member.Name;
            ReferenceTableTextPropertyName = textFieldMember.Member.Name;

        }

        public TableJoinMetaModel(
            Expression<Func<TLinkEntity, TPrimaryKey>> linkTableKey1Property,
            Expression<Func<TLinkEntity, TPrimaryKey>> linkTableKey2Property)
        {
            if (!(linkTableKey1Property.Body is MemberExpression linkTableKey1FieldMember))
            {
                throw new ArgumentException($"${nameof(linkTableKey1FieldMember)} is not a valid member expression");
            }

            if (!(linkTableKey2Property.Body is MemberExpression linkTableKey2FieldMember))
            {
                throw new ArgumentException($"${nameof(linkTableKey2FieldMember)} is not a valid member expression");
            }

            LinkTableName = typeof(TLinkEntity).Name;
            LinkTableJoinKey1PropertyName = linkTableKey1FieldMember.Member.Name;
            LinkTableJoinKey2PropertyName = linkTableKey2FieldMember.Member.Name;

        }
        public string ReferenceTableName { get; set; }
        public string LinkTableName { get; set; }
        public string ReferenceTableKeyPropertyName { get; set; }
        public string ReferenceTableTextPropertyName { get; set; }
        public string LinkTableJoinPropertyName { get; set; }
        public string LinkTableFilterPropertyName { get; set; }
        public string LinkTableJoinKey1PropertyName { get; set; }
        public string LinkTableJoinKey2PropertyName { get; set; }
    }
}
