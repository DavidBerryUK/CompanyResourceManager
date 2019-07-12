import { IObjectArrayMapper }                   from "../interfaces/IObjectArrayMapper";
import JobRoleSummaryModel                             from '@/repositories/models/jobRole/JobRoleSummaryModel';

// object mappers transform plain java objects
// into strongly typed typescript objects
export default class ObjectArrayMapperJobRoleModel implements IObjectArrayMapper<JobRoleSummaryModel> {
    
    map(dataArray: any[]): Array<JobRoleSummaryModel> {
        
        var response = new Array<JobRoleSummaryModel>();
        
        response = dataArray.map((item) => { return  Object.assign(new JobRoleSummaryModel(), item) });

        return response;
    }
}