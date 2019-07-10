import { IApiModel }                            from '../../repositories/models/interfaces/IApiModel';
import { IComponentMetaData }                   from "../../components/interfaces/ComponentMetaDataInterfaces";
import SubscriberRegistryItem                   from "./SubscriberRegistryItem";


interface IMessageWithModel<T extends IApiModel> { (model : T): void }

export default class ModelUpdateNotifications<  T extends IApiModel>  {
 
    private subscribersItemCreated : Array<SubscriberRegistryItem<IMessageWithModel<T>>>;
    private subscribersItemUpdated : Array<SubscriberRegistryItem<IMessageWithModel<T>>>;
    private subscribersItemDeleted : Array<SubscriberRegistryItem<IMessageWithModel<T>>>;
    private subscribersItemDeactivated : Array<SubscriberRegistryItem<IMessageWithModel<T>>>;
    private subscribersItemActivated : Array<SubscriberRegistryItem<IMessageWithModel<T>>>;

    public entityName : string = "";

    constructor(entityName : string) {
        this.entityName = entityName;
        this.subscribersItemCreated = new Array<SubscriberRegistryItem<IMessageWithModel<T>>>();
        this.subscribersItemUpdated = new  Array<SubscriberRegistryItem<IMessageWithModel<T>>>();
        this.subscribersItemDeleted = new Array<SubscriberRegistryItem<IMessageWithModel<T>>>();
        this.subscribersItemActivated = new Array<SubscriberRegistryItem<IMessageWithModel<T>>>();
        this.subscribersItemDeactivated = new Array<SubscriberRegistryItem<IMessageWithModel<T>>>();
    }

    

    // listSubscribers() {
    //     console.log("####################################");
    //     this.listSubscriberForArray("Items Created",this.subscribersItemCreated);
    //     this.listSubscriberForArray("Items Updated",this.subscribersItemUpdated);
    //     this.listSubscriberForArray("Items Deleted",this.subscribersItemDeleted);
    //     this.listSubscriberForArray("Items Deactivated",this.subscribersItemDeactivated);
    //     this.listSubscriberForArray("Items Activated",this.subscribersItemActivated);
    // }

    // private listSubscriberForArray(title: string, array : Array<SubscriberRegistryItem<IMessageWithModel<T>>>){
    //     console.log("----" + title + "----");
    //     array.forEach((item) => {
    //         console.log(item.subscriber.componentName);
    //     });
    // }

    unregisterSubscriberFromAll(subscriber : IComponentMetaData){        
        // console.log("!!!!!!!!!!!!!!!!! unregisterSubscriberFromAll:[b]");
        this.subscribersItemCreated = this.subscribersItemCreated.filter((item : SubscriberRegistryItem<IMessageWithModel<T>>) => { return item.subscriber != subscriber  });
        this.subscribersItemUpdated = this.subscribersItemUpdated.filter((item : SubscriberRegistryItem<IMessageWithModel<T>>) => { return item.subscriber != subscriber  });
        this.subscribersItemDeleted = this.subscribersItemDeleted.filter((item : SubscriberRegistryItem<IMessageWithModel<T>>) => { return item.subscriber != subscriber  });
        this.subscribersItemActivated= this.subscribersItemActivated.filter((item : SubscriberRegistryItem<IMessageWithModel<T>>) => { return item.subscriber != subscriber  });
        this.subscribersItemDeactivated = this.subscribersItemDeactivated.filter((item : SubscriberRegistryItem<IMessageWithModel<T>>) => { return item.subscriber != subscriber  });
        // this.listSubscribers();
    }

    onItemActivated(subscriber : IComponentMetaData, callback : IMessageWithModel<T>) : ModelUpdateNotifications<T>{
        var registryEntry = new SubscriberRegistryItem<IMessageWithModel<T>>(subscriber, callback);        
        this.subscribersItemActivated.push(registryEntry);
        return this;
    }

    onItemDeactivated(subscriber : IComponentMetaData, callback : IMessageWithModel<T>) : ModelUpdateNotifications<T>{
        var registryEntry = new SubscriberRegistryItem<IMessageWithModel<T>>(subscriber, callback);        
        this.subscribersItemDeactivated.push(registryEntry);
        return this;
    }


    onItemCreated(subscriber : IComponentMetaData, callback : IMessageWithModel<T>) : ModelUpdateNotifications<T>{
        var registryEntry = new SubscriberRegistryItem<IMessageWithModel<T>>(subscriber, callback);        
        this.subscribersItemCreated.push(registryEntry);
        return this;
    }

    onItemUpdated(subscriber : IComponentMetaData, callback : IMessageWithModel<T>) : ModelUpdateNotifications<T>{
        var registryEntry = new SubscriberRegistryItem<IMessageWithModel<T>>(subscriber, callback);        
        this.subscribersItemUpdated.push(registryEntry);
        return this;
    }

    onItemDeleted(subscriber : IComponentMetaData, callback : IMessageWithModel<T>) : ModelUpdateNotifications<T>{
        var registryEntry = new SubscriberRegistryItem<IMessageWithModel<T>>(subscriber, callback);        
        this.subscribersItemDeleted.push(registryEntry);
        return this;
    }

    publishItemActivated(model:T)
    {
       this.subscribersItemActivated.forEach((subscriber) => { subscriber.callback(model); });        
    }

    publishItemDeactivated(model:T)
    {
       this.subscribersItemDeactivated.forEach((subscriber) => { subscriber.callback(model); });        
    }

    publishItemCreated(model:T)
    {
       this.subscribersItemCreated.forEach((subscriber) => { subscriber.callback(model); });        
    }

    publishItemUpdated(model:T)
    {
       this.subscribersItemUpdated.forEach((subscriber) => { subscriber.callback(model); });        
    }

    publishItemDeleted(model:T)
    {
       this.subscribersItemDeleted.forEach((subscriber) => { subscriber.callback(model); });        
    }
}