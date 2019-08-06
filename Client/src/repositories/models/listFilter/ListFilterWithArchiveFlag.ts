import { EnumRecordStatusFilter }               from '@/repositories/shared/enums/RecordEnums';
import { IListFilter }                          from './interfaces/IListFilterInterfaces';
import { IListFilterArchiveFlag }               from './interfaces/IListFilterInterfaces';

export default class ListFilterWithArchiveFlag implements IListFilter, IListFilterArchiveFlag {

    public static className = 'ListFilterWithArchiveFlag';

    public recordActiveStatusFilter: EnumRecordStatusFilter = EnumRecordStatusFilter.Active;

    public get entityName(): string {
        return ListFilterWithArchiveFlag.className;
    }

    public get isFilterSet(): boolean {
        if ( this.recordActiveStatusFilter !== EnumRecordStatusFilter.Active) {
            return true;
        }
        return false;
    }
}
