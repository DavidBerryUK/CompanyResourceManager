import { ValidationMessage }                    from './../../repositories/contracts/ApiResponseContract';
import Vue                                      from 'vue';

export default class BasePage extends Vue {

  public isLoading: boolean = true;

  public data(): any {
    return {};
  }

  /**
   * Add Validation Errors Returned from an API to the
   * vue form
   *
   * @param {Array<ValidationMessage>} validationMessages
   * @memberof BaseEditPage
   */
  public addValidationErrors(validationMessages: Array<ValidationMessage>) {
    validationMessages.forEach((msg: ValidationMessage) => {
      this.$validator.errors.add({ field: msg.field, msg: msg.message });
    });
  }
}
