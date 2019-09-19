using System;

namespace CRM.Migrator.Models.AuditModels
{
    public class ScriptAudit
    {
        public ScriptAudit()
        {
            Success = true;
            Error = "";
            ExecuteDatetime = DateTime.Now;
        }

        public string FullName { get; set; }
        public string Name { get; set; }
        public DateTime ExecuteDatetime { get; set; }
        public string Error { get; set; }
        public bool Success { get; set; }
    }
}