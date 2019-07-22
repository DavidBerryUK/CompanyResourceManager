import { DialogResponseContract }               from '../dialogs/base/GenericDialogContract';
import { EnumRecordStatusFilter }               from '../../repositories/shared/enums/RecordEnums';
import { ICommonDialogInjectableView }          from '../dialogs/base/ICommonDialogInjectableView';
import { Prop }                                 from 'vue-property-decorator';
import Component                                from 'vue-class-component';
import ListFilterDialogState                    from './ListFilterDialogState';
import ListItemComponent                        from '../itemList/ListItemComponent';
import Vue                                      from 'vue';

//
// attribute indicates this is a component,
//  this is where any sub components are also registered
@Component({
  components: {
    ListItemComponent,
  },
})
export default class ListFiltersDialog extends Vue implements ICommonDialogInjectableView {

  public dialogResponseContract: DialogResponseContract | null = null;

  public recordActiveStatusFilter: EnumRecordStatusFilter = EnumRecordStatusFilter.Undefined;

  @Prop() public themeColor?: string;

  // preset selections that can be initialized by the calling method,
  //  these values will then be selected once the repository
  //  returns the list of entities
  public initialStateOnLoad: ListFilterDialogState = new ListFilterDialogState();

  get state(): ListFilterDialogState {
    const state = new ListFilterDialogState();
    state.recordActivityStatus = this.recordActiveStatusFilter;
    return state;
  }

  public data() {
    return {};
  }

  // ICommonDialogInjectableView
  //
  //
  public initializeDialogView(contract: DialogResponseContract): void {
    this.dialogResponseContract = contract;
    this.setupData();
  }

  // ICommonDialogInjectableView
  //
  //
  public validate(): boolean {
    return true;
  }

  // ICommonDialogInjectableView
  //
  //
  public dialogWillClose() {
  }

  public created() {
  }

  public mounted() {
  }

  public updated() {
  }

  private setupData() {
    this.recordActiveStatusFilter = this.initialStateOnLoad.recordActivityStatus;
  }
}
