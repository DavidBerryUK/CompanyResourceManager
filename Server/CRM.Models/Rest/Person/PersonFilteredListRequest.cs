using CRM.Models.Rest.Enums;

namespace CRM.Models.Rest.Person
{
    public class PersonFilteredListRequest
    {
        public EnumRecordActiveStatus RecordActiveStatusFilter { get; set; }
    }
}
