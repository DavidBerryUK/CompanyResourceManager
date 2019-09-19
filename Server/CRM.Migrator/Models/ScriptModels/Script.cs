using System.Collections.Generic;

namespace CRM.Migrator.Models.ScriptModels
{
    public class Script
    {
        public Script()
        {
            Tasks = new List<Task>();
        }

        public List<Task> Tasks { get; set; }
    }
}