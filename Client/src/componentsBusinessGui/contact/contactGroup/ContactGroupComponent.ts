import { IRouteBeforeNavigationCheck }        from '@/router/interfaces/NavigationCheckInterfaces';
import { Prop }                                 from 'vue-property-decorator';
import { Watch }                                from 'vue-property-decorator';
import Component                                from 'vue-class-component';
import ContactGroupRepositoryFactory            from '@/repositories/factory/ContactGroupRepositoryFactory';
import ContactGroupSummaryModel                 from '@/repositories/models/contactGroup/ContactGroupSummaryModel';
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
export default class ContactGroupComponent extends Vue implements IRouteBeforeNavigationCheck {

  @Prop() public contactGroupId!: string;

  public contactGroup: ContactGroupSummaryModel = new ContactGroupSummaryModel();
  public contactTypes: Array<ListItemModel> = new Array<ListItemModel>();

  private isLoading: boolean = true;

  public mounted() {
    this.getData();
  }

  /**
   * Support the IRouteBeforeNavigationCheck,
   * this funciton is called when the user attempts to navigate away from the page,
   * returning false will cause result in a dialog being displayed asking
   * the user to confirm that they with to navigate away from the current page
   */
  public canCloseComponentBeforeNavigation(): boolean {
    return true;
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
      .onSuccess((model: ContactGroupSummaryModel) => {
        this.contactGroup = model;
        console.log('have now got the contacts');
        console.log(model);
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
