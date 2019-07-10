import { EnumRecordStatusFilter }               from '../../repositories/shared/enums/RecordEnums';

/**
 * records the state of the filter dialog box, this include the
 * setting of the recordActivityStatus Filter (Active, Inactive or all).
 * 
 * The UiListCollection State class records all the selected primary keys
 * for the relevant list
 * 
 * @export
 * @class ListFilterDialogState
 */
export default class ListFilterDialogState {
    public recordActivityStatus: EnumRecordStatusFilter = EnumRecordStatusFilter.Active;        
}