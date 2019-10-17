using AutoMapper;
using CRM.Models.Bootstraps.Interfaces;
using CRM.Utilities.Reflection;

namespace CRM.Models.Bootstraps
{
    public class AutoMapperBootstrap
    {
        public void ConfigureAutoMapperTransformations(Profile profile)
        {
            var mappers =
                new ClassListFactory()
                    .CreateListOfClassesWithInterface<IAutoMapperConfig>(GetType().Assembly);

            mappers.ForEach(o => o.Map(profile));
        }
    }
}