import { debounce }                             from 'ts-debounce';
import { enumEditState }                        from './../../../models/InteractiveEditState/InteractiveEditState';
import { IRouteBeforeNavigationCheck }          from '@/router/interfaces/NavigationCheckInterfaces';
import { Prop }                                 from 'vue-property-decorator';
import { Watch }                                from 'vue-property-decorator';
import Component                                from 'vue-class-component';
import ContactRepositoryFactory                 from '@/repositories/factory/ContactRepositoryFactory';
import ContactSummaryModel                      from '@/repositories/models/contact/ContactSummaryModel';
import DeepObjectComparator                     from '@/services/objectComparison/DeepObjectComparator';
import InteractiveEditState                     from '@/models/InteractiveEditState/InteractiveEditState';
import ListItemModel                            from '@/repositories/models/ListItem/ListItemModel';
import Vue                                      from 'vue';

@Component
export default class ContactLineComponent extends Vue implements IRouteBeforeNavigationCheck {

  @Prop() public contact!: ContactSummaryModel;
  @Prop() public contactTypes!: Array<ListItemModel>;
  public state: InteractiveEditState = new InteractiveEditState();
  public changeTracker: DeepObjectComparator = new DeepObjectComparator({});

  private updateDebounced = debounce(this.update, 1000);

  constructor() {
    super();
  }

  /**
   * Support the IRouteBeforeNavigationCheck,
   * this funciton is called when the user attempts to navigate away from the page,
   * returning false will cause result in a dialog being displayed asking
   * the user to confirm that they with to navigate away from the current page
   */
  public canCloseComponentBeforeNavigation(): boolean {

    switch ( this.state.state ) {
      case enumEditState.ok:
      case enumEditState.savedOk:
        return true;

      case enumEditState.invalid:
      case enumEditState.changed:
      case enumEditState.saving:
          case enumEditState.saveFailed:
          return false;

    }

    return false;
  }

  @Watch('contact', { deep: true })
  public onModelChanged(newValue: ContactSummaryModel, oldValue: ContactSummaryModel) {
    // check to see if the object has returned to its original value
    this.changeTracker.evaluateHasObjectChanged(this.contact);
    if (this.changeTracker.hasObjectChanged) {
      this.state.state = enumEditState.changed;
      this.updateDebounced();
    }
  }

  public mounted() {
    this.changeTracker = new DeepObjectComparator(this.contact);
  }

  public update() {
    this.$validator.validate().then((result) => {
      if (result) {
        this.save();
      } else {
        this.state.state = enumEditState.invalid;
      }
    });
  }


  private save() {
    this.state.state = enumEditState.saving;

    const contactRepository = ContactRepositoryFactory.getRepository();

    contactRepository.save(this.contact)
      .onSuccess((model: ContactSummaryModel) => {
        this.state.state = enumEditState.savedOk;
        this.changeTracker.reset(this.contact);
      })
      .onFailed((error: string) => {
        this.state.state = enumEditState.saveFailed;
      });
  }
}

Vue.component('crm-contact-line', ContactLineComponent);
