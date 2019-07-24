import { IObjectGenericMapper }                 from './interfaces/IObjectGenericMapper';
import AssetTypeExtendedModel                   from '@/repositories/models/assetType/AssetTypeExtendedModel';
import AssetTypeSummmaryModel                   from '../models/assetType/AssetTypeSummaryModel';
import EntityFactoryAssetTypeExtended           from '../modelFactories/EntityFactoryAssetTypeExtended';
import EntityFactoryAssetTypeSummary            from '../modelFactories/EntityFactoryAssetTypeSummary';
import ObjectGenericMapper                      from './generic/ObjectGenericMapper';

export default class ObjectMapperFactoryAssetType {

    public static createSummaryMapper(): IObjectGenericMapper<AssetTypeSummmaryModel> {
        return new ObjectGenericMapper<AssetTypeSummmaryModel> (
            new EntityFactoryAssetTypeSummary());
    }

    public static createExtendedMapper(): IObjectGenericMapper<AssetTypeExtendedModel> {
        return new ObjectGenericMapper<AssetTypeExtendedModel> (
            new EntityFactoryAssetTypeExtended());
    }
}
