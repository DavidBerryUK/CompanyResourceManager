import { Component }                            from 'vue-property-decorator';
import { EnumListComponentStyle }               from './ListItemComponentEnums';
import { EnumListComponentTitle }               from './ListItemComponentEnums';
import { EnumListComponentValueDisplay }        from './ListItemComponentEnums';
import { EnumListTextFilter }                   from './ListItemComponentEnums';
import { EnumRepositoryDataSource }             from '@/repositories/listRepository/ListRepositoryEnum';
import { EnumRepositoryListMode }               from '@/repositories/listRepository/ListRepositoryEnum';
import { Prop }                                 from 'vue-property-decorator';
import { Watch }                                from 'vue-property-decorator';
import FilterListItemService                    from '@/services/filters/listItemFilterService/FilterListItemService';
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';
import ListItemCollectionModel                  from '@/repositories/models/listItem/ListItemCollectionModel';
import ListItemModel                            from '@/repositories/models/listItem/ListItemModel';
import ListRepository                           from '@/repositories/listRepository/ListRepository';
import Loader                                   from '@/componentsCommonGui/loader/Loader';
import Vue                                      from 'vue';

@Component({
  components: {
    Loader,
  },
})
export default class ListItemComponent extends Vue {

  @Prop({default: EnumListComponentStyle.wordsCsvWithAnd})
  public listStyle!: EnumListComponentStyle;

  @Prop({default: () => new Array<ListItemModel>()})
  public list!: Array<ListItemModel>;

  @Prop({default: EnumListComponentValueDisplay.none})
  public valueDisplay!: EnumListComponentValueDisplay;

  @Prop({default: EnumListComponentTitle.listHeader})
  public titleStyle!: EnumListComponentTitle;

  @Prop()
  public title!: string;

  @Prop({default: EnumListTextFilter.none})
  public showTextFilter!: EnumListTextFilter;

  @Prop({default: true})
  public realtimeUpdates!: boolean;

  /**
   * Optional Repository Parameter - component can
   * load data directly from api
   */
  @Prop({default: EnumRepositoryDataSource.None})
  public repositoryDataSource!: EnumRepositoryDataSource;

  /**
   * Optional Repository Parameter - component can
   * load data directly from api
   */
  @Prop({default: EnumRepositoryListMode.Default})
  public repositoryListMode!: EnumRepositoryListMode;

  /**
   * Optional Repository Parameter - component can
   * load data directly from api
   */
  @Prop({default: ''})
  public repositoryReferenceId!: string;

  public isLoading: boolean = false;

  public listFilterText: string = '';

  private repositoryListData: ListItemCollectionModel = new ListItemCollectionModel();

  private filterListItemService = new FilterListItemService();

  private useRepositoryData: boolean = false;

  private listRepository!: ListRepository;

  private get listData(): Array<ListItemModel> {
    if ( this.useRepositoryData ) {
      return this.repositoryListData.all;
    }
    return this.list;
  }

  @Watch('repositoryReferenceId')
  public repositoryReferenceIdUpdated() {
    this.getData();
  }

  public mounted() {
    if ( this.repositoryDataSource !== EnumRepositoryDataSource.None ) {
      this.getData();
    }
  }

  get listFiltered(): Array<ListItemModel> {
    return  this.filterListItemService.filterWithRankings(this.listFilterText, this.listData);
  }

  public itemValueChange(item: ListItemModel) {
    this.listRepository.updateItem(item)
      .onSuccess((data: ListItemModel) => {
        console.log(`[ListItemComponent:itemUpdateValue] - response - success `);
        console.log(data);
      }).onFailed((error: string) => {
        console.log(`[ListItemComponent:itemUpdateValue] - response failed ${error}`);
      }).then(() => {
        console.log(`[ListItemComponent:itemUpdateValue] - response - then `);
      });
  }

  public get isHeaderStyleHeader(): boolean {
    if ( this.showTextFilter === EnumListTextFilter.inHeader) {
      return true;
    }
    return this.titleStyle === EnumListComponentTitle.listHeader;
  }

  public get isHeaderStyleSimple(): boolean {
    if ( this.showTextFilter === EnumListTextFilter.inHeader) {
      return false;
    }
    return this.titleStyle === EnumListComponentTitle.simple;
  }

  public get isHeaderHtmlList(): boolean {
    const response = this.listStyle === EnumListComponentStyle.htmlList;
    return response;
  }

  public get isList(): boolean {
    const response = this.listStyle === EnumListComponentStyle.list;
    return response;
  }

  public get isTextFilterInHeader(): boolean {
    const response = this.showTextFilter === EnumListTextFilter.inHeader;
    return response;
  }

  public get isTextFilterUnderHeader(): boolean {
    const response = this.showTextFilter === EnumListTextFilter.belowHeader;
    return response;
  }

  public get isValueSwitchVisible(): boolean {
    return this.valueDisplay === EnumListComponentValueDisplay.switch;
  }

  public get isValueCheckboxVisible(): boolean {
    return this.valueDisplay === EnumListComponentValueDisplay.checkbox;
  }

  public get isValueTextVisible(): boolean {
    return this.valueDisplay === EnumListComponentValueDisplay.text;
  }

  public get isStyleWords(): boolean {
    const response = this.listStyle === EnumListComponentStyle.wordsCsv ||
      this.listStyle === EnumListComponentStyle.wordsCsvWithAnd;
    return response;
  }

  public get words(): string {
      return this.listAsWords(
        this.listData,
        this.listStyle === EnumListComponentStyle.wordsCsvWithAnd);
  }

  /**
   * return this list as comma delimited list, with optional word 'and'
   * for the last word
   * @param list - list of words
   */
  private listAsWords(list: Array<ListItemModel>, useAnd: boolean = false): string {
    const count = list.length;
    let message = '';
    for (let index = 0; index < count; index++) {
      message = message + list[index].name;
      if (index < (count - 1)) {
        if (index === (count - 2) && useAnd ) {
          message = message + ' and ';
        } else {
          message = message + ', ';
        }
      }
    }
    return message;
  }

  private getData() {

    if (this.repositoryReferenceId === '') {
      this.isLoading = false;
      return;
    }

    this.isLoading = true;

    this.listRepository = new ListRepository(
      this.repositoryDataSource,
      this.repositoryListMode,
      this.repositoryReferenceId);

    this.listRepository.get()
    .onSuccess((list: GenericCollectionModel<ListItemModel>) => {
        this.useRepositoryData = true;
        this.repositoryListData = new ListItemCollectionModel(list.items);
    })
    .then(() => {
      this.isLoading = false;
    });
  }
}

Vue.component('crm-list-items', ListItemComponent);
