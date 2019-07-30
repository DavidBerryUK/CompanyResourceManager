import { EnumListCompomentTitle }               from '@/componentsCommonGui/listItem/ListItemComponentEnums';
import { EnumListComponentStyle }               from '@/componentsCommonGui/listItem/ListItemComponentEnums';
import { EnumListComponentValueDisplay }        from '@/componentsCommonGui/listItem/ListItemComponentEnums';
import { EnumListTextFilter }                   from '@/componentsCommonGui/listItem/ListItemComponentEnums';
import { EnumRepositoryDataSource }             from '@/repositories/listRepository/ListRepositoryEnum';
import { EnumRepositoryListMode }               from '@/repositories/listRepository/ListRepositoryEnum';
import { IComponentMetaData }                   from '@/components/interfaces/ComponentMetaDataInterfaces';
import BaseViewPage                             from '@/componentsBusinessGui/base/BaseViewPage';
import Component                                from 'vue-class-component';
import EntityViewTemplateComponent              from '@/componentsCommonGui/entityViewTemplate/EntityViewTemplateComponent.vue';
import LabelDataReadOnly                        from '@/componentsCommonGui/labelDataReadOnly/LabelDataReadOnly.vue';
import NavigationCrudPerson                     from '@/routeNavigation/NavigationCrudPerson';
import PersonExtendedModel                      from '@/repositories/models/person/PersonExtendedModel';
import PersonRepositoryFactory                  from '@/repositories/factory/PersonRepositoryFactory';

@Component({
  components: {
    EntityViewTemplateComponent,
    LabelDataReadOnly,
  },
})
export default class PersonView extends BaseViewPage<PersonExtendedModel> implements IComponentMetaData {


  // IComponentMetaData
  public componentName: string = 'Person View';
  public componentDescription: string = 'Enables the user to view a Person';
  // IComponentMetaData

  public EnumListCompomentTitle = EnumListCompomentTitle;
  public EnumListComponentStyle = EnumListComponentStyle;
  public EnumListComponentValueDisplay = EnumListComponentValueDisplay;
  public EnumListTextFilter = EnumListTextFilter;
  public EnumRepositoryDataSource = EnumRepositoryDataSource;
  public EnumRepositoryListMode = EnumRepositoryListMode;

  constructor() {
    super(
      new NavigationCrudPerson(),
      PersonRepositoryFactory.getRepository());

    this.model = new PersonExtendedModel();
  }

  public mounted() {
    super.mounted();
  }

  public onEdit() {
    super.onEdit();
  }

  public onRestore() {
    super.onRestore();
  }
}
