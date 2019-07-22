import { IObjectMapper }                        from '../interfaces/IObjectMapper';
import JobRoleExtendedModel                     from '@/repositories/models/jobRole/JobRoleExtendedModel';

// object mappers transform plain java objects
// into strongly typed typescript objects
export default class ObjectMapperJobRoleExtendedModel implements IObjectMapper<JobRoleExtendedModel> {

    public map(item: any): JobRoleExtendedModel {
        const response = Object.assign(new JobRoleExtendedModel(), item);
        return response;
    }
}
