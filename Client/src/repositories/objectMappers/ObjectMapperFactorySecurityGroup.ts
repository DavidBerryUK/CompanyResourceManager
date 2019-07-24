import { IObjectGenericMapper }                 from './interfaces/IObjectGenericMapper';
import EntityFactorySecurityGroupExtended       from '../modelFactories/EntityFactorySecurityGroupExtended';
import EntityFactorySecurityGroupSummary        from '../modelFactories/EntityFactorySecurityGroupSummary';
import ObjectGenericMapper                      from './generic/ObjectGenericMapper';
import SecurityGroupExtendedModel               from '../models/securityGroup/SecurityGroupExtendedModel';
import SecurityGroupSummaryModel                from '../models/securityGroup/SecurityGroupSummaryModel';

export default class ObjectMapperFactorySecuityGroup {

    public static createSummaryMapper(): IObjectGenericMapper<SecurityGroupSummaryModel> {
        return new ObjectGenericMapper<SecurityGroupSummaryModel> (
            new EntityFactorySecurityGroupSummary());
    }

    public static createExtendedMapper(): IObjectGenericMapper<SecurityGroupExtendedModel> {
        return new ObjectGenericMapper<SecurityGroupExtendedModel> (
            new EntityFactorySecurityGroupExtended());
    }
}
