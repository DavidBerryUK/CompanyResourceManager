import AssetTypeExtendedModel                   from '@/repositories/models/assetType/AssetTypeExtendedModel';
import AssetTypeSummaryModel                    from '@/repositories/models/assetType/AssetTypeSummaryModel';
import GenericApiExtendedRepository                     from '@/repositories/apiBase/GenericApiExtendedRepository';
import ListFilterWithArchiveFlag                from '@/repositories/models/listFilter/ListFilterWithArchiveFlag';
import ModelFactoryAssetTypeExtended            from '@/repositories/modelFactories/asset/ModelFactoryAssetTypeExtended';
import ModelFactoryAssetTypeSummary             from '@/repositories/modelFactories/asset/ModelFactoryAssetTypeSummary';

export default class AssetTypeRepositoryFactory {

    //
    // create a Asset Type Repository using the generic base repository class
    //  this repository supports all the basic CRUD operations as well
    //  as providing a filtered object list ( providing the server supports the functionality )
    public static getRepository(): GenericApiExtendedRepository<AssetTypeSummaryModel, AssetTypeExtendedModel, ListFilterWithArchiveFlag> {
        const repository = new GenericApiExtendedRepository<AssetTypeSummaryModel, AssetTypeExtendedModel, ListFilterWithArchiveFlag>(
            'api/assettype',
            new ModelFactoryAssetTypeSummary(),
            new ModelFactoryAssetTypeExtended());
        return repository;
    }
}
