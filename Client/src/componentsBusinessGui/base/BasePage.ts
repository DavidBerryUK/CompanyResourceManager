import { ValidationMessage }                    from './../../repositories/contracts/ApiResponseContract';
import Vue                                      from "vue";

export default class BasePage extends Vue {

  isLoading: boolean = true;

  data(): any {
    return {};
  }

  /**
   * Add Validation Errors Returned from an API to the
   * vue form
   *
   * @param {Array<ValidationMessage>} validationMessages
   * @memberof BaseEditPage
   */
  addValidationErrors(validationMessages: Array<ValidationMessage>) {
    validationMessages.forEach((msg: ValidationMessage) => {
      this.$validator.errors.add({ field: msg.field, msg: msg.message });
    });
  }
}
