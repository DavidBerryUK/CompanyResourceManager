import { IModelFactory }                        from './interfaces/IModelFactory';
import SecurityGroupSummaryModel                from '../models/securityGroup/SecurityGroupSummaryModel';
import ModelFactoryBase                         from './base/ModelFactoryBase';

export default class ModelFactorySecurityGroupSummary
    extends ModelFactoryBase<SecurityGroupSummaryModel>
    implements IModelFactory<SecurityGroupSummaryModel> {

    public create(): SecurityGroupSummaryModel {
        return new SecurityGroupSummaryModel();
    }
}
