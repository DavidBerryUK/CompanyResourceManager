import AssetSummaryModel                        from '@/repositories/models/asset/AssetSummaryModel';

export default class AssetExtendedModel extends AssetSummaryModel {
    
    public assetTypeName: string
    public hasAssetBadge: boolean
    public hasOperatingSystem: boolean

    constructor() {
        super();
        this.assetTypeName = "";
        this.hasAssetBadge = false;
        this.hasOperatingSystem = false;
    }
}