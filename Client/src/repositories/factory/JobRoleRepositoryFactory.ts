import GenericApiRepository                     from '@/repositories/apiBase/GenericApiRepository';
import JobRoleListFilterParametersModel         from '@/repositories/models/jobRole/JobRoleListFilterParametersModal';
import JobRoleSummaryModel                      from '@/repositories/models/jobRole/JobRoleSummaryModel';
import ObjectArrayMapperJobRoleModel            from '@/repositories/objectMappers/jobRole/ObjectArrayMapperJobRoleModel';
import ObjectMapperJobRoleExtendedModel         from '@/repositories/objectMappers/jobRole/ObjectMapperJobRoleExtendedModel';
import ObjectMapperJobRoleSummaryModel          from '@/repositories/objectMappers/jobRole/ObjectMapperJobRoleSummaryModel';

export default class JobRoleRepositoryFactory {

    //
    // create a Job Role Respository using the generic base repository class
    //  this repository supports all the basic CRUD operations as well
    //  as providing a filtered object list ( providing the server supports the functionality )
    static getRepository() : GenericApiRepository<JobRoleSummaryModel, JobRoleSummaryModel, JobRoleListFilterParametersModel> {
        var repository = new GenericApiRepository<JobRoleSummaryModel, JobRoleSummaryModel, JobRoleListFilterParametersModel>(
            new JobRoleSummaryModel().entityName,
            "api/jobrole",
            new ObjectMapperJobRoleSummaryModel(),
            new ObjectMapperJobRoleExtendedModel(),
            new ObjectArrayMapperJobRoleModel()
        )
        return repository;
    }
}