import { IComponentMetaData }                   from '@/components/interfaces/ComponentMetaDataInterfaces';
import BaseViewPage                             from '@/componentsBusinessGui/base/BaseViewPage';
import Component                                from 'vue-class-component';
import EntityViewTemplateComponent              from '@/componentsCommonGui/entityViewTemplate/EntityViewTemplateComponent.vue';
import LabelDataReadOnly                        from '@/componentsCommonGui/labelDataReadOnly/LabelDataReadOnly.vue';
import NavigationCrudSecurityGroup              from '@/routeNavigation/NavigationCrudSecurityGroup';
import SecurityGroupRepositoryFactory           from '@/repositories/factory/SecurityGroupRepositoryFactory';
import SecurityGroupSummaryModel                from '@/repositories/models/securityGroup/SecurityGroupSummaryModel';

@Component({
  components: {
    EntityViewTemplateComponent,
    LabelDataReadOnly,
  },
})
export default class SecurityGroupView extends BaseViewPage<SecurityGroupSummaryModel> implements IComponentMetaData {

  // IComponentMetaData
  public componentName: string = 'Security Group View';
  public componentDescription: string = 'Enables the user to view an Security Group';
  // IComponentMetaData

  constructor() {
    super(
      new NavigationCrudSecurityGroup(),
      SecurityGroupRepositoryFactory.getRepository());

    this.model = new SecurityGroupSummaryModel();
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
