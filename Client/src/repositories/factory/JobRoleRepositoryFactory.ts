import GenericApiRepository                     from '@/repositories/apiBase/GenericApiRepository';
import JobRoleSummaryModel                      from '@/repositories/models/jobRole/JobRoleSummaryModel';
import ListFilterWithArchiveFlag                from '@/repositories/models/listFilter/ListFilterWithArchiveFlag';
import ObjectArrayMapperJobRoleModel            from '@/repositories/objectMappers/jobRole/ObjectArrayMapperJobRoleModel';
import ObjectMapperJobRoleExtendedModel         from '@/repositories/objectMappers/jobRole/ObjectMapperJobRoleExtendedModel';
import ObjectMapperJobRoleSummaryModel          from '@/repositories/objectMappers/jobRole/ObjectMapperJobRoleSummaryModel';

export default class JobRoleRepositoryFactory {

    //
    // create a Job Role Respository using the generic base repository class
    //  this repository supports all the basic CRUD operations as well
    //  as providing a filtered object list ( providing the server supports the functionality )
    public static getRepository(): GenericApiRepository<JobRoleSummaryModel, JobRoleSummaryModel, ListFilterWithArchiveFlag> {
        const repository = new GenericApiRepository<JobRoleSummaryModel, JobRoleSummaryModel, ListFilterWithArchiveFlag>(
            new JobRoleSummaryModel().entityName,
            'api/jobrole',
            new ObjectMapperJobRoleSummaryModel(),
            new ObjectMapperJobRoleExtendedModel(),
            new ObjectArrayMapperJobRoleModel());
        return repository;
    }
}
