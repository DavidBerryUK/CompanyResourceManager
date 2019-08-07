import { IModelFactory }                        from '../interfaces/IModelFactory';
import JobRoleSummaryModel                      from '@/repositories/models/jobRole/JobRoleSummaryModel';
import ModelFactoryBase                         from '../base/ModelFactoryBase';

export default class ModelFactoryJobRoleSummary
    extends ModelFactoryBase<JobRoleSummaryModel>
    implements IModelFactory<JobRoleSummaryModel> {

    public create(): JobRoleSummaryModel {
        return new JobRoleSummaryModel();
    }
}
