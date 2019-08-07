import AssetExtendedModel                       from '@/repositories/models/asset/AssetExtendedModel';
import AssetSummaryModel                        from '@/repositories/models/asset/AssetSummaryModel';
import GenericApiRepository                     from '@/repositories/apiBase/GenericApiRepository';
import ListFilterWithArchiveFlag                from '@/repositories/models/listFilter/ListFilterWithArchiveFlag';
import ModelFactoryAssetExtended                from '@/repositories/modelFactories/asset/ModelFactoryAssetExtended';
import ModelFactoryAssetSummary                 from '@/repositories/modelFactories/asset/ModelFactoryAssetSummary';

export default class AssetRepositoryFactory {

    //
    // create a Asset Repository using the generic base repository class
    //  this repository supports all the basic CRUD operations as well
    //  as providing a filtered object list ( providing the server supports the functionality )
    public static getRepository(): GenericApiRepository<AssetSummaryModel, AssetExtendedModel, ListFilterWithArchiveFlag> {
        const repository = new GenericApiRepository<AssetSummaryModel, AssetExtendedModel, ListFilterWithArchiveFlag>(
            'api/asset',
            new ModelFactoryAssetSummary(),
            new ModelFactoryAssetExtended());
        return repository;
    }
}
