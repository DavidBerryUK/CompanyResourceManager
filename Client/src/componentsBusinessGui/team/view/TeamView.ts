import { IComponentMetaData }                   from '@/components/interfaces/ComponentMetaDataInterfaces';
import BaseViewPage                             from '@/componentsBusinessGui/base/BaseViewPage';
import Component                                from 'vue-class-component';
import EntityViewTemplateComponent              from '@/componentsCommonGui/entityViewTemplate/EntityViewTemplateComponent.vue';
import LabelDataReadOnly                        from '@/componentsCommonGui/labelDataReadOnly/LabelDataReadOnly.vue';
import NavigationCrudJobRole                    from '@/routeNavigation/NavigationCrudJobRole';
import TeamRepositoryFactory                    from '@/repositories/factory/TeamRepositoryFactory';
import TeamSummaryModel                         from '@/repositories/models/team/TeamSummaryModel';

@Component({
  components: {
    EntityViewTemplateComponent,
    LabelDataReadOnly,
  },
})
export default class TeamView extends BaseViewPage<TeamSummaryModel> implements IComponentMetaData {

  // IComponentMetaData
  public componentName: string = 'Team View';
  public componentDescription: string = 'Enables the user to view a Team';
  // IComponentMetaData

  constructor() {
    super(
      new NavigationCrudJobRole(),
      TeamRepositoryFactory.getRepository());

    this.model = new TeamSummaryModel();
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
