import { EnumModalWidth }                       from '@/componentsCommonGui/dialogs/constants/StandardDialogWidth';
import { IComponentMetaData }                   from '@/components/interfaces/ComponentMetaDataInterfaces';
import { MaterialDesignColor }                  from '@/services/colors/materialDesign/constants/MaterialDesignColors';
import BaseListPage                             from '@/componentsBusinessGui/base/BaseListPage';
import CommonAppDialogController                from '@/componentsCommonGui/dialogs/commonAppDialog/CommonAppDialogController';
import CommonAppDialogOptions                   from '@/componentsCommonGui/dialogs/commonAppDialog/CommonAppDialogOptions';
import Component                                from "vue-class-component";
import FilterButton                             from '@/componentsCommonGui/filterButton/FilterButton';
import FilterJobRoleService                     from '@/services/filters/JobRoleFilterService/FilterJobRoleService';
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';
import JobRoleRepositoryFactory                 from '@/repositories/factory/JobRoleRepositoryFactory';
import JobRoleSummaryModel                      from '@/repositories/models/jobRole/JobRoleSummaryModel';
import ListFiltersDialog                        from '@/componentsCommonGui/listFilterDialog/ListFiltersDialog.vue';
import ListFiltersDialogCode                    from '@/componentsCommonGui/listFilterDialog/ListFiltersDialog';
import Loader                                   from '@/componentsCommonGui/loader/Loader';
import NavigationCrudJobRole                    from '@/routeNavigation/NavigationCrudJobRole';
import ObjectArrayMapperJobRoleModel            from '@/repositories/objectMappers/jobRole/ObjectArrayMapperJobRoleModel';
import ObjectMapperJobRoleExtendedModel         from '@/repositories/objectMappers/jobRole/ObjectMapperJobRoleExtendedModel';


/**
 * Presents a list of categories to the user that can be filtered
 * by record status (current,deleted or all)
 * 
 * when a asset type is selected its details will be displayed
 * 
 * @export
 * @class JobRoleList
 * @extends {BaseListPage}
 * @implements {IComponentMetaData}
 */
@Component({
  components: {
    Loader,
    FilterButton
  }
})
export default class JobRoleList extends BaseListPage<JobRoleSummaryModel> implements IComponentMetaData {

  //IComponentMetaData
  componentName: string = "Job Role List";
  componentDescription: string = "Displays a list of job roles";
  //IComponentMetaData  

  constructor() {
    super(  new NavigationCrudJobRole(), 
              JobRoleRepositoryFactory.getRepository(),
            new ObjectMapperJobRoleExtendedModel(),
            new ObjectArrayMapperJobRoleModel())
  }

  //
  // View has been mounted
  //
  mounted() {
    super.mounted();
  }

  // before the view is destroyed, it must unsubscribe from
  // any notifications
  beforeDestroy() {
    super.beforeDestroy();
  }



  /**
   * When the filter button is pressed the filter dialog modal will be displayed
   * allowing the user to filter  the record types
   * 
   * @memberof PersonList
   */
  onFilterClicked() {

    // Create view to show in the dialog
    //
    var dialog = new ListFiltersDialog();
    var dialogCode = <ListFiltersDialogCode>dialog;
    dialogCode.themeColor = MaterialDesignColor.blue;
    dialogCode.initialStateOnLoad = this.dataListState;
    
    // Create Dialog Options
    //
    var options = new CommonAppDialogOptions();
    options.title = "Filter Job Roles";
    options.dialogWidth = EnumModalWidth.FixedMedium;
    options.themeColor = MaterialDesignColor.blue;    
    var appDialog = new CommonAppDialogController(this);

    // display the dialog box
    //    
    appDialog.createWithOptionsObject(options)
      .supplyCustomBody(() => { 
        return dialog 
      })
      .okPressed(() => {

        // record filter settings made by the user
        this.dataListState = dialogCode.state;

        //
        // update filter model for api, supply record state required (active, inactive, all)
        //  and any filters by branch type
        this.filterModel.recordActiveStatusFilter = this.dataListState.recordActivityStatus;
        this.getData();
      })
      .show();
  }

  //
  // user has pressed the clear button on the text filter
  //
  onFilterClearClicked() {
    super.onFilterClearClicked();
  }

  //
  // user pressed the add button to create a new job role
  //
  onAddClicked() {
    super.onAddClicked();
  }

  //
  // a list item has been selected, navigate to the job role view screen
  //
  onSelectItem(item: JobRoleSummaryModel) {
    super.onSelectItem(item);
  }

  /**
   * update the list items with a refresh version of the
   * item after it has been edited
   * @private
   * @param {string} listItemId
   * @param {boolean} isNew - if this is a new item, it is injected into the list array
   * @memberof PersonList
   */
  updateList(model: JobRoleSummaryModel, isNew: boolean) {
    if (isNew) {
      this.dataList.addItem(model);
      this.selectedItem = model;
    }
    this.dataList.updateItem(this, model, (item) => { return model.jobRoleId == item.jobRoleId })
    this.dataList.sortAscByString((a, b) => { return { a: a.name, b: b.name } });
  }


  //
  // asset type filtering with rankings, the code for this has been separated out into its own class 
  // 1) was making the view class too complex
  // 2) allows reuse of some nice code
  // 3) filtering is more business logic than display logic
  //
  get filteredList(): GenericCollectionModel<JobRoleSummaryModel> {
     var filterListService = new FilterJobRoleService();
     return filterListService.filterWithRankings("",this.dataList)
  }

}
