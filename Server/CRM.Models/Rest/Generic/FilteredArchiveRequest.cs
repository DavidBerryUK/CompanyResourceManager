using CRM.Models.Rest.Enums;

namespace CRM.Models.Rest.Generic
{
    public class FilteredArchiveRequest
    {
        public EnumRecordActiveStatus RecordActiveStatusFilter { get; set; }
    }
}