import { IComponentMetaData }                   from '../../../../components/interfaces/ComponentMetaDataInterfaces';
import { IRouteBeforeNavigationCheck }          from '../../../../router/interfaces/NavigationCheckInterfaces';
import BaseEditPage                             from '@/componentsBusinessGui/base/BaseEditPage';
import Component                                from 'vue-class-component';
import EntityEditTemplateComponent              from '@/componentsCommonGui/entityEditTemplate/EntityEditTemplateComponent';
import FormEditHeader                           from '@/componentsCommonGui/formEditHeader/FormEditHeader';
import ModelMapperFactorySecuityGroup           from '@/repositories/modelMappers/ModelMapperFactorySecurityGroup';
import NavigationCrudSecurityGroup              from '@/routeNavigation/NavigationCrudSecurityGroup';
import SecurityGroupRepositoryFactory           from '@/repositories/factory/SecurityGroupRepositoryFactory';
import SecurityGroupSummaryModel                from '@/repositories/models/securityGroup/SecurityGroupSummaryModel';

//
// attribute indicates this is a component,
//  this is where any sub components are also registered
@Component({
  components: {
    EntityEditTemplateComponent,
    FormEditHeader,
  },
})
export default class SecurityGroupEdit extends BaseEditPage<SecurityGroupSummaryModel>
  implements IRouteBeforeNavigationCheck, IComponentMetaData {
  // IComponentMetaData
  public componentName: string = 'Security Group Edit';
  public componentDescription: string = 'Enables the user to edit a Security Group';
  // IComponentMetaData

  // list of different skill types,
  //

  constructor() {
    super(
      new NavigationCrudSecurityGroup(),
      SecurityGroupRepositoryFactory.getRepository(),
      ModelMapperFactorySecuityGroup.createExtendedMapper());
  }

  // the form has been mounted into the DOM
  public mounted() {
    super.mounted();
  }

  // the cancel button has been pressed
  public onCancel() {
    super.onCancel();
  }

  // the delete button has been pressed
  //
  public onArchive() {
    super.onArchive();
  }

  // the save button has been pressed by the users
  //
  public onSave() {
    super.onSave();
  }
}
