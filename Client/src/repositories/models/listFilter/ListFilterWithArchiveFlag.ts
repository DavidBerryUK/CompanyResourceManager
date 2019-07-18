import { EnumRecordStatusFilter }               from '@/repositories/shared/enums/RecordEnums';
import { IListFilter }                          from './interfaces/IListFilterInterfaces';
import { IListFilterArchiveFlag }                          from './interfaces/IListFilterInterfaces';

export default class ListFilterWithArchiveFlag implements IListFilter, IListFilterArchiveFlag {

    recordActiveStatusFilter : EnumRecordStatusFilter = EnumRecordStatusFilter.Active;
    
    get isFilterSet() : boolean {
        if ( this.recordActiveStatusFilter != EnumRecordStatusFilter.Active)
        {
            return true;
        }    
        return false;
    }    
}
