namespace CRM.Migrator.Models.ScriptModels
{
    public class Task
    {
        public string Name { get; set; }
        public string Command { get; set; }
        public string Path { get; set; }
        public string ConnectionStringName { get; set; }
        public string Enabled { get; set; }

        public bool IsEnabled
        {
            get
            {
                switch (Enabled.ToLower().Trim())
                {
                    case "y":
                    case "yes":
                    case "true":
                    case "t":
                    case "1":
                        return true;
                }

                return false;
            }
        }
    }
}