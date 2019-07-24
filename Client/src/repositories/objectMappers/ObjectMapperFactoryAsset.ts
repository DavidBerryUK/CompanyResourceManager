import { IObjectGenericMapper }                 from './interfaces/IObjectGenericMapper';
import AssetExtendedModel                       from '@/repositories/models/asset/AssetExtendedModel';
import AssetSummaryModel                        from '@/repositories/models/asset/AssetSummaryModel';
import EntityFactoryAssetExtended               from '../modelFactories/EntityFactoryAssetExtended';
import EntityFactoryAssetSummary                from '../modelFactories/EntityFactoryAssetSummary';
import ObjectGenericMapper                      from './generic/ObjectGenericMapper';

export default class ObjectMapperFactoryAsset {

    public static createSummaryMapper(): IObjectGenericMapper<AssetSummaryModel> {
        return new ObjectGenericMapper<AssetSummaryModel> (
            new EntityFactoryAssetSummary());
    }

    public static createExtendedMapper(): IObjectGenericMapper<AssetExtendedModel> {
        return new ObjectGenericMapper<AssetExtendedModel> (
            new EntityFactoryAssetExtended());
    }
}
