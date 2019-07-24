import { IEntityFactory }                       from './interfaces/IEntityFactory';
import SecurityGroupExtendedModel               from '@/repositories/models/securityGroup/SecurityGroupExtendedModel';


export default class EntityFactorySecurityGroupExtended implements
    IEntityFactory<SecurityGroupExtendedModel> {

    public create(): SecurityGroupExtendedModel {
        return new SecurityGroupExtendedModel();
    }
}
