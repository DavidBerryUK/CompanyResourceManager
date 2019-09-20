import { Dictionary }                           from 'vue-router/types/router';
import { IApiModel }                            from '@/repositories/models/interfaces/IApiModel';
import { IComponentMetaData }                   from '../../components/interfaces/ComponentMetaDataInterfaces';
import AssetExtendedModel                       from '@/repositories/models/asset/AssetExtendedModel';
import AssetSummaryModel                        from '@/repositories/models/asset/AssetSummaryModel';
import AssetTypeExtendedModel                   from '@/repositories/models/assetType/AssetTypeExtendedModel';
import AssetTypeSummmaryModel                   from '@/repositories/models/assetType/AssetTypeSummaryModel';
import ContactSummaryModel                      from '@/repositories/models/contact/ContactSummaryModel';
import ContactTypeSummaryModel                  from '@/repositories/models/contactType/ContactTypeSummaryModel';
import GenericNotifications                     from './GenericNotifications';
import JobRoleExtendedModel                     from '@/repositories/models/jobRole/JobRoleExtendedModel';
import JobRoleSummaryModel                      from '@/repositories/models/jobRole/JobRoleSummaryModel';
import ModelUpdateNotifications                 from './ModelUpdateNotifications';
import PersonExtendedModel                      from '@/repositories/models/person/PersonExtendedModel';
import PersonSummaryModel                       from '@/repositories/models/person/PersonSummaryModel';
import SecurityGroupExtendedModel               from '@/repositories/models/securityGroup/SecurityGroupExtendedModel';
import SecurityGroupSummaryModel                from '@/repositories/models/securityGroup/SecurityGroupSummaryModel';
import SkillExtendedModel                       from '@/repositories/models/skill/SkillExtendedModel';
import TeamExtendedModel                        from '@/repositories/models/team/TeamExtendedModel';
import TeamSummaryModel                         from '@/repositories/models/team/TeamSummaryModel';
import ContactTypeExtendedModel from '@/repositories/models/contactType/ContactTypeExtendedModel';

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

            this.factoryInstance.createNotificationInstance(new ModelUpdateNotifications<AssetExtendedModel>(new AssetExtendedModel().entityName));
            this.factoryInstance.createNotificationInstance(new ModelUpdateNotifications<AssetSummaryModel>(new AssetSummaryModel().entityName));
            this.factoryInstance.createNotificationInstance(new ModelUpdateNotifications<AssetTypeExtendedModel>(new AssetTypeExtendedModel().entityName));
            this.factoryInstance.createNotificationInstance(new ModelUpdateNotifications<AssetTypeSummmaryModel>(new AssetTypeSummmaryModel().entityName));
            this.factoryInstance.createNotificationInstance(new ModelUpdateNotifications<ContactSummaryModel>(new ContactSummaryModel().entityName));
            this.factoryInstance.createNotificationInstance(new ModelUpdateNotifications<ContactTypeExtendedModel>(new ContactTypeExtendedModel().entityName));
            this.factoryInstance.createNotificationInstance(new ModelUpdateNotifications<ContactTypeSummaryModel>(new ContactTypeSummaryModel().entityName));
            this.factoryInstance.createNotificationInstance(new ModelUpdateNotifications<JobRoleExtendedModel>(new JobRoleExtendedModel().entityName));
            this.factoryInstance.createNotificationInstance(new ModelUpdateNotifications<JobRoleSummaryModel>(new JobRoleSummaryModel().entityName));
            this.factoryInstance.createNotificationInstance(new ModelUpdateNotifications<PersonExtendedModel>(new PersonExtendedModel().entityName));
            this.factoryInstance.createNotificationInstance(new ModelUpdateNotifications<PersonSummaryModel>(new PersonSummaryModel().entityName));
            this.factoryInstance.createNotificationInstance(new ModelUpdateNotifications<SecurityGroupExtendedModel>(new SecurityGroupExtendedModel().entityName));
            this.factoryInstance.createNotificationInstance(new ModelUpdateNotifications<SecurityGroupSummaryModel>(new SecurityGroupSummaryModel().entityName));
            this.factoryInstance.createNotificationInstance(new ModelUpdateNotifications<SkillExtendedModel>(new SkillExtendedModel().entityName));
            this.factoryInstance.createNotificationInstance(new ModelUpdateNotifications<TeamExtendedModel>(new TeamExtendedModel().entityName));
            this.factoryInstance.createNotificationInstance(new ModelUpdateNotifications<TeamSummaryModel>(new TeamSummaryModel().entityName));
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
