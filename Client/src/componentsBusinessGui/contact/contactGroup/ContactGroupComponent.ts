import { Prop }                                 from 'vue-property-decorator';
import { Watch }                                from 'vue-property-decorator';
import Component                                from 'vue-class-component';
import ContactGroupExtendedModel                from '@/repositories/models/contactGroup/ContactGroupExtendedModel';
import ContactGroupRepositoryFactory            from '@/repositories/factory/ContactGroupRepositoryFactory';
import ContactLineComponent                     from '../contactLine/ContactLineComponent';
import Vue                                      from 'vue';

@Component({
  components: {
    ContactLineComponent,
  },
})
export default class ContactGroupComponent extends Vue {

  @Prop() public contactGroupId!: string;

  public contactGroup: ContactGroupExtendedModel = new ContactGroupExtendedModel();

  private isLoading: boolean = true;

  constructor() {
    super();
  }

  @Watch('contactGroupId')
  private watchContactGroupId() {
    this.getData();
  }
  /** Load the contact group */
  private getData() {
    this.isLoading = true;
    const contactGroupRepository = ContactGroupRepositoryFactory.getRepository();

    contactGroupRepository.getById(this.contactGroupId)
    .onSuccess((model: ContactGroupExtendedModel) => {
      this.contactGroup = model;
    })
    .then(() => {
      this.isLoading = false;
    });

  }
}

Vue.component('crm-contact-group', ContactGroupComponent);
