import { IComponentMetaData }                   from '@/components/interfaces/ComponentMetaDataInterfaces';
import BaseViewPage                             from '@/componentsBusinessGui/base/BaseViewPage';
import Component                                from 'vue-class-component';
import EntityViewTemplateComponent              from '@/componentsCommonGui/entityViewTemplate/EntityViewTemplateComponent.vue';
import LabelDataReadOnly                        from '@/componentsCommonGui/labelDataReadOnly/LabelDataReadOnly.vue';
import NavigationCrudJobRole                    from '@/routeNavigation/NavigationCrudJobRole';
import SkillRepositoryFactory                   from '@/repositories/factory/SkillRepositoryFactory';
import SkillSummaryModel                        from '@/repositories/models/skill/SkillSummaryModel';

@Component({
  components: {
    EntityViewTemplateComponent,
    LabelDataReadOnly,
  },
})
export default class SkillView extends BaseViewPage<SkillSummaryModel> implements IComponentMetaData {

  // IComponentMetaData
  public componentName: string = 'Skill View';
  public componentDescription: string = 'Enables the user to view an Skill';
  // IComponentMetaData

  constructor() {
    super(
      new NavigationCrudJobRole(),
      SkillRepositoryFactory.getRepository());

    this.model = new SkillSummaryModel();
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
