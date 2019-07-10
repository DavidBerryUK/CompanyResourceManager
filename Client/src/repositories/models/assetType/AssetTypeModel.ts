import { IApiModel }                            from "../interfaces/IApiModel";

export default class AssetTypeModel implements IApiModel{

    public assetTypeId : string
    public name : string    
    public hasAssetBadge  : boolean
    public hasOperatingSystem  : boolean
    public isActive : boolean

    constructor() {
        this.assetTypeId = "00000000-0000-0000-0000-000000000000";
        this.name = ""
        this.hasAssetBadge = false
        this.hasOperatingSystem = false
        this.isActive = false
    }

    get entityName() : string {
        return "AssetType";
    }
    get entityKey() : string {
        return `${this.assetTypeId}`;
    }
    get entityValue() : string {
        return `${this.name}`;
    }
}