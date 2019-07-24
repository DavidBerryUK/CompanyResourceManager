import { IObjectMapper }                        from '../interfaces/IObjectMapper';
import SecurityGroupExtendedModel               from '@/repositories/models/securityGroup/SecurityGroupExtendedModel';


// object mappers transform plain java objects
// into strongly typed typescript objects
export default class ObjectMapperSecurityGroupExtendedModel implements IObjectMapper<SecurityGroupExtendedModel> {

    public map(item: any): SecurityGroupExtendedModel {
        const response = Object.assign(new SecurityGroupExtendedModel(), item);
        return response;
    }
}
