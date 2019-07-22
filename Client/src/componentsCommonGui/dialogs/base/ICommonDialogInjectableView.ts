import { DialogResponseContract }               from './GenericDialogContract';
//
// interface required to be implemented by any view that is to
// be injected into a dialog master page
//
export interface ICommonDialogInjectableView {
    //
    // called just before the dialog is displayed. This injects the
    // contract dialog to the view. The contract allows the view
    // to execute the equivalent button presses such as ok, yes, no or cancel
    // from code
    initializeDialogView(contract: DialogResponseContract): void;

    // this is called when the user pressed a standard dialog
    // button, this is the chance for the form to perform any
    // custom validation.
    //
    // if a response of true is provided, the form will close
    // if false is returned, the form will not close
    validate(): boolean;

    // this is called just before the form closes, this gives
    // form a last chance to clear down any data or
    // prepare any objects to return to the class
    // that launched the form
    dialogWillClose(): void;
}

//
// helper class to determine if a given class supports the
//  ICommonDialogInjectableView interface
//
export default class CommonDialogInjectableView {

    public static doesSupportICommonDialogInjectableView(classInstance: any): classInstance is ICommonDialogInjectableView {
        const doesUseInterface =  classInstance.initializeDialogView !== undefined;
        return doesUseInterface;
    }
}
