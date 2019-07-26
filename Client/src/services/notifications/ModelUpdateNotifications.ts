import { IApiModel }                            from '../../repositories/models/interfaces/IApiModel';
import { IComponentMetaData }                   from '../../components/interfaces/ComponentMetaDataInterfaces';
import SubscriberRegistryItem                   from './SubscriberRegistryItem';

type IMessageWithModel<T extends IApiModel> = (model: T) => void;

export default class ModelUpdateNotifications<  T extends IApiModel>  {

    public entityName: string = '';

    private subscribersItemCreated: Array<SubscriberRegistryItem<IMessageWithModel<T>>>;
    private subscribersItemUpdated: Array<SubscriberRegistryItem<IMessageWithModel<T>>>;
    private subscribersItemDeleted: Array<SubscriberRegistryItem<IMessageWithModel<T>>>;
    private subscribersItemDeactivated: Array<SubscriberRegistryItem<IMessageWithModel<T>>>;
    private subscribersItemActivated: Array<SubscriberRegistryItem<IMessageWithModel<T>>>;

    constructor(entityName: string) {
        this.entityName = entityName;
        this.subscribersItemCreated = new Array<SubscriberRegistryItem<IMessageWithModel<T>>>();
        this.subscribersItemUpdated = new  Array<SubscriberRegistryItem<IMessageWithModel<T>>>();
        this.subscribersItemDeleted = new Array<SubscriberRegistryItem<IMessageWithModel<T>>>();
        this.subscribersItemActivated = new Array<SubscriberRegistryItem<IMessageWithModel<T>>>();
        this.subscribersItemDeactivated = new Array<SubscriberRegistryItem<IMessageWithModel<T>>>();
    }

    public unregisterSubscriberFromAll(subscriber: IComponentMetaData) {

        this.subscribersItemCreated = this.subscribersItemCreated
        .filter((item: SubscriberRegistryItem<IMessageWithModel<T>>) => item.subscriber !== subscriber);

        this.subscribersItemUpdated = this.subscribersItemUpdated
        .filter((item: SubscriberRegistryItem<IMessageWithModel<T>>) => item.subscriber !== subscriber);

        this.subscribersItemDeleted = this.subscribersItemDeleted
        .filter((item: SubscriberRegistryItem<IMessageWithModel<T>>) => item.subscriber !== subscriber);

        this.subscribersItemActivated = this.subscribersItemActivated
        .filter((item: SubscriberRegistryItem<IMessageWithModel<T>>) => item.subscriber !== subscriber);

        this.subscribersItemDeactivated = this.subscribersItemDeactivated
        .filter((item: SubscriberRegistryItem<IMessageWithModel<T>>) => item.subscriber !== subscriber);

        // this.listSubscribers();
    }

    public onItemActivated(subscriber: IComponentMetaData, callback: IMessageWithModel<T>): ModelUpdateNotifications<T> {
        const registryEntry = new SubscriberRegistryItem<IMessageWithModel<T>>(subscriber, callback);
        this.subscribersItemActivated.push(registryEntry);
        return this;
    }

    public onItemDeactivated(subscriber: IComponentMetaData, callback: IMessageWithModel<T>): ModelUpdateNotifications<T> {
        const registryEntry = new SubscriberRegistryItem<IMessageWithModel<T>>(subscriber, callback);
        this.subscribersItemDeactivated.push(registryEntry);
        return this;
    }

    public onItemCreated(subscriber: IComponentMetaData, callback: IMessageWithModel<T>): ModelUpdateNotifications<T> {
        const registryEntry = new SubscriberRegistryItem<IMessageWithModel<T>>(subscriber, callback);
        this.subscribersItemCreated.push(registryEntry);
        return this;
    }

    public onItemUpdated(subscriber: IComponentMetaData, callback: IMessageWithModel<T>): ModelUpdateNotifications<T> {
        const registryEntry = new SubscriberRegistryItem<IMessageWithModel<T>>(subscriber, callback);
        this.subscribersItemUpdated.push(registryEntry);
        return this;
    }

    public onItemDeleted(subscriber: IComponentMetaData, callback: IMessageWithModel<T>): ModelUpdateNotifications<T> {
        const registryEntry = new SubscriberRegistryItem<IMessageWithModel<T>>(subscriber, callback);
        this.subscribersItemDeleted.push(registryEntry);
        return this;
    }

    public publishItemActivated(model: T) {
       this.subscribersItemActivated.forEach((subscriber) => { subscriber.callback(model); });
    }

    public publishItemDeactivated(model: T) {
       this.subscribersItemDeactivated.forEach((subscriber) => { subscriber.callback(model); });
    }

    public publishItemCreated(model: T) {
       this.subscribersItemCreated.forEach((subscriber) => { subscriber.callback(model); });
    }

    public publishItemUpdated(model: T) {
        console.log('**************************');
        console.log('* Publish that item has been updated');
        console.log(model);
        console.log('**************************');
        this.subscribersItemUpdated.forEach((subscriber) => { subscriber.callback(model); });
    }

    public publishItemDeleted(model: T) {
       this.subscribersItemDeleted.forEach((subscriber) => { subscriber.callback(model); });
    }
}
