import { IEntityFactory }                       from './interfaces/IEntityFactory';
import JobRoleSummaryModel                      from '@/repositories/models/jobRole/JobRoleSummaryModel';

export default class EntityFactoryJobRoleSummary implements
    IEntityFactory<JobRoleSummaryModel> {

    public create(): JobRoleSummaryModel {
        return new JobRoleSummaryModel();
    }
}
