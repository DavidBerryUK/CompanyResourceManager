using System;
using System.Collections.Generic;
using CRM.Models.Database.Interfaces;

namespace CRM.Models.Database.Assets
{
    /// <summary>
    ///     Database Entity Object
    /// </summary>
    public class Asset : IDatabaseEntityPrimaryKeyIsActive<Guid>
    {
        public Guid AssetId { get; set; }

        public Guid AssetTypeId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string BadgeNo { get; set; }

        //
        // Navigation to related Records
        //

        public AssetType NavAssetType { get; set; }

        public ICollection<PersonAsset> NavPersonAssets { get; set; }

        public bool IsActive { get; set; }

        // Interface IDatabaseEntityPrimaryKey
        public Guid PrimaryKey
        {
            get => AssetId;
            set => AssetId = value;
        }

        // Interface IDatabaseEntityPrimaryKey
    }
}