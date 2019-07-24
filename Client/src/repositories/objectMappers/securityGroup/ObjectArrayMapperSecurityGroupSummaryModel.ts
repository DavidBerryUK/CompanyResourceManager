import { IObjectArrayMapper }                   from '../interfaces/IObjectArrayMapper';
import SecurityGroupSummaryModel                from '@/repositories/models/securityGroup/SecurityGroupSummaryModel';


// object mappers transform plain java objects
// into strongly typed typescript objects
export default class ObjectArrayMapperSecurityGroupSummaryModel implements IObjectArrayMapper<SecurityGroupSummaryModel> {

    public map(dataArray: any[]): Array<SecurityGroupSummaryModel> {
        let response = new Array<SecurityGroupSummaryModel>();
        response = dataArray.map((item) => Object.assign(new SecurityGroupSummaryModel(), item));
        return response;
    }
}
