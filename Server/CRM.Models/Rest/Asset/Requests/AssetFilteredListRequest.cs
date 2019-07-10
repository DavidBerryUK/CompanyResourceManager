using CRM.Models.Rest.Enums;

namespace CRM.Models.Rest.Asset.Requests
{
    public class AssetFilteredListRequest
    {
        public EnumRecordActiveStatus RecordActiveStatusFilter { get; set; }
    }
}
