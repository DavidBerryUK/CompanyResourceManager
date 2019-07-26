import { IModelGenericMapper }                  from './interfaces/IModelGenericMapper';
import AssetTypeExtendedModel                   from '@/repositories/models/assetType/AssetTypeExtendedModel';
import AssetTypeSummmaryModel                   from '../models/assetType/AssetTypeSummaryModel';
import ModelFactoryAssetTypeExtended            from '../modelFactories/ModelFactoryAssetTypeExtended';
import ModelFactoryAssetTypeSummary             from '../modelFactories/ModelFactoryAssetTypeSummary';
import ModelGenericMapper                       from './generic/ModelGenericMapper';

export default class ModelMapperFactoryAssetType {

    public static createSummaryMapper(): IModelGenericMapper<AssetTypeSummmaryModel> {
        return new ModelGenericMapper<AssetTypeSummmaryModel> (
            new ModelFactoryAssetTypeSummary());
    }

    public static createExtendedMapper(): IModelGenericMapper<AssetTypeExtendedModel> {
        return new ModelGenericMapper<AssetTypeExtendedModel> (
            new ModelFactoryAssetTypeExtended());
    }
}
