using CRM.Models.Database.Persons;
using System;
using CRM.Models.Database.Interfaces;

namespace CRM.Models.Database.Assets
{
    /// <summary>
    /// Database Entity Object
    /// </summary>
    public class PersonAsset : IDatabaseLinkEntity<Guid>
    {
        public Guid PersonId { get; set; }

        public Guid AssetId { get; set; }

        //
        // Navigation to related Records
        //

        public Person NavPerson { get; set; }

        public Asset NavAsset { get; set; }

        // IDatabaseLinkEntity
        public (Guid first, Guid second) GetKey => (first: PersonId, second: AssetId);
    }
}
