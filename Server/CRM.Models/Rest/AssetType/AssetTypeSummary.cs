using System;

namespace CRM.Models.Rest.AssetType
{
    /// <summary>
    /// Summary records are returned for lists with primary information,
    ///   note that drop down lists use the ListItem class
    /// </summary>
    public class AssetTypeSummary
    {
        public Guid AssetTypeId { get; set; }

        public string Name { get; set; }

        public bool HasAssetBadge { get; set; }

        public bool HasOperatingSystem { get; set; }

        public bool IsActive { get; set; }

    }
}
