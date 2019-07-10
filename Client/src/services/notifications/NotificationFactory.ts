import { Dictionary }                           from 'vue-router/types/router';
import { IApiModel }                            from '@/repositories/models/interfaces/IApiModel';
import { IComponentMetaData }                   from "../../components/interfaces/ComponentMetaDataInterfaces";
import AssetSummaryModel                        from '@/repositories/models/asset/AssetSummaryModel';
import AssetTypeModel                           from '@/repositories/models/assetType/AssetTypeModel';
import GenericNotifications                     from './GenericNotifications';
import JobRoleModel                             from '@/repositories/models/jobRole/JobRoleModel';
import ModelUpdateNotifications                 from './ModelUpdateNotifications';
import PersonModel                              from '@/repositories/models/person/PersonModel';


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
            this.factoryInstance.createNotificationInstance(new ModelUpdateNotifications<AssetTypeModel>(new AssetTypeModel().entityName))
            this.factoryInstance.createNotificationInstance(new ModelUpdateNotifications<JobRoleModel>(new JobRoleModel().entityName))
            this.factoryInstance.createNotificationInstance(new ModelUpdateNotifications<PersonModel>(new PersonModel().entityName))            
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