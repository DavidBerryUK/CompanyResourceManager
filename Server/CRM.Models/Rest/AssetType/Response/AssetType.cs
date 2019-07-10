using System;

namespace CRM.Models.Rest.AssetType.Response
{
    public class AssetType
    {
        public Guid AssetTypeId { get; set; }

        public string Name { get; set; }

        public bool HasAssetBadge { get; set; }

        public bool HasOperatingSystem { get; set; }

        public bool IsActive { get; set; }

    }
}
