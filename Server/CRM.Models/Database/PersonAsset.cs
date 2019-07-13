using System;

namespace CRM.Models.Database
{
    /// <summary>
    /// Database Entity Object
    /// </summary>
    public class PersonAsset
    {
        public Guid PersonId { get; set; }

        public Guid AssetId { get; set; }

        //
        // Navigation to related Records
        //

        public Person NavPerson { get; set; }

        public Asset NavAsset { get; set; }
    }
}
