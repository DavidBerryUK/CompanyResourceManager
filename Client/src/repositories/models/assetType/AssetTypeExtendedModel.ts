import AssetTypeSummmaryModel                   from '@/repositories/models/assetType/AssetTypeSummaryModel';

export default class AssetTypeExtendedModel extends AssetTypeSummmaryModel {

    public static className = 'AssetTypeExtendedModel';

    public get entityName(): string {
        return AssetTypeExtendedModel.className;
    }

}
