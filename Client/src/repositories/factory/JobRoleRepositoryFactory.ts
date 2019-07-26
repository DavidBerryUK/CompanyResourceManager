import GenericApiRepository                     from '@/repositories/apiBase/GenericApiRepository';
import JobRoleExtendedModel                     from '@/repositories/models/jobRole/JobRoleExtendedModel';
import JobRoleSummaryModel                      from '@/repositories/models/jobRole/JobRoleSummaryModel';
import ListFilterWithArchiveFlag                from '@/repositories/models/listFilter/ListFilterWithArchiveFlag';
import ModelMapperFactoryJobRole                from '@/repositories/modelMappers/ModelMapperFactoryJobRole';

export default class JobRoleRepositoryFactory {

    //
    // create a Job Role Respository using the generic base repository class
    //  this repository supports all the basic CRUD operations as well
    //  as providing a filtered object list ( providing the server supports the functionality )
    public static getRepository(): GenericApiRepository<JobRoleSummaryModel, JobRoleExtendedModel, ListFilterWithArchiveFlag> {
        const repository = new GenericApiRepository<JobRoleSummaryModel, JobRoleExtendedModel, ListFilterWithArchiveFlag>(
            'api/jobrole',
            ModelMapperFactoryJobRole.createSummaryMapper(),
            ModelMapperFactoryJobRole.createExtendedMapper());
        return repository;
    }
}
