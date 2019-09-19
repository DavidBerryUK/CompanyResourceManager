using CRM.Models.Database.Interfaces;
using CRM.Service.Repository.BaseServices.Models;

namespace CRM.Service.Repository.BaseServices.Sql
{
    public class ListServiceSqlGenerator<TReferenceEntity, TLinkEntity, TPrimaryKey>
        where TReferenceEntity : class, IDatabaseEntityPrimaryKey<TPrimaryKey>
        where TLinkEntity : class, IDatabaseLinkEntity<TPrimaryKey>
    {
        internal static string CreateSqlListSelectedOnly(
            TableJoinMetaModel<TReferenceEntity, TLinkEntity, TPrimaryKey> meta)
        {
            var sql = "" +
                      $"SELECT  {meta.ReferenceTableName}.{meta.ReferenceTableKeyPropertyName}	AS [id], " +
                      $"	    {meta.ReferenceTableName}.{meta.ReferenceTableTextPropertyName} AS [name], " +
                      "\t\tCAST (1 AS BIT) [selected] " +
                      $"FROM	{meta.ReferenceTableName} " +
                      $"LEFT OUTER JOIN	{meta.LinkTableName} " +
                      $"ON		{meta.ReferenceTableName}.{meta.ReferenceTableKeyPropertyName} = {meta.LinkTableName}.{meta.LinkTableJoinPropertyName} " +
                      $"AND		{meta.LinkTableName}.{meta.LinkTableFilterPropertyName} = @FilterValue " +
                      $"WHERE	{meta.ReferenceTableName}.IsActive = 1 " +
                      $"AND	    {meta.LinkTableName}.{meta.LinkTableJoinPropertyName} IS NOT NULL " +
                      $"ORDER BY {meta.ReferenceTableName}.{meta.ReferenceTableTextPropertyName}";
            return sql;
        }

        internal static string CreateSqlListInSelectedOnly(
            TableJoinMetaModel<TReferenceEntity, TLinkEntity, TPrimaryKey> meta)
        {
            var sql = "" +
                      $"SELECT  {meta.ReferenceTableName}.{meta.ReferenceTableKeyPropertyName}	AS [id], " +
                      $"	    {meta.ReferenceTableName}.{meta.ReferenceTableTextPropertyName} AS [name], " +
                      "\t\tCAST (0 AS BIT) [selected] " +
                      $"FROM	{meta.ReferenceTableName} " +
                      $"LEFT OUTER JOIN	{meta.LinkTableName} " +
                      $"ON		{meta.ReferenceTableName}.{meta.ReferenceTableKeyPropertyName} = {meta.LinkTableName}.{meta.LinkTableJoinPropertyName} " +
                      $"AND		{meta.LinkTableName}.{meta.LinkTableFilterPropertyName} = @FilterValue " +
                      $"WHERE	{meta.ReferenceTableName}.IsActive = 1 " +
                      $"AND	    {meta.LinkTableName}.{meta.LinkTableJoinPropertyName} IS NULL " +
                      $"ORDER BY {meta.ReferenceTableName}.{meta.ReferenceTableTextPropertyName}";
            return sql;
        }

        internal static string CreateSqlListWithSelectStatus(
            TableJoinMetaModel<TReferenceEntity, TLinkEntity, TPrimaryKey> meta)
        {
            var sql = "" +
                      $"SELECT  {meta.ReferenceTableName}.{meta.ReferenceTableKeyPropertyName}	AS [id], " +
                      $"	    {meta.ReferenceTableName}.{meta.ReferenceTableTextPropertyName} AS [name], " +
                      "\t\tCASE " +
                      $"			WHEN {meta.LinkTableName}.{meta.LinkTableJoinPropertyName} IS NULL THEN CAST(0 as BIT) " +
                      "\t\t\tELSE CAST(1 as BIT) " +
                      "\t\tEND AS  [selected] " +
                      $"FROM	{meta.ReferenceTableName} " +
                      $"LEFT OUTER JOIN	{meta.LinkTableName} " +
                      $"ON		{meta.ReferenceTableName}.{meta.ReferenceTableKeyPropertyName} = {meta.LinkTableName}.{meta.LinkTableJoinPropertyName} " +
                      $"AND		{meta.LinkTableName}.{meta.LinkTableFilterPropertyName} = @FilterValue " +
                      $"WHERE	{meta.ReferenceTableName}.IsActive = 1 " +
                      $"ORDER BY {meta.ReferenceTableName}.{meta.ReferenceTableTextPropertyName}";
            return sql;
        }


        internal static string CreateSqlToDeleteListItem(
            TableJoinMetaModel<TReferenceEntity, TLinkEntity, TPrimaryKey> meta)
        {
            var sql = "DELETE " +
                      $"FROM    {meta.LinkTableName} " +
                      $"WHERE   {meta.LinkTableName}.{meta.LinkTableJoinKey1PropertyName} = @Key1 " +
                      $"AND		{meta.LinkTableName}.{meta.LinkTableJoinKey2PropertyName} = @Key2";

            return sql;
        }

        internal static string CreateSqlToInsertListItem(
            TableJoinMetaModel<TReferenceEntity, TLinkEntity, TPrimaryKey> meta)
        {
            var sql =
                "IF NOT EXISTS ( " +
                $" SELECT * FROM {meta.LinkTableName} " +
                $"  WHERE {meta.LinkTableJoinKey1PropertyName} = @Key1 " +
                $"  AND   {meta.LinkTableJoinKey2PropertyName} = @Key2 " +
                ") " +
                "BEGIN " +
                $"  INSERT INTO {meta.LinkTableName} " +
                $"  ({meta.LinkTableJoinKey1PropertyName}, {meta.LinkTableJoinKey2PropertyName} ) " +
                "  VALUES ( @Key1, @Key2 ) " +
                "END ";

            return sql;
        }
    }
}