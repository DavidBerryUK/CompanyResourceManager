using AutoMapper;
using CRM.Models.Bootstraps.Interfaces;
using CRM.Models.Rest.Asset.Response;

namespace CRM.Models.Bootstraps.AutoMapperHelpers
{
    internal class AutoMapperAsset : IAutoMapperConfig
    {
        public void Map(IMapperConfigurationExpression cfg)
        {
            cfg.CreateMap<Database.Asset, AssetSummary>()
                .ForMember(dest => dest.AssetId, opt => opt.MapFrom(source => source.AssetId))
                .ForMember(dest => dest.AssetTypeId, opt => opt.MapFrom(source => source.AssetTypeId))
                .ForMember(dest => dest.AssetTypeName, opt => opt.MapFrom(source => source.NavAssetType.Name))
                .ForMember(dest => dest.Description, opt => opt.MapFrom(source => source.Description))
                .ForMember(dest => dest.HasAssetBadge, opt => opt.MapFrom(source => source.NavAssetType.HasAssetBadge))
                .ForMember(dest => dest.HasOperatingSystem, opt => opt.MapFrom(source => source.NavAssetType.HasOperatingSystem))
                .ForMember(dest => dest.BadgeNo, opt => opt.MapFrom(source => source.BadgeNo));


            cfg.CreateMap<AssetSummary, Database.Asset>();

            cfg.CreateMap<Asset, Database.Asset>();
            cfg.CreateMap<Database.Asset, Asset>();
        }
    }
}
