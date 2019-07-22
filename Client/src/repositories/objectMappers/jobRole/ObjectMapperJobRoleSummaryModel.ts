import { IObjectMapper }                        from '../interfaces/IObjectMapper';
import JobRoleSummaryModel                      from '@/repositories/models/jobRole/JobRoleSummaryModel';

// object mappers transform plain java objects
// into strongly typed typescript objects
export default class ObjectMapperJobRoleSummaryModel implements IObjectMapper<JobRoleSummaryModel> {

    public map(item: any): JobRoleSummaryModel {
        const response = Object.assign(new JobRoleSummaryModel(), item);
        return response;
    }
}
