import AssetSummaryListFilterParametersModel    from '@/repositories/models/asset/AssetSummaryListFilterParametersModal';
import AssetSummaryModel                        from '@/repositories/models/asset/AssetSummaryModel';
import GenericApiRepository                     from '@/repositories/apiBase/GenericApiRepository';
import ObjectArrayMapperAssetSummaryModel       from '@/repositories/objectMappers/asset/ObjectArrayMapperAssetSummary';
import ObjectMapperAssetSummary                 from '@/repositories/objectMappers/asset/ObjectMapperAssetSummary';

export default class AssetRepositoryFactory{
    
    static getRepository() : GenericApiRepository<AssetSummaryModel, AssetSummaryModel, AssetSummaryListFilterParametersModel> {
        var repository = new GenericApiRepository<AssetSummaryModel, AssetSummaryModel, AssetSummaryListFilterParametersModel>(
            new AssetSummaryModel().entityName,
            "api/asset",
            new ObjectMapperAssetSummary(),
            new ObjectArrayMapperAssetSummaryModel()
        )
        return repository;
    }
}