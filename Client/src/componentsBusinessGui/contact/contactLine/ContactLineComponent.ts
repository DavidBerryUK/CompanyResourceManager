import { debounce }                             from 'ts-debounce';
import { enumEditState }                        from './../../../models/InteractiveEditState/InteractiveEditState';
import { IRouteBeforeNavigationCheck }          from '@/router/interfaces/NavigationCheckInterfaces';
import { Prop }                                 from 'vue-property-decorator';
import { Watch }                                from 'vue-property-decorator';
import Component                                from 'vue-class-component';
import ContactRepositoryFactory                 from '@/repositories/factory/ContactRepositoryFactory';
import ContactSummaryModel                      from '@/repositories/models/contact/ContactSummaryModel';
import ContactTypeSummaryModel                  from '@/repositories/models/contactType/ContactTypeSummaryModel';
import ContactValidationSummaryModel            from '@/repositories/models/contactValidation/ContactValidationSummaryModel';
import DeepObjectComparator                     from '@/services/objectComparison/DeepObjectComparator';
import InteractiveEditState                     from '@/models/InteractiveEditState/InteractiveEditState';
import Vue                                      from 'vue';

@Component
export default class ContactLineComponent extends Vue implements IRouteBeforeNavigationCheck {

  @Prop() public contact!: ContactSummaryModel;
  @Prop() public contactTypes!: Array<ContactTypeSummaryModel>;
  @Prop() public contactValidations!: Array<ContactValidationSummaryModel>;
  public state: InteractiveEditState = new InteractiveEditState();
  public changeTracker: DeepObjectComparator = new DeepObjectComparator({});

  public get validationObject(): object {
      // let validation: any = {
      //   required: true,
      //   min: 2,
      // };
      // const dynamicValidationValue = this.dynamicValidation();
      // console.log(dynamicValidationValue);
      // if ( dynamicValidationValue.length > 0) {
//        const regexPattern = /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/;
      // }
      // validation.regex = /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/;

      // console.log(validation.regex.toString());
      // return validation;
      return {};
  }

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

  /**
   * Called by the framework when the entity model is updated
   * @param newValue - old entity value
   * @param oldValue - new entity value
   */
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

  /**
   * Save the current entity model if it is valid, this function is
   * decounced to stop it being called on every keypress
   */
  public update() {
    this.$validator.validate().then((result) => {
      if (result) {
        this.save();
      } else {
        this.state.state = enumEditState.invalid;
      }
    });
  }



  /**
   * Used to generate dynamic validation for the View.
   * The validation depends on the current contact type selected
   */
  public dynamicValidation(): string {
    if ( this.contact.contactTypeId === null) {
      return '';
    }
    const contactTypeId = this.contact.contactTypeId;
    if ( contactTypeId === null) {
      return '';
    }
    const contactType = this.contactTypes.filter((item) => item.contactTypeId === contactTypeId);
    if ( contactType.length !== 1 ) {
      return '';
    }
    const validation = this.contactValidations.filter((item) =>  item.contactValidationId === contactType[0].contactValidationId);
    if ( validation.length !== 1) {
      return '';
    }
    if ( validation[0].regEx.length === 0 ) {
      return '';
    }
    return `regex:${validation[0].regEx}`;
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
