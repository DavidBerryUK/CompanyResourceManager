using System.IO;
using System.Xml.Serialization;
using CRM.Migrator.Services.Script.Interfaces;

namespace CRM.Migrator.Services.Script
{
    public class LoadScriptModule : ILoadScriptModule
    {
        public Models.ScriptModels.Script LoadScript(string scriptPath)
        {
            var fileStream = new StreamReader(scriptPath);
            var xmlSerializer = new XmlSerializer(typeof(Models.ScriptModels.Script));
            var script = (Models.ScriptModels.Script) xmlSerializer.Deserialize(fileStream);

            return script;
        }
    }
}