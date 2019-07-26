import { IModelFactory }                       from './interfaces/IModelFactory';
import JobRoleExtendedModel                     from '@/repositories/models/jobRole/JobRoleExtendedModel';

export default class ModelFactoryJobRoleExtended implements
    IModelFactory<JobRoleExtendedModel> {

    public create(): JobRoleExtendedModel {
        return new JobRoleExtendedModel();
    }
}
