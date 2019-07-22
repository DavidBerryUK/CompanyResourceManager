import { EnumRecordStatusFilter }               from './../../../shared/enums/RecordEnums';

export interface IListFilter {
     isFilterSet: boolean;
}

export interface IListFilterArchiveFlag extends IListFilter {
     recordActiveStatusFilter: EnumRecordStatusFilter;
}
