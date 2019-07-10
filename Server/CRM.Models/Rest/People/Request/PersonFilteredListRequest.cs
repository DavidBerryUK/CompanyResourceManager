using CRM.Models.Rest.Enums;

namespace CRM.Models.Rest.People.Request
{
    public class PersonFilteredListRequest
    {
        public EnumRecordActiveStatus RecordActiveStatusFilter { get; set; }
    }
}
