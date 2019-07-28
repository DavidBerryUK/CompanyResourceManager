import { EnumRepositoryDataSource }               from '@/repositories/listRepository/ListRepository';
import { EnumRepositoryListMode }                 from '@/repositories/listRepository/ListRepository';
import Component                                  from 'vue-class-component';
import ElementPageWrapperComponent                from '@/componentsCommonGui/elementPageWrapper/ElementPageWrapperComponent';
import GenericCollectionModel                     from '@/repositories/models/shared/collections/GenericCollectionModel';
import ListItemModel                              from '@/repositories/models/shared/collections/ListItemModel';
import ListRepository                             from '@/repositories/listRepository/ListRepository';
import Vue                                        from 'vue';


@Component({
  components: {
    ElementPageWrapperComponent,
  },
})
export default class DevelopmentPage extends Vue {

  public data(): any {
    return {};
  }

  public mounted() {

    console.log('******************************************************************');
    console.log('Develop page mounted');

    const repository = new ListRepository(EnumRepositoryDataSource.TeamPerson, EnumRepositoryListMode.All, '326f4b79-a524-4190-9524-f682e0aacb0e');
    repository.get()
    .onSuccess((list: GenericCollectionModel<ListItemModel>) => {
      console.log(list);
    });

  }
}
