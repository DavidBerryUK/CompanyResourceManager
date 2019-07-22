import { IComponentMetaData }                   from '../../components/interfaces/ComponentMetaDataInterfaces';
import SubscriberRegistryItem                   from './SubscriberRegistryItem';


type ICallbackWithStringParameter = (message: string) => void;

export default class GenericNotifications  {

    public subscribersItemGenericMessage: Array<SubscriberRegistryItem<ICallbackWithStringParameter>>;

    constructor() {
        this.subscribersItemGenericMessage = new Array<SubscriberRegistryItem<ICallbackWithStringParameter>>();
    }

    // listSubscribers() {
    //     console.log("####################################");
    //     this.listSubscriberForArray("Generic Message:",this.subscribersItemGenericMessage);
    // }

    public unregisterSubscriberFromAll(subscriber: IComponentMetaData) {
        this.subscribersItemGenericMessage
        = this.subscribersItemGenericMessage
        .filter((item: SubscriberRegistryItem<ICallbackWithStringParameter>) => item.subscriber !== subscriber);
        // this.listSubscribers();
    }

    public onMessageNotification(subscriber: IComponentMetaData, callback: ICallbackWithStringParameter): GenericNotifications {
        const registryEntry = new SubscriberRegistryItem<ICallbackWithStringParameter>(subscriber, callback);
        this.subscribersItemGenericMessage.push(registryEntry);
        return this;
    }

    public publishMessage(message: string) {
       this.subscribersItemGenericMessage.forEach((subscriber) => { subscriber.callback(message); });
    }

    private listSubscriberForArray(title: string, array: Array<SubscriberRegistryItem<ICallbackWithStringParameter>>) {
        array.forEach((item) => {
            console.log(item.subscriber.componentName);
        });
    }
}
