import { DialogResponse }                       from '../base/GenericDialogContract';
import { DialogResponseContract }               from '../base/GenericDialogContract';
import { EnumModalButton }                      from './CommonAppDialogOptions';
import { EnumModalIcon }                        from './CommonAppDialogOptions';
import { EnumModalWidth }                       from '../constants/StandardDialogWidth';
import CommonAppDialogMasterPage                from './CommonAppDialogMasterPage.vue';
import CommonAppDialogMasterPageCode            from './CommonAppDialogMasterPage';
import CommonAppDialogOptions                   from './CommonAppDialogOptions';
import Vue                                      from 'vue'

//
// this class helps launch and destroy dialogs
// from code without having to place them into 
// a template
//
export default class CommonAppDialogController {

    private dialogOptions: CommonAppDialogOptions = new CommonAppDialogOptions()
    private hostComponent: Vue
    private dialogMasterPage: CommonAppDialogMasterPage;
    private contract: DialogResponseContract;

    constructor(hostComponent: Vue, ) {
        this.hostComponent = hostComponent;
        this.dialogMasterPage = new CommonAppDialogMasterPage;
        this.contract = new DialogResponseContract();
    }

    //
    // this will launch the dialog
    //
    createWithParameters(
        title: string,
        message: string,
        icon: EnumModalIcon,
        buttons: EnumModalButton,
        width: EnumModalWidth
    ): DialogResponse {
        var dialogOptions = new CommonAppDialogOptions();
        dialogOptions.title = title;
        dialogOptions.message = message;
        dialogOptions.button = buttons;
        dialogOptions.icon = icon;
        dialogOptions.dialogWidth = width;

        return this.createWithOptionsObject(dialogOptions);
    }

    //
    // this will launch the dialog
    //
    createWithOptionsObject(dialogOptions: CommonAppDialogOptions): DialogResponse {
        this.dialogOptions = dialogOptions;
        this.contract.responder.dialogClosed(() => {
            this.hide();
        });

        // this.genericModal = new GenericModal();  

        // bit of a bodge', but as the type is imported from a vue templates it
        // does not understand the interface is implemented..

        this.contract.handers.onShowDialog(() => {
            this.showActualForm();
        })


        return this.contract.responder;
    }

    //
    // only show the form once we have all the parameters
    //
    private showActualForm() {
        var obj = this.dialogMasterPage as CommonAppDialogMasterPageCode;
        obj.initialise(this.contract, this.dialogOptions);
        this.dialogMasterPage.$mount()
        this.hostComponent.$el.appendChild(this.dialogMasterPage.$el)
    }


    //
    // private method to hide the dialog and remove it from
    // the dom. Could be made public if the dialog
    // is needed to closed via code
    //
    private hide() {
        this.dialogMasterPage.$destroy();
        this.hostComponent.$el.removeChild(this.dialogMasterPage.$el);
    }
}