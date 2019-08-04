import { Dictionary }                           from 'vue-router/types/router';
import { IApiModel }                            from '@/repositories/models/interfaces/IApiModel';
import { IComponentMetaData }                   from '../../components/interfaces/ComponentMetaDataInterfaces';
import AssetSummaryModel                        from '@/repositories/models/asset/AssetSummaryModel';
import AssetTypeSummmaryModel                   from '@/repositories/models/assetType/AssetTypeSummaryModel';
import ContactTypeSummaryModel                  from '@/repositories/models/contactType/ContactTypeSummaryModel';
import GenericNotifications                     from './GenericNotifications';
import JobRoleSummaryModel                      from '@/repositories/models/jobRole/JobRoleSummaryModel';
import ModelUpdateNotifications                 from './ModelUpdateNotifications';
import PersonSummaryModel                       from '@/repositories/models/person/PersonSummaryModel';
import SecurityGroupSummaryModel                from '@/repositories/models/securityGroup/SecurityGroupSummaryModel';
import SkillSummaryModel                        from '@/repositories/models/skill/SkillSummaryModel';
import TeamSummaryModel                         from '@/repositories/models/team/TeamSummaryModel';

export default class NotificationFactory {

    private static factoryInstance: NotificationFactory;
    private genericNotification = new GenericNotifications();
    private notificationInstances: Dictionary<ModelUpdateNotifications<any>> = {};

    //
    // singleton class management
    //
    constructor() {
        if (NotificationFactory.factoryInstance) {
            throw new Error('Use the GetInstance method to get this class instance.');
        }
    }

    static get instance(): NotificationFactory {
        if (this.factoryInstance == null) {
            this.factoryInstance = new NotificationFactory();
            this.factoryInstance.createNotificationInstance(new ModelUpdateNotifications<AssetSummaryModel>(new AssetSummaryModel().entityName));
            this.factoryInstance.createNotificationInstance(new ModelUpdateNotifications<AssetTypeSummmaryModel>(new AssetTypeSummmaryModel().entityName));
            this.factoryInstance.createNotificationInstance(new ModelUpdateNotifications<JobRoleSummaryModel>(new JobRoleSummaryModel().entityName));
            this.factoryInstance.createNotificationInstance(new ModelUpdateNotifications<PersonSummaryModel>(new PersonSummaryModel().entityName));
            this.factoryInstance.createNotificationInstance(new ModelUpdateNotifications<SecurityGroupSummaryModel>(new SecurityGroupSummaryModel().entityName));
            this.factoryInstance.createNotificationInstance(new ModelUpdateNotifications<TeamSummaryModel>(new TeamSummaryModel().entityName));
            this.factoryInstance.createNotificationInstance(new ModelUpdateNotifications<SkillSummaryModel>(new SkillSummaryModel().entityName));
            this.factoryInstance.createNotificationInstance(new ModelUpdateNotifications<ContactTypeSummaryModel>(new ContactTypeSummaryModel().entityName));
        }
        return this.factoryInstance;
    }

    public static unsubscribeFromAll(subscriber: IComponentMetaData) {
        this.instance.genericNotification.unregisterSubscriberFromAll(subscriber);

        for (const key in this.instance.notificationInstances) {
            if (this.instance.hasOwnProperty(key)) {
                const value = this.instance.notificationInstances[key];
                value.unregisterSubscriberFromAll(subscriber);
            }
        }
    }

    public getNotificationInstance<T extends IApiModel>(entityName: string): ModelUpdateNotifications<T> {
        const notificationHandler = this.notificationInstances[entityName] as ModelUpdateNotifications<T>;
        if ( notificationHandler == null) {
            console.log(`request:${entityName}`);
            console.log(this.notificationInstances);
            throw new Error(`Notification Factory - can not get notification handler for ${entityName}`);
        }
        return notificationHandler;
    }

    public createNotificationInstance<T extends IApiModel>(instance: ModelUpdateNotifications<T>) {
        this.notificationInstances[instance.entityName] = instance;
    }

    public genericNotifications(): GenericNotifications {
        return this.genericNotification;
    }
}
