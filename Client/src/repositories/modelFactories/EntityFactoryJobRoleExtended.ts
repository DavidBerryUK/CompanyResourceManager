import { IEntityFactory }                       from './interfaces/IEntityFactory';
import JobRoleExtendedModel                     from '@/repositories/models/jobRole/JobRoleExtendedModel';

export default class EntityFactoryJobRoleExtended implements
    IEntityFactory<JobRoleExtendedModel> {

    public create(): JobRoleExtendedModel {
        return new JobRoleExtendedModel();
    }
}
