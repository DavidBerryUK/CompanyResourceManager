using AutoMapper;
using CRM.Models.Database.Assets;
using CRM.Models.Rest.AssetType;
using CRM.Models.Rest.Lists;
using System.Diagnostics.CodeAnalysis;

namespace CRM.Api.AutoMapperRegistration
{
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    internal class AutoMapperAssetType : Profile
    {
        public AutoMapperAssetType()
        {
            // Map database to rest objects
            //
            CreateMap<AssetType, AssetTypeSummary>();
            CreateMap<AssetType, AssetTypeExtended>();

            // Map to List Item
            //
            CreateMap<AssetType, ListItem>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(source => source.AssetTypeId))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(source => source.Name));

            // Map rest objects back to database entity objects
            //
            CreateMap<AssetTypeExtended, AssetType>();
        }
    }
}