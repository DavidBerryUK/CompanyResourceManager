﻿using System;
using System.Collections.Generic;

namespace CRM.Models.Database
{
    /// <summary>
    /// Database Entity Object
    /// </summary>
    public class Asset
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
    }
}
