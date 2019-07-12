using CRM.Models.Rest.Enums;

namespace CRM.Models.Rest.Person.Request
{
    public class PersonFilteredListRequest
    {
        public EnumRecordActiveStatus RecordActiveStatusFilter { get; set; }
    }
}
