import { IModelFactory }                        from './interfaces/IModelFactory';
import SecurityGroupSummaryModel                from '../models/securityGroup/SecurityGroupSummaryModel';

export default class ModelFactorySecurityGroupSummary implements
    IModelFactory<SecurityGroupSummaryModel> {

    public create(): SecurityGroupSummaryModel {
        return new SecurityGroupSummaryModel();
    }
}
