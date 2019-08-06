import { Prop }                                 from 'vue-property-decorator';
import { Watch }                                from 'vue-property-decorator';
import Component                                from 'vue-class-component';
import ContactGroupExtendedModel                from '@/repositories/models/contactGroup/ContactGroupExtendedModel';
import ContactGroupRepositoryFactory            from '@/repositories/factory/ContactGroupRepositoryFactory';
import ContactLineComponent                     from '../contactLine/ContactLineComponent';
import ContactTypeRepositoryFactory             from '@/repositories/factory/ContactTypeRepositoryFactory';
import ContractListener                         from '@/repositories/contracts/ContractListener';
import GenericCollectionModel                   from '@/repositories/models/shared/collections/GenericCollectionModel';
import ListItemModel                            from '@/repositories/models/ListItem/ListItemModel';
import Vue                                      from 'vue';

@Component({
  components: {
    ContactLineComponent,
  },
})
export default class ContactGroupComponent extends Vue {

  @Prop() public contactGroupId!: string;

  public contactGroup: ContactGroupExtendedModel = new ContactGroupExtendedModel();
  public contactTypes: Array<ListItemModel> = new Array<ListItemModel>();

  private isLoading: boolean = true;

  public mounted() {
    this.getData();
 }

  @Watch('contactGroupId')
  private watchContactGroupId() {
    this.getData();
  }

  /** Load the contact group */
  private getData() {

    const contactGroupRepository = ContactGroupRepositoryFactory.getRepository();
    const contactTypeRepository = ContactTypeRepositoryFactory.getRepository();
    const listener = new ContractListener();

    this.isLoading = true;

    listener.monitor()
            .onAllResponded(() => {
                this.isLoading = false;
            });

    contactGroupRepository.getById(this.contactGroupId)
    .onSuccess((model: ContactGroupExtendedModel) => {
      this.contactGroup = model;
    })
    .contractListener(listener);

    contactTypeRepository.getActiveList()
    .onSuccess((contactTypeCollection: GenericCollectionModel<ListItemModel>) => {
      this.contactTypes = contactTypeCollection.items;
    })
    .contractListener(listener);

  }
}

Vue.component('crm-contact-group', ContactGroupComponent);
