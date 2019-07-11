import { IObjectArrayMapper }                   from "../interfaces/IObjectArrayMapper";
import JobRoleModel                             from '@/repositories/models/jobRole/JobRoleModel';

// object mappers transform plain java objects
// into strongly typed typescript objects
export default class ObjectArrayMapperJobRoleModel implements IObjectArrayMapper<JobRoleModel> {
    
    map(dataArray: any[]): Array<JobRoleModel> {
        
        var response = new Array<JobRoleModel>();
        
        response = dataArray.map((item) => { return  Object.assign(new JobRoleModel(), item) });

        return response;
    }
}