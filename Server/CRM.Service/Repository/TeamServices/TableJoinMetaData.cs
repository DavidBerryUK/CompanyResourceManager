using System;
using System.Collections.Generic;
using System.Text;

namespace CRM.Service.Repository.TeamServices
{
    internal class TableJoinMetaData
    {

        public string ReferenceTableName { get; set; }
        public string LinkTableName { get; set; }
        public string ReferenceTableKeyPropertyName { get; set; }
        public string ReferenceTableTextPropertyName { get; set; }
        public string LinkTableJoinPropertyName { get; set; }
        public string LinkTableFilterPropertyName { get; set; }

    }
}
