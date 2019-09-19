using System;
using CRM.Models.Database.Interfaces;

namespace CRM.Models.Rest.Asset
{
    /// <summary>
    ///     Summary records are returned for lists with primary information,
    ///     note that drop down lists use the ListItem class
    /// </summary>
    public class AssetSummary
    {
        public Guid AssetId { get; set; }

        public Guid AssetTypeId { get; set; }

        public string Name { get; set; }

        public string BadgeNo { get; set; }

        public string Description { get; set; }

        public bool IsActive { get; set; }
    }
}