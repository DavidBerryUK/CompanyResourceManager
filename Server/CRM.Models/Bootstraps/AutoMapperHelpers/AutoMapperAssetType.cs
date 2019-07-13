using AutoMapper;
using CRM.Models.Bootstraps.Interfaces;
using CRM.Models.Rest.AssetType;
using CRM.Models.Rest.Lists;

namespace CRM.Models.Bootstraps.AutoMapperHelpers
{
    internal class AutoMapperAssetType : IAutoMapperConfig
    {
        public void Map(IMapperConfigurationExpression cfg)
        {
            // Map database to rest objects
            //
            cfg.CreateMap<Database.AssetType, AssetTypeSummary>();
            cfg.CreateMap<Database.AssetType, AssetTypeExtended>();
            cfg.CreateMap<Database.AssetType, ListItem>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(source => source.AssetTypeId))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(source => source.Name));

            // Map rest objects back to database entity objects
            //
            cfg.CreateMap<AssetTypeExtended, Database.AssetType>();
        }
    }
}
