using AutoMapper;
using CRM.Models.Bootstraps.Interfaces;
using CRM.Utilities.Reflection;

namespace CRM.Models.Bootstraps
{
    public class AutoMapperBootstrap
    {
        public void ConfigureAutoMapperTransformations(IMapperConfigurationExpression cfg)
        {
            var mappers =
                new ClassListFactory().CreateListOfClassesWithInterface<IAutoMapperConfig>(GetType().Assembly);
            mappers.ForEach(o => o.Map(cfg));
        }
    }
}