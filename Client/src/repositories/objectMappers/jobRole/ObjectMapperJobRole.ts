import { IObjectMapper }                        from "../interfaces/IObjectMapper";
import JobRoleModel                             from '@/repositories/models/jobRole/JobRoleModel';

// object mappers transform plain java objects
// into strongly typed typescript objects
export default class ObjectMapperJobRole implements IObjectMapper<JobRoleModel> {
    
    map(item: any): JobRoleModel {
                        
        var response = Object.assign(new JobRoleModel(), item);

        return response;
    }
}