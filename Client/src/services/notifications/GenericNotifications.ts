import { IComponentMetaData }                   from "../../components/interfaces/ComponentMetaDataInterfaces";
import SubscriberRegistryItem                   from "./SubscriberRegistryItem";


interface ICallbackWithStringParameter { (message  : string): void }

export default class GenericNotifications  {
 
    private subscribersItemGenericMessage : Array<SubscriberRegistryItem<ICallbackWithStringParameter>>;
    

    constructor() {
        this.subscribersItemGenericMessage = new Array<SubscriberRegistryItem<ICallbackWithStringParameter>>();    
    }

    

    // listSubscribers() {
    //     console.log("####################################");
    //     this.listSubscriberForArray("Generic Message:",this.subscribersItemGenericMessage);        
    // }

    private listSubscriberForArray(title: string, array : Array<SubscriberRegistryItem<ICallbackWithStringParameter>>){
        console.log("----" + title + "----");
        array.forEach((item) => {
            console.log(item.subscriber.componentName);
        });
    }

    unregisterSubscriberFromAll(subscriber : IComponentMetaData){        
        this.subscribersItemGenericMessage = this.subscribersItemGenericMessage.filter((item : SubscriberRegistryItem<ICallbackWithStringParameter>) => { return item.subscriber != subscriber  });        
        // this.listSubscribers();
    }

    onMessageNotification(subscriber : IComponentMetaData, callback : ICallbackWithStringParameter) : GenericNotifications{
        var registryEntry = new SubscriberRegistryItem<ICallbackWithStringParameter>(subscriber, callback);        
        this.subscribersItemGenericMessage.push(registryEntry);
        return this;
    }

    public publishMessage(message:string)
    {
       this.subscribersItemGenericMessage.forEach((subscriber) => { subscriber.callback(message); });        
    }

}