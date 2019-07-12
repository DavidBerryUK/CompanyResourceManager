import AssetTypeListFilterParametersModel       from '@/repositories/models/assetType/AssetTypeListFilterParametersModal';
import AssetTypeSummmaryModel                   from '@/repositories/models/assetType/AssetTypeSummaryModel';
import GenericApiRepository                     from '@/repositories/apiBase/GenericApiRepository';
import ObjectArrayMapperAssetTypeModel          from '@/repositories/objectMappers/assetType/ObjectArrayMapperAssetTypeModel';
import ObjectMapperAssetTypeExtendedModel       from '@/repositories/objectMappers/assetType/ObjectMapperAssetTypeExtendedModel';
import ObjectMapperAssetTypeSummaryModel        from '@/repositories/objectMappers/assetType/ObjectMapperAssetTypeSummaryModel';

export default class AssetTypeRepositoryFactory {

    //
    // create a Asset Type Respository using the generic base repository class
    //  this repository supports all the basic CRUD operations as well
    //  as providing a filtered object list ( providing the server supports the functionality )
    static getRepository() : GenericApiRepository<AssetTypeSummmaryModel, AssetTypeSummmaryModel, AssetTypeListFilterParametersModel> {
        var repository = new GenericApiRepository<AssetTypeSummmaryModel, AssetTypeSummmaryModel, AssetTypeListFilterParametersModel>(
            new AssetTypeSummmaryModel().entityName,
            "api/assettype",
            new ObjectMapperAssetTypeSummaryModel(),
            new ObjectMapperAssetTypeExtendedModel(),
            new ObjectArrayMapperAssetTypeModel()
        )
        return repository;
    }
}