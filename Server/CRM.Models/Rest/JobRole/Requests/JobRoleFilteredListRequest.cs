using CRM.Models.Rest.Enums;

namespace CRM.Models.Rest.JobRole.Requests
{
    public class JobRoleFilteredListRequest
    {
        public EnumRecordActiveStatus RecordActiveStatusFilter { get; set; }
    }
}
