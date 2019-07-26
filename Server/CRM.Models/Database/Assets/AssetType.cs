﻿using System;
using System.Collections.Generic;
using CRM.Models.Database.Interfaces;

namespace CRM.Models.Database.Assets
{
    /// <summary>
    /// Database Entity Object
    /// </summary>
    public class AssetType : IDatabaseEntity<Guid>
    {
        public Guid AssetTypeId { get; set; }

        public string Name { get; set; }

        public bool HasAssetBadge { get; set; }

        public bool HasOperatingSystem { get; set; }

        public bool IsActive { get; set; }

        //
        // Navigation to related Records
        //

        public ICollection<Asset> NavAssets { get; set; }

        // Interface IDatabaseEntity
        public Guid PrimaryKey => this.AssetTypeId;
        // Interface IDatabaseEntity
    }
}
