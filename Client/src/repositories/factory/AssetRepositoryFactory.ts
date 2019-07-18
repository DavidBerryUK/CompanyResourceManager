import AssetExtendedModel                       from '../models/asset/AssetExtendedModel';
import AssetSummaryModel                        from '@/repositories/models/asset/AssetSummaryModel';
import GenericApiRepository                     from '@/repositories/apiBase/GenericApiRepository';
import ListFilterWithArchiveFlag                from '@/repositories/models/listFilter/ListFilterWithArchiveFlag';
import ObjectArrayMapperAssetSummaryModel       from '@/repositories/objectMappers/asset/ObjectArrayMapperAssetSummaryModel';
import ObjectMapperAssetExtendedModel           from '@/repositories/objectMappers/asset/ObjectMapperAssetExtendedModel';
import ObjectMapperAssetSummaryModel            from '@/repositories/objectMappers/asset/ObjectMapperAssetSummaryModel';

export default class AssetRepositoryFactory{
    
    //
    // create a Asset Respository using the generic base repository class
    //  this repository supports all the basic CRUD operations as well
    //  as providing a filtered object list ( providing the server supports the functionality )
    static getRepository() : GenericApiRepository<AssetSummaryModel, AssetExtendedModel, ListFilterWithArchiveFlag> {
        var repository = new GenericApiRepository<AssetSummaryModel, AssetExtendedModel, ListFilterWithArchiveFlag>(
            new AssetSummaryModel().entityName,
            "api/asset",
            new ObjectMapperAssetSummaryModel(),
            new ObjectMapperAssetExtendedModel(),
            new ObjectArrayMapperAssetSummaryModel()
        )
        return repository;
    }
}