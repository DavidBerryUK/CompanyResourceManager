namespace CRM.Service.Repository.BaseServices.Models
{
    internal class TableJoinMetaModel
    {
        public string ReferenceTableName { get; set; }
        public string LinkTableName { get; set; }
        public string ReferenceTableKeyPropertyName { get; set; }
        public string ReferenceTableTextPropertyName { get; set; }
        public string LinkTableJoinPropertyName { get; set; }
        public string LinkTableFilterPropertyName { get; set; }
    }
}
