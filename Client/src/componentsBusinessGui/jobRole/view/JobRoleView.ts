import { IComponentMetaData }                   from '@/components/interfaces/ComponentMetaDataInterfaces';
import BaseViewPage                             from '@/componentsBusinessGui/base/BaseViewPage';
import Component                                from 'vue-class-component';
import EntityViewTemplateComponent              from '@/componentsCommonGui/entityViewTemplate/EntityViewTemplateComponent.vue';
import JobRoleRepositoryFactory                 from '@/repositories/factory/JobRoleRepositoryFactory';
import JobRoleSummaryModel                      from '@/repositories/models/jobRole/JobRoleSummaryModel';
import LabelDataReadOnly                        from '@/componentsCommonGui/labelDataReadOnly/LabelDataReadOnly.vue';
import NavigationCrudJobRole                    from '@/routeNavigation/NavigationCrudJobRole';

@Component({
  components: {
    EntityViewTemplateComponent,
    LabelDataReadOnly,
  },
})
export default class JobRoleView extends BaseViewPage<JobRoleSummaryModel> implements IComponentMetaData {

  // IComponentMetaData
  public componentName: string = 'Asset Type View';
  public componentDescription: string = 'Enables the user to view an Asset Type';
  // IComponentMetaData

  constructor() {
    super(
      new NavigationCrudJobRole(),
      JobRoleRepositoryFactory.getRepository());

    this.model = new JobRoleSummaryModel();
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
