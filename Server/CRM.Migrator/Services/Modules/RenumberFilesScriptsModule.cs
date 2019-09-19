using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using CRM.Migrator.Models.ScriptModels;
using CRM.Migrator.Services.Modules.Interfaces;

namespace CRM.Migrator.Services.Modules
{
    public class RenumberFilesScriptsModule : IRenumberFilesScriptsModule
    {
        public List<string> RenameScripts(Task task)
        {
            var errorList = new List<string>();

            var baseDirectory = new DirectoryInfo(Environment.CurrentDirectory);
            while (!baseDirectory.Name.EndsWith("CRM.Migrator")) baseDirectory = baseDirectory.Parent;

            var scanDirectory = Path.Combine(baseDirectory.FullName, task.Path);

            Console.WriteLine("Run Scripts In Directory:" + task.Path);

            if (!Directory.Exists(scanDirectory))
            {
                errorList.Add($"Directory does not exist '{scanDirectory}'");
                return errorList;
            }

            var files = Directory.GetFiles(scanDirectory, "*.sql").OrderBy(o => o);

            var fileNumberIncrement = 50;
            var fileNumber = fileNumberIncrement;
            var fileNumberDigits = 6;

            foreach (var file in files)
            {
                var fileInfo = new FileInfo(file);
                var oldFileName = fileInfo.Name;
                var fileNumberPrefix = fileNumber.ToString().PadLeft(fileNumberDigits, '0');
                var newFileName = fileNumberPrefix + "-" + StringPrefixNumberFromFileName(oldFileName);
                Console.WriteLine($"Rename {oldFileName}  to  {newFileName}");
                fileNumber = fileNumber + fileNumberIncrement;

                fileInfo.MoveTo(fileInfo.DirectoryName + "\\" + newFileName);
            }

            Console.WriteLine("");

            return errorList;
        }

        private string StringPrefixNumberFromFileName(string filename)
        {
            var characters = filename.ToCharArray();

            for (var i = 0; i < characters.Length; i++)
                if (!char.IsDigit(characters[i]) && characters[i] != '-')
                    return filename.Substring(i);

            return "";
        }

        private static void PrintExceptionMessages(Exception ex)
        {
            Console.WriteLine(ex.Message);
            if (ex.InnerException != null)
                // ReSharper disable once TailRecursiveCall
                PrintExceptionMessages(ex.InnerException);
        }
    }
}