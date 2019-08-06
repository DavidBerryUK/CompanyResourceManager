import { IApiModel }                            from '@/repositories/models/interfaces/IApiModel';
import AssetSummaryModel                        from '@/repositories/models/asset/AssetSummaryModel';

export default class AssetExtendedModel extends AssetSummaryModel implements IApiModel {

    public static className = 'AssetExtendedModel';

    public assetTypeName: string;
    public hasAssetBadge: boolean;
    public hasOperatingSystem: boolean;

    constructor() {
        super();
        this.assetTypeName = '';
        this.hasAssetBadge = false;
        this.hasOperatingSystem = false;
    }

    public get entityName(): string {
        return AssetExtendedModel.className;
    }
}
