import { EnumListCompomentTitle }                 from './../../componentsCommonGui/listItem/ListItemComponentEnums';
import { EnumListComponentStyle }                 from './../../componentsCommonGui/listItem/ListItemComponentEnums';
import { EnumListComponentValueDisplay }          from './../../componentsCommonGui/listItem/ListItemComponentEnums';
import { EnumListTextFilter }                     from './../../componentsCommonGui/listItem/ListItemComponentEnums';
import { EnumRepositoryDataSource }               from '@/repositories/listRepository/ListRepositoryEnum';
import { EnumRepositoryListMode }                 from '@/repositories/listRepository/ListRepositoryEnum';
import Component                                  from 'vue-class-component';
import ElementPageWrapperComponent                from '@/componentsCommonGui/elementPageWrapper/ElementPageWrapperComponent';
import GenericCollectionModel                     from '@/repositories/models/shared/collections/GenericCollectionModel';
import ListItemCollectionModel                    from '@/repositories/models/listItem/ListItemCollectionModel';
import ListItemComponent                          from '@/componentsCommonGui/listItem/ListItemComponent';
import ListItemModel                              from '@/repositories/models/listItem/ListItemModel';
import ListRepository                             from '@/repositories/listRepository/ListRepository';
import Vue                                        from 'vue';

@Component({
  components: {
    ElementPageWrapperComponent,
    ListItemComponent,
  },
})
export default class DevelopmentPage extends Vue {

  public listData: ListItemCollectionModel = new ListItemCollectionModel();
  public EnumListComponentStyle = EnumListComponentStyle;
  public EnumListComponentValueDisplay = EnumListComponentValueDisplay;
  public EnumListCompomentTitle = EnumListCompomentTitle;
  public EnumListTextFilter = EnumListTextFilter;
  public EnumRepositoryDataSource = EnumRepositoryDataSource;
  public EnumRepositoryListMode = EnumRepositoryListMode;

  public data(): any {
    return {};
  }

  // public mounted() {
  //   this.getData();
  // }

  // private getData() {
  //   const repository = new ListRepository(
  //     EnumRepositoryDataSource.TeamPerson,
  //     EnumRepositoryListMode.All,
  //     '326f4b79-a524-4190-9524-f682e0aacb0e');

  //   repository.get()
  //   .onSuccess((list: GenericCollectionModel<ListItemModel>) => {
  //       this.listData = new ListItemCollectionModel(list.items);
  //   });
  // }

}
