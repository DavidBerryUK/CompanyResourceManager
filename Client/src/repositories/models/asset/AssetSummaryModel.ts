import { IApiModel }                            from "@/repositories/models/interfaces/IApiModel";

export default class AssetSummaryModel implements IApiModel {

    public assetId: string
    public assetTypeId: string

    public name: string
  
    public badgeNo: string

    constructor() {
        this.assetId = "00000000-0000-0000-0000-000000000000";
        this.assetTypeId = ""
        this.name = ""
        this.badgeNo = ""
    }

    get entityName(): string {
        return "Asset";
    }
    
    get entityKey(): string {
        return `${this.assetId}`;
    }

    get entityValue(): string {
        return `${this.name}`;
    }

    get entitySortValue(): any {
        return `${this.name}`;
    }
}