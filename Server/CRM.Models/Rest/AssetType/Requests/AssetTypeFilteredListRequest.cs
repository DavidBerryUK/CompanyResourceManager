using CRM.Models.Rest.Enums;

namespace CRM.Models.Rest.AssetType.Requests
{
    public class AssetTypeFilteredListRequest
    {
        public EnumRecordActiveStatus RecordActiveStatusFilter { get; set; }
    }
}
