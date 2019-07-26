using AutoMapper;
using CRM.Models.Bootstraps.Interfaces;
using CRM.Models.Database.Assets;
using CRM.Models.Rest.AssetType;
using CRM.Models.Rest.Lists;
using System.Diagnostics.CodeAnalysis;

namespace CRM.Models.Bootstraps.AutoMapperHelpers
{
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    internal class AutoMapperAssetType : IAutoMapperConfig
    {
        public void Map(IMapperConfigurationExpression cfg)
        {
            // Map database to rest objects
            //
            cfg.CreateMap<AssetType, AssetTypeSummary>();
            cfg.CreateMap<AssetType, AssetTypeExtended>();

            // Map to List Item
            //
            cfg.CreateMap<AssetType, ListItem>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(source => source.AssetTypeId))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(source => source.Name));

            // Map rest objects back to database entity objects
            //
            cfg.CreateMap<AssetTypeExtended, AssetType>();
        }
    }
}
