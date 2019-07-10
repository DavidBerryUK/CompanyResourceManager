import { IObjectMapper }                        from "../interfaces/IObjectMapper";
import JobRoleModel                             from '@/repositories/models/jobRole/JobRoleModel';

export default class ObjectMapperJobRole implements IObjectMapper<JobRoleModel> {
    
    map(item: any): JobRoleModel {
                        
        var response = Object.assign(new JobRoleModel(), item);

        return response;
    }
}