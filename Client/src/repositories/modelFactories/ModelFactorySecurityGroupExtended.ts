import { IModelFactory }                       from './interfaces/IModelFactory';
import SecurityGroupExtendedModel               from '@/repositories/models/securityGroup/SecurityGroupExtendedModel';

export default class ModelFactorySecurityGroupExtended implements
    IModelFactory<SecurityGroupExtendedModel> {

    public create(): SecurityGroupExtendedModel {
        return new SecurityGroupExtendedModel();
    }
}
