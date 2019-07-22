import Vue                                      from 'vue';

type ICallBackNoParameters = () => void;
type ICallbackVueResponseParameters = () => Vue;
type IHandlers = (callbackHandles: DialogCallbackHandles) => void;

// A strongly typed response contract to pass
// events back from a dialog back to the original
// view that requested the dialog
//
export class DialogCallbackHandles {
    //
    // callbacks for when a button is pressed on the dialog
    //
    public callbackBackgroundPressed: Array<ICallBackNoParameters> | null = null;
    public callbackCancelPressed: Array<ICallBackNoParameters> | null = null;
    public callbackNoPressed: Array<ICallBackNoParameters> | null = null;
    public callbackOkPressed: Array<ICallBackNoParameters> | null = null;
    public callbackYesPressed: Array<ICallBackNoParameters> | null = null;
    public callbackCustomBody: ICallbackVueResponseParameters | null = null;

    //
    //
    //
    public callbackOnShowDialog: ICallBackNoParameters | null = null;

    // called after other events
    //
    public callbackOnDialogClosed: Array<ICallBackNoParameters> | null = null;

    constructor() {
        this.callbackBackgroundPressed = new Array<ICallBackNoParameters>();
        this.callbackCancelPressed = new Array<ICallBackNoParameters>();
        this.callbackNoPressed = new Array<ICallBackNoParameters>();
        this.callbackOkPressed = new Array<ICallBackNoParameters>();
        this.callbackOnDialogClosed = new Array<ICallBackNoParameters>();
        this.callbackYesPressed = new Array<ICallBackNoParameters>();
        this.callbackCustomBody = null;
    }

    public onShowDialog(callback: ICallBackNoParameters) {
        this.callbackOnShowDialog = callback;
    }

    public issueCommandToDialogShowCallback() {
        if (this.callbackOnShowDialog) {
            this.callbackOnShowDialog();
        }
    }
}

//
// returned to the class that requests a new dialog.
// The methods can be chained together in any order but
// 'dialogClosed' will always be fired last
//
export class DialogResponse {

    public callbackHandles: DialogCallbackHandles;
    public showCalled: boolean = false;

    constructor(handlers: IHandlers) {
        this.callbackHandles = new DialogCallbackHandles();
        handlers(this.callbackHandles);
    }

    public supplyCustomBody(callback: ICallbackVueResponseParameters): DialogResponse {

        if (this.showCalled) {
            this.reportShowCalledError();
            return this;
        }

        this.callbackHandles.callbackCustomBody = callback;
        return this;
    }

    public dialogClosed(callback: ICallBackNoParameters): DialogResponse {

        if (this.showCalled) {
            this.reportShowCalledError();
            return this;
        }

        if (this.callbackHandles.callbackOnDialogClosed != null) {
            this.callbackHandles.callbackOnDialogClosed.push(callback);
        }
        return this;
    }

    public yesPressed(callback: ICallBackNoParameters): DialogResponse {

        if (this.showCalled) {
            this.reportShowCalledError();
            return this;
        }

        if (this.callbackHandles.callbackYesPressed != null) {
            this.callbackHandles.callbackYesPressed.push(callback);
        }
        return this;
    }

    public noPressed(callback: ICallBackNoParameters): DialogResponse {

        if (this.showCalled) {
            this.reportShowCalledError();
            return this;
        }

        if (this.callbackHandles.callbackNoPressed != null) {
            this.callbackHandles.callbackNoPressed.push(callback);
        }
        return this;
    }

    public okPressed(callback: ICallBackNoParameters): DialogResponse {

        if (this.showCalled) {
            this.reportShowCalledError();
            return this;
        }

        if (this.callbackHandles.callbackOkPressed != null) {
            this.callbackHandles.callbackOkPressed.push(callback);
        }
        return this;
    }

    public backgroundPressed(callback: ICallBackNoParameters): DialogResponse {

        if (this.showCalled) {
            this.reportShowCalledError();
            return this;
        }

        if (this.callbackHandles.callbackBackgroundPressed != null) {
            this.callbackHandles.callbackBackgroundPressed.push(callback);
        }
        return this;
    }

    public cancelPressed(callback: ICallBackNoParameters): DialogResponse {

        if (this.showCalled) {
            this.reportShowCalledError();
            return this;
        }

        if (this.callbackHandles.callbackCancelPressed != null) {
            this.callbackHandles.callbackCancelPressed.push(callback);
        }
        return this;
    }

    public show() {
        this.callbackHandles.issueCommandToDialogShowCallback();
        this.showCalled = true;
    }

    public reportShowCalledError() {
        console.log('Dialog Contract Error - contract methods can not be called after the "show" command has been issued');
    }
}

//
// methods for the dialog controller to execute when
// it wished to pass a message back to the view that
// has requested for the dialog to be shown.
//
export class DialogResponseContract {

    public  response: DialogResponse;
    public handers: DialogCallbackHandles;

    constructor() {
        this.handers = new DialogCallbackHandles();
        this.response = new DialogResponse((handlers) => {
            this.handers = handlers;
        });
    }

    public requestSubscriberForCustomBody(): Vue | null {
        if (this.handers.callbackCustomBody) {
            return this.handers.callbackCustomBody();
        }
        return null;
    }

    public returnYesPressed() {
        if (this.handers.callbackYesPressed != null) {
            this.handers.callbackYesPressed.forEach((handler) => { handler(); });
        }
        this.returnDialogClosed();
    }

    public returnNoPressed() {
        if (this.handers.callbackNoPressed != null) {
            this.handers.callbackNoPressed.forEach((handler) => { handler(); });
        }
        this.returnDialogClosed();
    }

    public returnOkPressed() {
        if (this.handers.callbackOkPressed != null) {
            this.handers.callbackOkPressed.forEach((handler) => { handler(); });
        }
        this.returnDialogClosed();
    }

    public returnOnCancelPressed() {
        if (this.handers.callbackCancelPressed != null) {
            this.handers.callbackCancelPressed.forEach((handler) => { handler(); });
        }
        this.returnDialogClosed();
    }

    public returnOnBackgroundPressed() {
        if (this.handers.callbackBackgroundPressed != null) {
            this.handers.callbackBackgroundPressed.forEach((handler) => { handler(); });
        }
        this.returnDialogClosed();
    }

    public returnDialogClosed() {
        if (this.handers.callbackOnDialogClosed) {
            this.handers.callbackOnDialogClosed.forEach((handler) => { handler(); });
        }
    }

    get responder(): DialogResponse {
        return this.response;
    }
}
