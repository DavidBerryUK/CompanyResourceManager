import AssetExtendedModel                       from '../models/asset/AssetExtendedModel';
import AssetSummaryModel                        from '@/repositories/models/asset/AssetSummaryModel';
import GenericApiRepository                     from '@/repositories/apiBase/GenericApiRepository';
import ListFilterWithArchiveFlag                from '@/repositories/models/listFilter/ListFilterWithArchiveFlag';
import ObjectMapperFactoryAsset                 from '../objectMappers/ObjectMapperFactoryAsset';

export default class AssetRepositoryFactory {

    //
    // create a Asset Respository using the generic base repository class
    //  this repository supports all the basic CRUD operations as well
    //  as providing a filtered object list ( providing the server supports the functionality )
    public static getRepository(): GenericApiRepository<AssetSummaryModel, AssetExtendedModel, ListFilterWithArchiveFlag> {
        const repository = new GenericApiRepository<AssetSummaryModel, AssetExtendedModel, ListFilterWithArchiveFlag>(
            new AssetSummaryModel().entityName,
            'api/asset',
            ObjectMapperFactoryAsset.createSummaryMapper(),
            ObjectMapperFactoryAsset.createExtendedMapper());
        return repository;
    }
}
