import { EnumRecordStatusFilter }               from '@/repositories/shared/enums/RecordEnums';

export default class AssetSummaryListFilterParametersModel{
    
    recordActiveStatusFilter : EnumRecordStatusFilter = EnumRecordStatusFilter.Active;    
    
    get isFilterSet() : boolean {
        if ( this.recordActiveStatusFilter != EnumRecordStatusFilter.Active)
        {
            return true;
        }    
        return false;
    }    
}