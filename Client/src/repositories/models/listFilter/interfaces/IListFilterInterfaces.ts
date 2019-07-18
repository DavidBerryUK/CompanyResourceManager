import { EnumRecordStatusFilter }               from './../../../shared/enums/RecordEnums';

export interface IListFilter {
     isFilterSet: Boolean;
}

export interface IListFilterArchiveFlag extends IListFilter {
     recordActiveStatusFilter : EnumRecordStatusFilter;
     
}