import { IObjectArrayMapper }                   from '../interfaces/IObjectArrayMapper';
import JobRoleSummaryModel                      from '@/repositories/models/jobRole/JobRoleSummaryModel';

// object mappers transform plain java objects
// into strongly typed typescript objects
export default class ObjectArrayMapperJobRoleModel implements IObjectArrayMapper<JobRoleSummaryModel> {

    public map(dataArray: any[]): Array<JobRoleSummaryModel> {
        let response = new Array<JobRoleSummaryModel>();
        response = dataArray.map((item) => Object.assign(new JobRoleSummaryModel(), item));
        return response;
    }
}
