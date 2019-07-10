using System;
using System.Collections.Generic;

namespace CRM.Models.Database
{
    public class AssetType
    {
        public Guid AssetTypeId { get; set; }

        public string Name { get; set; }

        public bool HasAssetBadge { get; set; }

        public bool HasOperatingSystem { get; set; }

        public bool IsActive { get; set; }

        public ICollection<Asset> NavAssets { get; set; }
    }
}
