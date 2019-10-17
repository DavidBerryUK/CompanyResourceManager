using AutoMapper;

namespace CRM.Models.Bootstraps.Interfaces
{
    public interface IAutoMapperConfig
    {
        void Map(Profile cfg);
    }
}