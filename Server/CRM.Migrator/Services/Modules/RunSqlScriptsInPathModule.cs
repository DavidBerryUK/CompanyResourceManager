﻿using System;
using System.Collections.Generic;
using System.IO;
using CRM.Migrator.Models.AuditModels;
using CRM.Migrator.Models.Configuration;
using CRM.Migrator.Models.ScriptModels;
using CRM.Migrator.Services.Database;
using Microsoft.Extensions.Options;

namespace CRM.Migrator.Services.Modules
{
    public interface IRunSqlScriptsInPathModule
    {
        List<string> Run(Task task);
    }

    public class RunSqlScriptsInPathModule : IRunSqlScriptsInPathModule
    {
        private readonly IOptions<ApplicationSettings> _applicationSettings;

        public RunSqlScriptsInPathModule(IOptions<ApplicationSettings> applicationSettings)
        {
            _applicationSettings = applicationSettings;
        }

        public List<string> Run(Task task)
        {
            var errorCount = 0;
            var errorList = new List<string>();
            var connectionString = _applicationSettings.Value.GetConnectionString(task.ConnectionStringName);
            string baseDirectory = Environment.CurrentDirectory;

            var scanDirectory = Path.Combine(baseDirectory, task.Path);

            if (!Directory.Exists(scanDirectory))
            {
                errorCount++;
                var auditSchema = _applicationSettings.Value.Audit.DatabaseSchema;



                ScriptTableRepository.Add(new ScriptAudit
                    {
                        Success = false,
                        FullName = task.Name,
                        Error = $"Directory does not exist '{scanDirectory}'"
                    },
                    auditSchema,
                    connectionString);

                errorList.Add($"Directory does not exist '{scanDirectory}'");
                return errorList;
            }

            var files = Directory.GetFiles(scanDirectory, "*.sql");
            foreach (var file in files)
            {
                var fileInfo = new FileInfo(file);
                var audit = new ScriptAudit() {FullName = fileInfo.FullName, Name = fileInfo.Name};


                try
                {

                    Console.WriteLine("Running Script:" + fileInfo.Name);

                    var databaseHelper = new DatabaseHelper(connectionString);
                    var fileContent = File.ReadAllText(fileInfo.FullName);
                    var queries = fileContent.Split(new[] {"GO"}, StringSplitOptions.RemoveEmptyEntries);
                    foreach (var query in queries)
                    {
                        Console.WriteLine(query);
                        databaseHelper.ExecuteSql(query);
                    }

                }
                catch (Exception ex)
                {
                    audit.Success = false;
                    audit.Error = ex.Message;
                    errorCount++;
                    
                    Console.WriteLine("RunSqlScriptsInPathModule Exception");
                    Console.WriteLine("script");
                    PrintExceptionMessages(ex);

                    errorList.Add("SCRIPT:" + file + Environment.NewLine + ex.Message);
                }
                finally
                { 
                    var auditSchema = _applicationSettings.Value.Audit.DatabaseSchema;
                    ScriptTableRepository.Add(audit, auditSchema, connectionString);
                }
            }

            return errorList;

        }

        private static void PrintExceptionMessages(Exception ex)
        {
            Console.WriteLine(ex.Message);
            if (ex.InnerException != null)
            {
                PrintExceptionMessages(ex.InnerException);
            }
        }
    }
}
