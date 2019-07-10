namespace CRM.Migrator.Models.ScriptModels
{
    public class Task
    {
        public string Name { get; set; }
        public string Command { get; set; }
        public string Path { get; set; }
        public string ConnectionStringName { get; set; }
    }
}
