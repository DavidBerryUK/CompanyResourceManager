import { EnumModalWidth }                       from '@/componentsCommonGui/dialogs/constants/StandardDialogWidth';
import { IApiModel }                            from '../../repositories/models/interfaces/IApiModel';
import { IComponentMetaData }                   from '@/components/interfaces/ComponentMetaDataInterfaces';
import { MaterialDesignColor }                  from '@/services/colors/materialDesign/constants/MaterialDesignColors';
import { Prop }                                 from 'vue-property-decorator';
import CommonAppDialogController                from '@/componentsCommonGui/dialogs/commonAppDialog/CommonAppDialogController';
import CommonAppDialogOptions                   from '@/componentsCommonGui/dialogs/commonAppDialog/CommonAppDialogOptions';
import Component                                from 'vue-class-component';
import FilterButton                             from '../filterButton/FilterButton';
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';
import ListFilterDialogState                    from '@/componentsCommonGui/listFilterDialog/ListFilterDialogState';
import ListFiltersDialog                        from '@/componentsCommonGui/listFilterDialog/ListFiltersDialog.vue';
import ListFiltersDialogCode                    from '@/componentsCommonGui/listFilterDialog/ListFiltersDialog';
import Loader                                   from '@/componentsCommonGui/loader/Loader';
import NavigationListConfig                     from './NavigationListConfig';
import NotificationFactory                      from '@/services/notifications/NotificationFactory';
import ThemeSettings                            from '@/componentsCommonGui/theme/ThemeSettings';
import Vue                                      from 'vue';

@Component({
  components: {
    FilterButton,
    Loader,
  }})
export default class NavigationListComponent extends Vue  implements IComponentMetaData {

  // records the selected values in the filter dialog page
  public dataListState: ListFilterDialogState = new ListFilterDialogState();

  // IComponentMetaData
  public componentName: string = 'BaseListPage';
  public componentDescription: string = 'BaseListPage';
  // IComponentMetaData

  @Prop() public configuration!: NavigationListConfig<IApiModel>;

  public theme: ThemeSettings = new ThemeSettings();
  public isLoading: boolean = true;
  public isAnApiError: boolean = false;
  public listFilterText: string = '';
  // Primary list of data read via the API
  public dataList: GenericCollectionModel<IApiModel> = new GenericCollectionModel<IApiModel>();

    // the currently selected person
  public selectedItem: IApiModel | null = null;

  public data(): any  {
      return {};
  }

  public mounted() {
    this.listenToModelUpdates();
    this.getData();
  }

  // user has pressed the clear button on the text filter
  public onFilterClearClicked() {
    this.listFilterText = '';
  }

  public onReload() {
    this.getData();
  }

  // When the filter button is pressed the filter dialog modal will be displayed
  // allowing the user to filter  the record types
  public onFilterClicked() {

    // Create view to show in the dialog
    //
    const dialog = new ListFiltersDialog();
    const dialogCode = dialog as ListFiltersDialogCode;
    dialogCode.themeColor = MaterialDesignColor.blue;
    dialogCode.initialStateOnLoad = this.dataListState;

    // Create Dialog Options
    //
    const options = new CommonAppDialogOptions();
    options.title = 'Filter Categories';
    options.dialogWidth = EnumModalWidth.FixedMedium;
    options.themeColor = MaterialDesignColor.blue;
    const appDialog = new CommonAppDialogController(this);

    // display the dialog box
    appDialog.createWithOptionsObject(options)
      .supplyCustomBody(() => {
        return dialog;
      })
      .okPressed(() => {

        // record filter settings made by the user
        this.dataListState = dialogCode.state;

        //
        // update filter model for api, supply record state required (active, inactive, all)
        //  and any filters by branch type
        this.configuration.filterModel.recordActiveStatusFilter = this.dataListState.recordActivityStatus;
        this.getData();
      })
      .show();
  }

  // user pressed the add button to create a new person
  public onAddClicked() {
    this.configuration.navigationHandler.gotoNewPage(this);
  }

  // a list item has been selected, navigate to the person view screen
  public onSelectItem(item: any) {
    this.selectedItem = item;
    this.configuration.navigationHandler.gotoViewPage(this, item.entityKey);
  }

   // function used to style items in the list, the currently
  // selected item will have a different coloured background
  public itemStyle(item: IApiModel): string {
    if ( this.selectedItem !== null) {
      if (item.entityKey === this.selectedItem.entityKey) {
        return 'teal accent-1';
      }
    }
    return '';
  }

  public beforeDestroy() {
    NotificationFactory.unsubscribeFromAll(this);
  }

    // data filter with rankings, the code for this has been separated out into its own class
  // 1) was making the view class too complex
  // 2) allows reuse of some nice code
  // 3) filtering is more business logic than display logic
  // 4) the filter class can passed to components
  //
  get filteredList(): GenericCollectionModel<IApiModel> {
    return this.configuration.filterListService.filterWithRankings(this.listFilterText, this.dataList);
  }

   // obtain list via repository from the server
   public getData() {
    this.isLoading = true;
    this.isAnApiError = false;
    this.configuration.repository.getFilteredList(this.configuration.filterModel)
      .onSuccess((itemList: GenericCollectionModel<IApiModel>) => {
        this.dataList = itemList;
        this.dataList.sortAscByString((a, b) => ({ a: a.entitySortValue, b: b.entitySortValue }));
        this.isLoading = false;
      })
      .onFailed((errorMessage: string) => {
        this.isLoading = false;
        this.isAnApiError = true;
      });
  }

  // Recieve notification from the generic repository, the repo
  // issues notification when a record has successfully updated via the
  // api
  private listenToModelUpdates() {
    NotificationFactory.instance.getNotificationInstance<IApiModel>(this.configuration.summaryEntityName)
      .onItemCreated(this, (model: IApiModel) => {
        // console.log('[1] Navigation List Component - list to updates - item created');
        this.updateList(model, true);
      })
      .onItemUpdated(this, (model: IApiModel) => {
        // console.log('[2] Navigation List Component - list to updates - item updated');
        this.updateList(model, false);
      })
      .onItemDeleted(this, (model: IApiModel) => {
        // console.log('[3] Navigation List Component - list to updates - item deleted');
        this.updateList(model, false);
      })
      .onItemActivated(this, (model: IApiModel) => {
        // console.log('[4] Navigation List Component - list to updates - item activated');
        this.updateList(model, false);
      })
      .onItemDeactivated(this, (model: IApiModel) => {
        // console.log('[5] Navigation List Component - list to updates - item deactivated');
        this.updateList(model, false);
      });
  }

  // a model in the list has been updated, this routine wil synchronise
  // the new data model with the existing list, removing the need to perform
  // more i/o operations
  private updateList(model: IApiModel, isNew: boolean) {
    if (isNew) {
      this.dataList.addItem(model);
      this.selectedItem = model;
    }
    this.dataList.updateItem(this, model, (item) => model.entityKey === item.entityKey);
    this.dataList.sortAscByString((a, b) => ({ a: a.entitySortValue, b: b.entitySortValue }));
  }
}

Vue.component('crm-navigation-list', NavigationListComponent);
