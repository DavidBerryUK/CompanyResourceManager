type ICallBackNoParameters = () => void;
type ICallBackStatusChange = (
    contractsTotal: number,
    successTotal: number,
    failureTotal: number,
    responsesTotal: number) => void;

type IHandlers = (callbackHandles: ContractListenerCallbackHandles) => void;

/**
 *
 *
 * @export
 * @class ContractListenerCallbackHandles
 */
export class ContractListenerCallbackHandles {

    public callbackAllSucceeded: ICallBackNoParameters[] | undefined;
    public callbackAllFailed: ICallBackNoParameters[] | undefined;
    public callbackAllResponded: ICallBackNoParameters[] | undefined;
    public callbackSingleSuccessResponse: ICallBackNoParameters[] | undefined;
    public callbackSingleFailResponse: ICallBackNoParameters[] | undefined;
    public callbackStatusChange: ICallBackStatusChange[] | undefined;

    constructor() {
        this.callbackAllSucceeded = Array<ICallBackNoParameters>();
        this.callbackAllFailed = Array<ICallBackNoParameters>();
        this.callbackAllResponded = Array<ICallBackNoParameters>();
        this.callbackSingleSuccessResponse = Array<ICallBackNoParameters>();
        this.callbackSingleFailResponse = Array<ICallBackNoParameters>();
        this.callbackStatusChange = new Array<ICallBackStatusChange>();
    }
    
}

/**
 *
 *
 * @export
 * @class ContractListenerResponse
 */
export class ContractListenerResponse {

    public callbackHandles: ContractListenerCallbackHandles;

    constructor(handlers: IHandlers) {
        this.callbackHandles = new ContractListenerCallbackHandles();
        handlers(this.callbackHandles);
    }

    public onAllSucceeded(callback: ICallBackNoParameters): ContractListenerResponse {
        if (this.callbackHandles.callbackAllSucceeded) {
            this.callbackHandles.callbackAllSucceeded.push(callback);
        }
        return this;
    }

    public onAllFailed(callback: ICallBackNoParameters): ContractListenerResponse {
        if (this.callbackHandles.callbackAllFailed) {
            this.callbackHandles.callbackAllFailed.push(callback);
        }
        return this;
    }

    public onAllResponded(callback: ICallBackNoParameters): ContractListenerResponse {
        if (this.callbackHandles.callbackAllResponded) {
            this.callbackHandles.callbackAllResponded.push(callback);
        }
        return this;
    }

    public onSingleSuccessResponse(callback: ICallBackNoParameters): ContractListenerResponse {
        if (this.callbackHandles.callbackSingleSuccessResponse) {
            this.callbackHandles.callbackSingleSuccessResponse.push(callback);
        }
        return this;
    }

    public onSingleFailResponse(callback: ICallBackNoParameters): ContractListenerResponse {
        if (this.callbackHandles.callbackSingleFailResponse) {
            this.callbackHandles.callbackSingleFailResponse.push(callback);
        }
        return this;
    }

    public onStatusChange(callback: ICallBackStatusChange): ContractListenerResponse {
        if (this.callbackHandles.callbackStatusChange) {
            this.callbackHandles.callbackStatusChange.push(callback);
        }
        return this;
    }
}

/**
 *
 *
 * @export
 * @class ContractListener
 */
export default class ContractListener {

    private totalCount: number;
    private responseCount: number;
    private successCount: number;
    private failCount: number;

    public response: ContractListenerResponse;
    public handers: ContractListenerCallbackHandles | null;

    constructor() {
        this.handers = null;
        this.response = new ContractListenerResponse((handlers) => {
            this.handers = handlers;
        });
        this.totalCount = 0;
        this.responseCount = 0;
        this.successCount = 0;
        this.failCount = 0;
    }

    public registerContract() {
        this.totalCount++;
        this.returnStatusChange();
    }


    public monitor(): ContractListenerResponse {
        return this.response;
    }

    public notifyCompletion(success: boolean | null = null) {
        if (success != null) {
            if (success) {
                this.successCount++;
            }
            if (!success) {
                this.failCount++;
            }
        }
        this.responseCount++;
        this.returnStatusChange();

        if (this.responseCount >= this.totalCount) {
            this.returnAllResponded();
        }
    }

    private returnFailure() {
        if (this.handers && this.handers.callbackSingleFailResponse) {
            this.handers.callbackSingleFailResponse.forEach((handler) => { handler(); });
            if (this.failCount >= this.totalCount) {
                if (this.handers.callbackAllFailed) {
                    this.handers.callbackAllFailed.forEach((handler) => { handler(); });
                }
            }
        }
    }

    private returnSuccess() {
        if (this.handers && this.handers.callbackSingleSuccessResponse) {
            this.handers.callbackSingleSuccessResponse.forEach((handler) => { handler(); });
            if (this.successCount >= this.totalCount) {
                if (this.handers.callbackAllSucceeded) {
                    this.handers.callbackAllSucceeded.forEach((handler) => { handler(); });
                }
            }
        }
    }

    private returnAllResponded() {
        if (this.handers && this.handers.callbackAllResponded) {
            this.handers.callbackAllResponded.forEach((handler) => { handler(); });
        }
    }

    private returnStatusChange() {
        if (this.handers && this.handers.callbackStatusChange) {
            this.handers.callbackStatusChange.forEach((handler) => {
                handler(this.totalCount, this.successCount, this.failCount, this.responseCount);
            });
        }
    }
}
