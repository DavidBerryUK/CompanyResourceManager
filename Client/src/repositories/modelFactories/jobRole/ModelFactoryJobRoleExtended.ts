import { IModelFactory }                        from '../interfaces/IModelFactory';
import JobRoleExtendedModel                     from '@/repositories/models/jobRole/JobRoleExtendedModel';
import ModelFactoryBase                         from '../base/ModelFactoryBase';

export default class ModelFactoryJobRoleExtended
    extends ModelFactoryBase<JobRoleExtendedModel>
    implements IModelFactory<JobRoleExtendedModel> {

    public create(): JobRoleExtendedModel {
        return new JobRoleExtendedModel();
    }
}
