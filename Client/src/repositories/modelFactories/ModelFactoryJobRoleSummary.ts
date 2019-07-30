import { IModelFactory }                        from './interfaces/IModelFactory';
import JobRoleSummaryModel                      from '@/repositories/models/jobRole/JobRoleSummaryModel';

export default class ModelFactoryJobRoleSummary implements
    IModelFactory<JobRoleSummaryModel> {

    public create(): JobRoleSummaryModel {
        return new JobRoleSummaryModel();
    }
}
