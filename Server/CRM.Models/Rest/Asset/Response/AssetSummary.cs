using System;

namespace CRM.Models.Rest.Asset.Response
{
    public class AssetSummary
    {
        public Guid AssetId { get; set; }

        public Guid AssetTypeId { get; set; }

        public string AssetTypeName { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public bool HasAssetBadge { get; set; }

        public bool HasOperatingSystem { get; set; }

        public string BadgeNo { get; set; }

        public bool IsActive { get; set; }

    }
}
