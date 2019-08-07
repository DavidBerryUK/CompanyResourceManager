import { IModelFactory }                        from '../interfaces/IModelFactory';
import SecurityGroupExtendedModel               from '@/repositories/models/securityGroup/SecurityGroupExtendedModel';
import ModelFactoryBase                         from '../base/ModelFactoryBase';

export default class ModelFactorySecurityGroupExtended
    extends ModelFactoryBase<SecurityGroupExtendedModel>
    implements IModelFactory<SecurityGroupExtendedModel> {

    public create(): SecurityGroupExtendedModel {
        return new SecurityGroupExtendedModel();
    }
}
