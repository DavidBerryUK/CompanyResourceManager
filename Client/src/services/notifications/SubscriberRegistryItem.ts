import { IComponentMetaData }                   from "../../components/interfaces/ComponentMetaDataInterfaces";

export default class SubscriberRegistryItem<T> {
    subscriber : IComponentMetaData;
    callback : T;

    constructor(subscriber: IComponentMetaData, callback : T)
    {
        this.subscriber = subscriber;
        this.callback = callback;
    }

}