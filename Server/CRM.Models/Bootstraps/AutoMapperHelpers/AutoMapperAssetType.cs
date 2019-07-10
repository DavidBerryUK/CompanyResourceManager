using AutoMapper;
using CRM.Models.Bootstraps.Interfaces;
using CRM.Models.Rest.AssetType.Response;
using CRM.Models.Rest.Lists;

namespace CRM.Models.Bootstraps.AutoMapperHelpers
{
    internal class AutoMapperAssetType : IAutoMapperConfig
    {
        public void Map(IMapperConfigurationExpression cfg)
        {
            cfg.CreateMap<Database.AssetType, AssetType>();
            cfg.CreateMap<AssetType, Database.AssetType>();

            cfg.CreateMap<Database.AssetType, ListItem>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(source => source.AssetTypeId))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(source => source.Name));
        }
    }
}
