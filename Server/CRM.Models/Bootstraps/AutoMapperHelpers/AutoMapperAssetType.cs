using System.Diagnostics.CodeAnalysis;
using AutoMapper;
using CRM.Models.Bootstraps.Interfaces;
using CRM.Models.Database.Assets;
using CRM.Models.Rest.AssetType;
using CRM.Models.Rest.Lists;

namespace CRM.Models.Bootstraps.AutoMapperHelpers
{
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    internal class AutoMapperAssetType : IAutoMapperConfig
    {
        public void Map(Profile profile)
        {
            // Map database to rest objects
            //
            profile.CreateMap<AssetType, AssetTypeSummary>();
            profile.CreateMap<AssetType, AssetTypeExtended>();

            // Map to List Item
            //
            profile.CreateMap<AssetType, ListItem>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(source => source.AssetTypeId))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(source => source.Name));

            // Map rest objects back to database entity objects
            //
            profile.CreateMap<AssetTypeExtended, AssetType>();
        }
    }
}