import { Component, Watch }                            from 'vue-property-decorator';
import { EnumListCompomentTitle }               from './ListItemComponentEnums';
import { EnumListComponentStyle }               from './ListItemComponentEnums';
import { EnumListComponentValueDisplay }        from './ListItemComponentEnums';
import { EnumListTextFilter }                   from './ListItemComponentEnums';
import { EnumRepositoryDataSource }             from '@/repositories/listRepository/ListRepositoryEnum';
import { EnumRepositoryListMode }               from '@/repositories/listRepository/ListRepositoryEnum';
import { Prop }                                 from 'vue-property-decorator';
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

  @Prop({default: EnumListCompomentTitle.listHeader})
  public titleStyle!: EnumListCompomentTitle;

  @Prop()
  public title!: string;

  @Prop({default: EnumListTextFilter.none})
  public showTextFilter!: EnumListTextFilter;

  /**
   * Optional Repository Parameter - component can
   * load data directly from api
   */
  @Prop({default: EnumRepositoryDataSource.None})
  public repoDataSource!: EnumRepositoryDataSource;

  /**
   * Optional Repository Parameter - component can
   * load data directly from api
   */
  @Prop({default: EnumRepositoryListMode.Default})
  public repoListMode!: EnumRepositoryListMode;

  /**
   * Optional Repository Parameter - component can
   * load data directly from api
   */
  @Prop({default: ''})
  public repoReferenceId!: string;

  public isLoading: boolean = false;

  public listFilterText: string = '';

  private repoListData: ListItemCollectionModel = new ListItemCollectionModel();

  private filterListItemService = new FilterListItemService();

  private useRepoData: boolean = false;

  private get listData(): Array<ListItemModel> {
    if ( this.useRepoData ) {
      return this.repoListData.all;
    }
    return this.list;
  }

  @Watch('repoReferenceId')
  public repoReferenceIdUpdated() {
    this.getData();
  }

  public mounted() {
    if ( this.repoDataSource !== EnumRepositoryDataSource.None ) {
      this.getData();
    }
  }

  get listFiltered(): Array<ListItemModel> {
    return  this.filterListItemService.filterWithRankings(this.listFilterText, this.listData);
  }

  public get isHeaderStyleHeader(): boolean {
    if ( this.showTextFilter === EnumListTextFilter.inHeader) {
      return true;
    }
    return this.titleStyle === EnumListCompomentTitle.listHeader;
  }

  public get isHeaderStyleSimple(): boolean {
    if ( this.showTextFilter === EnumListTextFilter.inHeader) {
      return false;
    }
    return this.titleStyle === EnumListCompomentTitle.simple;
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
    if (this.repoReferenceId === '') {
      this.isLoading = false;
      return;
    }

    this.isLoading = true;

    const repository = new ListRepository(
      this.repoDataSource,
      this.repoListMode,
      this.repoReferenceId);

    repository.get()
    .onSuccess((list: GenericCollectionModel<ListItemModel>) => {
        this.useRepoData = true;
        this.repoListData = new ListItemCollectionModel(list.items);
    })
    .then(() => {
      this.isLoading = false;
    });
  }
}

Vue.component('crm-list-items', ListItemComponent);
