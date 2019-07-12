using AutoMapper;
using CRM.Models.Bootstraps.Interfaces;
using CRM.Models.Rest.Asset.Response;

namespace CRM.Models.Bootstraps.AutoMapperHelpers
{
    internal class AutoMapperAsset : IAutoMapperConfig
    {
        public void Map(IMapperConfigurationExpression cfg)
        {
            // Map database to rest objects
            //
            cfg.CreateMap<Database.Asset, AssetSummary>();
            cfg.CreateMap<Database.Asset, AssetExtended>()
                .ForMember(dest => dest.AssetId, opt => opt.MapFrom(source => source.AssetId))
                .ForMember(dest => dest.AssetTypeId, opt => opt.MapFrom(source => source.AssetTypeId))
                .ForMember(dest => dest.AssetTypeName, opt => opt.MapFrom(source => source.NavAssetType.Name))
                .ForMember(dest => dest.Description, opt => opt.MapFrom(source => source.Description))
                .ForMember(dest => dest.HasAssetBadge, opt => opt.MapFrom(source => source.NavAssetType.HasAssetBadge))
                .ForMember(dest => dest.HasOperatingSystem, opt => opt.MapFrom(source => source.NavAssetType.HasOperatingSystem))
                .ForMember(dest => dest.BadgeNo, opt => opt.MapFrom(source => source.BadgeNo));

            // Map rest objects back to database entity objects
            //
            cfg.CreateMap<AssetExtended, Database.Asset>();
        }
    }
}
