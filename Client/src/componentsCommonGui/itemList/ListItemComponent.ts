import { Prop }                                 from 'vue-property-decorator'
import Component                                from 'vue-class-component'
import Loader                                   from '@/componentsCommonGui/loader/Loader';
import UiListCollection                         from './models/UiListCollection';
import UiListFilterService                      from '../../services/filters/UiListFilterService';
import UiListItem                               from './models/UiListItem';
import Vue                                      from 'vue'

@Component({
  components: {
    Loader
  }
})
export default class ListItemComponent extends Vue {

  @Prop()
  public itemCollection: UiListCollection = new UiListCollection();

  @Prop()
  public title: string = "";

  @Prop()
  public themeColor: string = "";

  listFilterText: string = "";

  get filteredListItems(): Array<UiListItem> {

    var filteredList = UiListFilterService.filterWithRankings(this.listFilterText, this.itemCollection);
    return filteredList.items;
  }

  onShowAllItemsChanged() {
    if (this.itemCollection.allSelected) {
      this.onFilterClearPressed();
    }
  }

  onFilterClearPressed() {
    this.listFilterText = "";
  }

  data() {
    return {
    }
  }

}

Vue.component('list-item-component', ListItemComponent)