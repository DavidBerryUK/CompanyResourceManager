import { IApiModel }                            from "@/repositories/models/interfaces/IApiModel";

export default class AssetSummaryModel implements IApiModel {

    public assetId: string
    public assetTypeId: string
    public assetTypeName: string
    public name: string
    public description: string
    public hasAssetBadge: boolean
    public hasOperatingSystem: boolean
    public badgeNo: string

    constructor() {
        this.assetId = "00000000-0000-0000-0000-000000000000";
        this.assetTypeId = ""
        this.assetTypeName = ""
        this.name = ""
        this.description = ""
        this.badgeNo = ""
        this.hasAssetBadge = false
        this.hasOperatingSystem = false
    }

    get entityName(): string {
        return "AssetSummary";
    }
    get entityKey(): string {
        return `${this.assetId}`;
    }
    get entityValue(): string {
        return `${this.name}`;
    }
}