import { IModelGenericMapper }                  from './interfaces/IModelGenericMapper';
import AssetExtendedModel                       from '@/repositories/models/asset/AssetExtendedModel';
import AssetSummaryModel                        from '@/repositories/models/asset/AssetSummaryModel';
import ModelFactoryAssetExtended                from '../modelFactories/ModelFactoryAssetExtended';
import ModelFactoryAssetSummary                 from '../modelFactories/ModelFactoryAssetSummary';
import ModelGenericMapper                       from './generic/ModelGenericMapper';

export default class ModelMapperFactoryAsset {

    public static createSummaryMapper(): IModelGenericMapper<AssetSummaryModel> {
        return new ModelGenericMapper<AssetSummaryModel> (
            new ModelFactoryAssetSummary());
    }

    public static createExtendedMapper(): IModelGenericMapper<AssetExtendedModel> {
        return new ModelGenericMapper<AssetExtendedModel> (
            new ModelFactoryAssetExtended());
    }
}
