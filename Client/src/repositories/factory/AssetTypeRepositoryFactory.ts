import AssetTypeExtendedModel                   from '@/repositories/models/assetType/AssetTypeExtendedModel';
import AssetTypeSummmaryModel                   from '@/repositories/models/assetType/AssetTypeSummaryModel';
import GenericApiRepository                     from '@/repositories/apiBase/GenericApiRepository';
import ListFilterWithArchiveFlag                from '@/repositories/models/listFilter/ListFilterWithArchiveFlag';
import ModelMapperFactoryAssetType              from '@/repositories/modelMappers/ModelMapperFactoryAssetType';

export default class AssetTypeRepositoryFactory {

    //
    // create a Asset Type Respository using the generic base repository class
    //  this repository supports all the basic CRUD operations as well
    //  as providing a filtered object list ( providing the server supports the functionality )
    public static getRepository(): GenericApiRepository<AssetTypeSummmaryModel, AssetTypeExtendedModel, ListFilterWithArchiveFlag> {
        const repository = new GenericApiRepository<AssetTypeSummmaryModel, AssetTypeExtendedModel, ListFilterWithArchiveFlag>(
            'api/assettype',
            ModelMapperFactoryAssetType.createSummaryMapper(),
            ModelMapperFactoryAssetType.createExtendedMapper());
        return repository;
    }
}
