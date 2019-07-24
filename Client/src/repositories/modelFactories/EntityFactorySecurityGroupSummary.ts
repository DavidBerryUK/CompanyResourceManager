import { IEntityFactory }                       from './interfaces/IEntityFactory';
import SecurityGroupSummaryModel                from '../models/securityGroup/SecurityGroupSummaryModel';

export default class EntityFactorySecurityGroupSummary implements
    IEntityFactory<SecurityGroupSummaryModel> {

    public create(): SecurityGroupSummaryModel {
        return new SecurityGroupSummaryModel();
    }
}
