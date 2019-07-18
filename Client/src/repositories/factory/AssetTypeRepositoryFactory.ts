import AssetTypeSummmaryModel                   from '@/repositories/models/assetType/AssetTypeSummaryModel';
import GenericApiRepository                     from '@/repositories/apiBase/GenericApiRepository';
import ListFilterWithArchiveFlag                from '@/repositories/models/listFilter/ListFilterWithArchiveFlag';
import ObjectArrayMapperAssetTypeModel          from '@/repositories/objectMappers/assetType/ObjectArrayMapperAssetTypeModel';
import ObjectMapperAssetTypeExtendedModel       from '@/repositories/objectMappers/assetType/ObjectMapperAssetTypeExtendedModel';
import ObjectMapperAssetTypeSummaryModel        from '@/repositories/objectMappers/assetType/ObjectMapperAssetTypeSummaryModel';

export default class AssetTypeRepositoryFactory {

    //
    // create a Asset Type Respository using the generic base repository class
    //  this repository supports all the basic CRUD operations as well
    //  as providing a filtered object list ( providing the server supports the functionality )
    static getRepository() : GenericApiRepository<AssetTypeSummmaryModel, AssetTypeSummmaryModel, ListFilterWithArchiveFlag> {
        var repository = new GenericApiRepository<AssetTypeSummmaryModel, AssetTypeSummmaryModel, ListFilterWithArchiveFlag>(
            new AssetTypeSummmaryModel().entityName,
            "api/assettype",
            new ObjectMapperAssetTypeSummaryModel(),
            new ObjectMapperAssetTypeExtendedModel(),
            new ObjectArrayMapperAssetTypeModel()
        )
        return repository;
    }
}