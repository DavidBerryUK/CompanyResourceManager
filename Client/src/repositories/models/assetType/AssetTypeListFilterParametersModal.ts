import { EnumRecordStatusFilter }               from "../../shared/enums/RecordEnums";

export default class AssetTypeListFilterParametersModel{

    recordActiveStatusFilter : EnumRecordStatusFilter = EnumRecordStatusFilter.Active;    
    
    get isFilterSet() : boolean {
        if ( this.recordActiveStatusFilter != EnumRecordStatusFilter.Active)
        {
            return true;
        }    
        return false;
    }    
}