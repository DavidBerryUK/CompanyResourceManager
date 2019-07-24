import AssetTypeSummmaryModel                   from '@/repositories/models/assetType/AssetTypeSummaryModel';
import GenericApiRepository                     from '@/repositories/apiBase/GenericApiRepository';
import ListFilterWithArchiveFlag                from '@/repositories/models/listFilter/ListFilterWithArchiveFlag';
import ObjectMapperFactoryAssetType             from '../objectMappers/ObjectMapperFactoryAssetType';

export default class AssetTypeRepositoryFactory {

    //
    // create a Asset Type Respository using the generic base repository class
    //  this repository supports all the basic CRUD operations as well
    //  as providing a filtered object list ( providing the server supports the functionality )
    public static getRepository(): GenericApiRepository<AssetTypeSummmaryModel, AssetTypeSummmaryModel, ListFilterWithArchiveFlag> {
        const repository = new GenericApiRepository<AssetTypeSummmaryModel, AssetTypeSummmaryModel, ListFilterWithArchiveFlag>(
            new AssetTypeSummmaryModel().entityName,
            'api/assettype',
            ObjectMapperFactoryAssetType.createSummaryMapper(),
            ObjectMapperFactoryAssetType.createExtendedMapper());
        return repository;
    }
}
