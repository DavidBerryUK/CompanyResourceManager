using CRM.Models.Rest.Enums;

namespace CRM.Models.Rest.Security
{
    public class SecurityGroupFilteredListRequest
    {
        public EnumRecordActiveStatus RecordActiveStatusFilter { get; set; }
    }
}
