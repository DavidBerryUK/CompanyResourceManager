﻿using System;
using System.Collections.Generic;
using CRM.Models.Database.Interfaces;

namespace CRM.Models.Database.Assets
{
    /// <summary>
    /// Database Entity Object
    /// </summary>
    public class Asset : IDatabaseEntity<Guid>
    {
        public Guid AssetId { get; set; }

        public Guid AssetTypeId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string BadgeNo { get; set; }

        public bool IsActive { get; set; }

        //
        // Navigation to related Records
        //

        public AssetType NavAssetType { get; set; }

        public ICollection<PersonAsset> NavPersonAssets { get; set; }

        // Interface IDatabaseEntity
        public Guid PrimaryKey
        {
            get => this.AssetId;
            set => this.AssetId = value;
        }
        // Interface IDatabaseEntity
    }
}
