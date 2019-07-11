import AssetTypeListFilterParametersModel       from '@/repositories/models/assetType/AssetTypeListFilterParametersModal';
import AssetTypeModel                           from '@/repositories/models/assetType/AssetTypeModel';
import GenericApiRepository                     from '@/repositories/apiBase/GenericApiRepository';
import ObjectArrayMapperAssetTypeModel          from '@/repositories/objectMappers/assetType/ObjectArrayMapperAssetType';
import ObjectMapperAssetType                    from '@/repositories/objectMappers/assetType/ObjectMapperAssetType';

export default class AssetTypeRepositoryFactory {

    //
    // create a Asset Type Respository using the generic base repository class
    //  this repository supports all the basic CRUD operations as well
    //  as providing a filtered object list ( providing the server supports the functionality )
    static getRepository() : GenericApiRepository<AssetTypeModel, AssetTypeModel, AssetTypeListFilterParametersModel> {
        var repository = new GenericApiRepository<AssetTypeModel, AssetTypeModel, AssetTypeListFilterParametersModel>(
            new AssetTypeModel().entityName,
            "api/assettype",
            new ObjectMapperAssetType(),
            new ObjectArrayMapperAssetTypeModel()
        )
        return repository;
    }
}