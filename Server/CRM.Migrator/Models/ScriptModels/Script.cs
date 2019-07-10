using System.Collections.Generic;

namespace CRM.Migrator.Models.ScriptModels
{
    public class Script
    {
        public List<Task> Tasks { get; set; }

        public Script()
        {
            Tasks = new List<Task>();
        }
     }
}
