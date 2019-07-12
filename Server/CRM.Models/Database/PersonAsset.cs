using System;

namespace CRM.Models.Database
{
    public class PersonAsset
    {
        public Guid PersonId { get; set; }

        public Guid AssetId { get; set; }

        public Person NavPerson { get; set; }

        public Asset NavAsset { get; set; }
    }
}
