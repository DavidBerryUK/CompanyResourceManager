import { IModelGenericMapper }                  from './interfaces/IModelGenericMapper';
import ModelFactorySecurityGroupExtended       from '../modelFactories/ModelFactorySecurityGroupExtended';
import ModelFactorySecurityGroupSummary        from '../modelFactories/ModelFactorySecurityGroupSummary';
import ModelGenericMapper                       from './generic/ModelGenericMapper';
import SecurityGroupExtendedModel               from '../models/securityGroup/SecurityGroupExtendedModel';
import SecurityGroupSummaryModel                from '../models/securityGroup/SecurityGroupSummaryModel';

export default class ModelMapperFactorySecuityGroup {

    public static createSummaryMapper(): IModelGenericMapper<SecurityGroupSummaryModel> {
        return new ModelGenericMapper<SecurityGroupSummaryModel> (
            new ModelFactorySecurityGroupSummary());
    }

    public static createExtendedMapper(): IModelGenericMapper<SecurityGroupExtendedModel> {
        return new ModelGenericMapper<SecurityGroupExtendedModel> (
            new ModelFactorySecurityGroupExtended());
    }
}
