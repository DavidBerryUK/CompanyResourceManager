using System;

namespace CRM.Models.Rest.Asset.Response
{
    public class Asset
    {
        public Guid AssetId { get; set; }

        public Guid AssetTypeId { get; set; }

        public string Name { get; set; }

        public string BadgeNo { get; set; }

        public string Description { get; set; }

        public bool IsActive { get; set; }
    }
}
