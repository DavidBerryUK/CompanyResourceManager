import { IObjectMapper }                        from '../interfaces/IObjectMapper';
import SecurityGroupSummaryModel                from '@/repositories/models/securityGroup/SecurityGroupSummaryModel';

// object mappers transform plain java objects
// into strongly typed typescript objects
export default class ObjectMapperSecurityGroupSummaryModel implements IObjectMapper<SecurityGroupSummaryModel> {

    public map(item: any): SecurityGroupSummaryModel {
        const response = Object.assign(new SecurityGroupSummaryModel(), item);
        return response;
    }
}
