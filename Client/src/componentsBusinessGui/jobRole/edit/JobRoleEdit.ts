import { IComponentMetaData }                   from '../../../components/interfaces/ComponentMetaDataInterfaces';
import { IRouteBeforeNavigationCheck }          from '../../../router/interfaces/NavigationCheckInterfaces';
import BaseEditPage                             from '@/componentsBusinessGui/base/BaseEditPage';
import Component                                from "vue-class-component";
import FormEditHeader                           from '@/componentsCommonGui/formEditHeader/FormEditHeader';
import JobRoleModel                             from '@/repositories/models/jobRole/JobRoleModel';
import JobRoleRepositoryFactory                 from '@/repositories/factory/JobRoleRepositoryFactory';
import LabelDataReadOnly                        from '@/componentsCommonGui/labelDataReadOnly/LabelDataReadOnly';
import NavigationCrudJobRole                    from '@/routeNavigation/NavigationCrudJobRole';
import ObjectMapperJobRoleModel                      from '@/repositories/objectMappers/jobRole/ObjectMapperJobRoleModel';

//
// attribute indicates this is a component, 
//  this is where any sub components are also registered
@Component({
  components: {
    LabelDataReadOnly,
    FormEditHeader
  }
})

export default class JobRoleEdit extends BaseEditPage<JobRoleModel> implements IRouteBeforeNavigationCheck, IComponentMetaData {

  //IComponentMetaData
  public componentName: string = "Asset Type Edit";
  public componentDescription: string = "Enables the user to edit an Asset Type";
  //IComponentMetaData

  // list of different asset types types, 
  //

  constructor() {
    super(  new NavigationCrudJobRole(),
            JobRoleRepositoryFactory.getRepository(),
            new ObjectMapperJobRoleModel());    
  }

  mounted() {
    super.mounted();
  }

  // the cancel button has been pressed
  onCancel() {
    super.onCancel();
  }

  // the delete button has been pressed
  //
  onArchive() {
    super.onArchive();
  }

  // the save button has been pressed by the users
  //
  onSave() {
    super.onSave();
  }
}
