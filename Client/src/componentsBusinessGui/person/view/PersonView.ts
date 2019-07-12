import { IComponentMetaData }                   from '@/components/interfaces/ComponentMetaDataInterfaces';
import BaseViewPage                             from '@/componentsBusinessGui/base/BaseViewPage';
import Component                                from "vue-class-component";
import FormViewHeader                           from '@/componentsCommonGui/formViewHeader/FormViewHeader.vue';
import LabelDataReadOnly                        from '@/componentsCommonGui/labelDataReadOnly/LabelDataReadOnly.vue';
import NavigationCrudPerson                     from '@/routeNavigation/NavigationCrudPerson';
import PersonExtendedModel                      from '@/repositories/models/person/PersonExtendedModel';
import PersonRepositoryFactory                  from '@/repositories/factory/PersonRepositoryFactory';

@Component({
  components: {
    FormViewHeader,
    LabelDataReadOnly
  }
})
export default class PersonView extends BaseViewPage<PersonExtendedModel> implements IComponentMetaData {

  //IComponentMetaData
  public componentName : string = "Person View";
  public componentDescription : string = "Enables the user to view a Person";
  //IComponentMetaData
  
  constructor() {
    super(
      new NavigationCrudPerson(), 
      PersonRepositoryFactory.getRepository());

    this.model = new PersonExtendedModel();
  }

  mounted() {
    super.mounted();
  }

  onEdit() {
    super.onEdit();
  }

  onRestore() {
    super.onRestore();
  }
  
}
