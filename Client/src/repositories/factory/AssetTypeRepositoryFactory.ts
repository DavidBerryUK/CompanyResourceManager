import AssetTypeListFilterParametersModel       from '@/repositories/models/assetType/AssetTypeListFilterParametersModal';
import AssetTypeModel                           from '@/repositories/models/assetType/AssetTypeModel';
import GenericApiRepository                     from '@/repositories/apiBase/GenericApiRepository';
import ObjectArrayMapperAssetTypeModel          from '@/repositories/objectMappers/assetType/ObjectArrayMapperAssetTypeModel';
import ObjectMapperAssetTypeModel                    from '@/repositories/objectMappers/assetType/ObjectMapperAssetTypeModel';

export default class AssetTypeRepositoryFactory {

    static getRepository() : GenericApiRepository<AssetTypeModel, AssetTypeModel, AssetTypeListFilterParametersModel> {
        var repository = new GenericApiRepository<AssetTypeModel, AssetTypeModel, AssetTypeListFilterParametersModel>(
            new AssetTypeModel().entityName,
            "api/assettype",
            new ObjectMapperAssetTypeModel(),
            new ObjectArrayMapperAssetTypeModel()
        )
        return repository;
    }
}