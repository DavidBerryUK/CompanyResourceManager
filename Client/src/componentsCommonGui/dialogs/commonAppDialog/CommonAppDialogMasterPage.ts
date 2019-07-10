import { DialogResponseContract }               from '../base/GenericDialogContract';
import { EnumModalButton }                      from "./CommonAppDialogOptions";
import { EnumModalIcon }                        from "./CommonAppDialogOptions";
import { ICommonDialogInjectableView }          from "../base/ICommonDialogInjectableView";
import { Watch }                                from "vue-property-decorator";
import CommonAppDialogOptions                   from "./CommonAppDialogOptions";
import CommonDialogInjectableView               from "../base/ICommonDialogInjectableView";
import Component                                from "vue-class-component";
import StandardDialogWidth                      from "../constants/StandardDialogWidth";
import Vue                                      from "vue";

//
// attribute indicates this is a component, 
//  this is where any sub components are also registered
@Component
export default class CommonAppDialogMasterPage extends Vue {

  private contract: DialogResponseContract | null = null;
  showDialog: boolean = true;
  dialogStyle: string = "";

  // contains all input options for the form
  //
  private dialogOptions: CommonAppDialogOptions = new CommonAppDialogOptions();

  // variables and flags used for the form
  //
  private iconClass: string = "";
  private iconTextColour: string = "";
  private showCancelButton: boolean = false;
  private showNoButton: boolean = false;
  private showOkButton: boolean = false;
  private showYesButton: boolean = false;

  private injectedBodyView: ICommonDialogInjectableView | null = null;

  public mounted() {
    if (this.contract != null) {
      var bodyView = this.contract.requestSubscriberForCustomBody();

      if (bodyView != null) {
        this.mountCustomBody(bodyView);
      }
    }
  }

  //
  // A Custom instantiated Vue Body was provided to the dialog controller, this
  //  will now be injected into the body of the dialog 'master page'.
  //
  private mountCustomBody(bodyView: Vue) {

    //
    // if the custom body view supports the ICommonDialogInjectableView interface
    // the initializeDialogView method will be executed, this will pass a contract
    // to the body view that will allow it to raise events that are the
    // equivalent of the user pressing the ok,yes,no,cancel buttons as well 
    // as being able to close the form
    //
    if (CommonDialogInjectableView.doesSupportICommonDialogInjectableView(bodyView)) {
      if (this.contract != null) {
        this.injectedBodyView = bodyView as ICommonDialogInjectableView;
        this.injectedBodyView.initializeDialogView(this.contract);
      }
    }

    //
    // initialise the body view, making it ready to place
    // into the DOM
    //
    bodyView.$mount();

    // get reference to the HTML Element where the body view will be placed
    //
    var container = this.$refs.containerBody;
    var containerView = <HTMLElement>container;
    //
    // inject the custom body view
    //
    containerView.appendChild(bodyView.$el);

    //
    // clear out any existing content
    (<HTMLElement>this.$refs.commonDialogBody).innerHTML = "";

  }

  //
  // watch for the showDialog variable changing to false.
  // when this does happen it means the user has clicked on the
  // background surrounding the form and wishes to exit the
  // dialog without performing any actions
  //
  @Watch("showDialog")
  public onShowDialogChanged() {
    if (this.showDialog == false) {
      if (this.contract != null) {
        this.contract.returnOnBackgroundPressed();
      }
    }
  }


  //
  // the master page is initialised by the dialog controller class
  //
  public initialise(contract: DialogResponseContract, dialogOptions: CommonAppDialogOptions) {
    this.contract = contract;
    this.dialogOptions = dialogOptions;
    this.determineIconsToUse();
    this.determineButtonsToUse();
    this.determineDialogStyle();
  }


  private determineDialogStyle() {
    var widthInfo = StandardDialogWidth.getWidthInfo(this.dialogOptions.dialogWidth);
    this.dialogStyle = widthInfo.css;
  }

  //
  // the user has pressed the YES button
  //  validate the form, send message to master page informing of the dialog closure
  //  then return message back to class that launched the dialog with the reason of
  //  the closure
  onYesPressed() {
    if (this.validate()) {
      this.dialogWillClose();
      if (this.contract != null) {
        this.contract.returnYesPressed();
      }
    }
  }

  //
  // the user has pressed the NO button
  //  validate the form, send message to master page informing of the dialog closure
  //  then return message back to class that launched the dialog with the reason of
  //  the closure
  onNoPressed() {
    if (this.validate()) {
      this.dialogWillClose();
      if (this.contract != null) {
        this.contract.returnNoPressed();
      }
    }
  }

  //
  // the user has pressed the OK button
  //  validate the form, send message to master page informing of the dialog closure
  //  then return message back to class that launched the dialog with the reason of
  //  the closure
  onOkPressed() {
    if (this.validate()) {
      this.dialogWillClose();
      if (this.contract != null) {
        this.contract.returnOkPressed();
      }
    }
  }

  //
  // the user has pressed the CANCEL button
  //  validate the form, send message to master page informing of the dialog closure
  //  then return message back to class that launched the dialog with the reason of
  //  the closure
  onCancelPressed() {
    if (this.validate()) {
      this.dialogWillClose();
      if (this.contract != null) {
        this.contract.returnOnCancelPressed();
      }
    }
  }

  //
  // validate the injected body view if it exists
  //
  private validate(): boolean {
    if (this.injectedBodyView) {
      return this.injectedBodyView.validate();
    }
    return true;
  }

  //
  // inform the injected body view if it exists
  //  that the dialog will close
  //
  private dialogWillClose() {
    if (this.injectedBodyView) {
      this.injectedBodyView.dialogWillClose();
    }
  }


  // required as standard, but typescript version of Vue can just
  // access public variables on this class
  data(): any {
    return {};
  }

  //
  // determine what buttons to display on the screen 
  //  based upon the dialogOptions
  //
  private determineButtonsToUse() {
    if (this.dialogOptions == null) {
      return;
    }

    switch (this.dialogOptions.button) {
      case EnumModalButton.Ok:
        this.showOkButton = true;
        break;

      case EnumModalButton.OkCancel:
        this.showOkButton = true;
        this.showCancelButton = true;
        break;

      case EnumModalButton.YesNo:
        this.showYesButton = true;
        this.showNoButton = true;
        break;
    }
  }

  //
  // determine what primary hero icon to display
  // based upon the dialog options
  //
  private determineIconsToUse() {

    if (this.dialogOptions == null) {
      return;
    }

    switch (this.dialogOptions.icon) {
      case EnumModalIcon.Information:
        this.iconClass = "fas fa-info-circle fa-10x";
        this.iconTextColour = "light-blue--text text--lighten-1";
        break;

      case EnumModalIcon.Question:
        this.iconClass = "fas fa-question-circle fa-10x";
        this.iconTextColour = "blue-grey--text text--lighten-1";
        break;

      case EnumModalIcon.Warning:
        this.iconClass = "fas fa-exclamation-circle fa-10x";
        this.iconTextColour = "amber--text text--lighten-1";
        break;

      case EnumModalIcon.Error:
        this.iconClass = "fas fa-times-circle fa-10x";
        this.iconTextColour = "deep-orange--text text--lighten-1";
        break;
    }

  }

}

