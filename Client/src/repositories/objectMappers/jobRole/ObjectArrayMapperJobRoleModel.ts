import { IObjectArrayMapper }                   from "../interfaces/IObjectArrayMapper";
import JobRoleModel                             from '@/repositories/models/jobRole/JobRoleModel';

export default class ObjectArrayMapperJobRoleModel implements IObjectArrayMapper<JobRoleModel> {
    
    map(dataArray: any[]): Array<JobRoleModel> {
        
        var response = new Array<JobRoleModel>();
        
        response = dataArray.map((item) => { return  Object.assign(new JobRoleModel(), item) });

        return response;
    }
}