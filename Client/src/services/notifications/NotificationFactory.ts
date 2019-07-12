import { Dictionary }                           from 'vue-router/types/router';
import { IApiModel }                            from '@/repositories/models/interfaces/IApiModel';
import { IComponentMetaData }                   from "../../components/interfaces/ComponentMetaDataInterfaces";
import AssetSummaryModel                        from '@/repositories/models/asset/AssetSummaryModel';
import AssetTypeSummmaryModel                   from '@/repositories/models/assetType/AssetTypeSummaryModel';
import GenericNotifications                     from './GenericNotifications';
import JobRoleSummaryModel                      from '@/repositories/models/jobRole/JobRoleSummaryModel';
import ModelUpdateNotifications                 from './ModelUpdateNotifications';
import PersonSummaryModel                       from '@/repositories/models/person/PersonSummaryModel';

export default class NotificationFactory {

    private static factoryInstance: NotificationFactory;
    
    private genericNotification = new GenericNotifications();
    private notificationInstances : Dictionary<ModelUpdateNotifications<any>> = {};


    //
    // singleton class management
    //
    constructor() {        
        if (NotificationFactory.factoryInstance) {
            throw new Error("Use the GetInstance method to get this class instance.");
        }
    }

    static get instance(): NotificationFactory {        
        if (this.factoryInstance == null) {            
            this.factoryInstance = new NotificationFactory();
            this.factoryInstance.createNotificationInstance(new ModelUpdateNotifications<AssetSummaryModel>(new AssetSummaryModel().entityName))
            this.factoryInstance.createNotificationInstance(new ModelUpdateNotifications<AssetTypeSummmaryModel>(new AssetTypeSummmaryModel().entityName))
            this.factoryInstance.createNotificationInstance(new ModelUpdateNotifications<JobRoleSummaryModel>(new JobRoleSummaryModel().entityName))
            this.factoryInstance.createNotificationInstance(new ModelUpdateNotifications<PersonSummaryModel>(new PersonSummaryModel().entityName))            
        }
        return this.factoryInstance;
    }

    

    getNotificationInstance<T extends IApiModel>(entityName : string) : ModelUpdateNotifications<T> {
        var notificationHandler = <ModelUpdateNotifications<T>>this.notificationInstances[entityName] 
        if ( notificationHandler == null) {
            console.log(`request:${entityName}`);
            console.log(this.notificationInstances);
            throw new Error(`Notification Factory - can not get notification handler for ${entityName}`);
            
        }
        return notificationHandler;
    }

    createNotificationInstance<T extends IApiModel>(instance : ModelUpdateNotifications<T>) {
        this.notificationInstances[instance.entityName] = instance
    }

    genericNotifications(): GenericNotifications {
        return this.genericNotification;
    }


    static unsubscribeFromAll(subscriber: IComponentMetaData) {
        this.instance.genericNotification.unregisterSubscriberFromAll(subscriber);        

        for (let key in this.instance.notificationInstances) {
            let value = this.instance.notificationInstances[key];
            value.unregisterSubscriberFromAll(subscriber);
        }        
    }

}