using System.Diagnostics.CodeAnalysis;
using AutoMapper;
using CRM.Models.Bootstraps.Interfaces;
using CRM.Models.Database.Assets;
using CRM.Models.Rest.Asset;
using CRM.Models.Rest.Lists;

namespace CRM.Models.Bootstraps.AutoMapperHelpers
{
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    internal class AutoMapperAsset : IAutoMapperConfig
    {
        public void Map(Profile profile)
        {
            // Map database to rest objects
            //
            profile.CreateMap<Asset, AssetSummary>();
            profile.CreateMap<Asset, AssetExtended>()
                .ForMember(dest => dest.AssetId, opt => opt.MapFrom(source => source.AssetId))
                .ForMember(dest => dest.AssetTypeId, opt => opt.MapFrom(source => source.AssetTypeId))
                .ForMember(dest => dest.AssetTypeName, opt => opt.MapFrom(source => source.NavAssetType.Name))
                .ForMember(dest => dest.Description, opt => opt.MapFrom(source => source.Description))
                .ForMember(dest => dest.HasAssetBadge, opt => opt.MapFrom(source => source.NavAssetType.HasAssetBadge))
                .ForMember(dest => dest.HasOperatingSystem,
                    opt => opt.MapFrom(source => source.NavAssetType.HasOperatingSystem))
                .ForMember(dest => dest.BadgeNo, opt => opt.MapFrom(source => source.BadgeNo));

            // Map to List Item
            //
            profile.CreateMap<Asset, ListItem>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(source => source.AssetTypeId))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(source => source.Name));

            // Map rest objects back to database entity objects
            //
            profile.CreateMap<AssetExtended, Asset>();
        }
    }
}