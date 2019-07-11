import GenericApiRepository                     from '@/repositories/apiBase/GenericApiRepository';
import JobRoleListFilterParametersModel         from '@/repositories/models/jobRole/JobRoleListFilterParametersModal';
import JobRoleModel                             from '@/repositories/models/jobRole/JobRoleModel';
import ObjectArrayMapperJobRoleModel            from '@/repositories/objectMappers/jobRole/ObjectArrayMapperJobRoleModel';
import ObjectMapperJobRoleModel                      from '@/repositories/objectMappers/jobRole/ObjectMapperJobRoleModel';

export default class JobRoleRepositoryFactory {

    static getRepository() : GenericApiRepository<JobRoleModel, JobRoleModel, JobRoleListFilterParametersModel> {
        var repository = new GenericApiRepository<JobRoleModel, JobRoleModel, JobRoleListFilterParametersModel>(
            new JobRoleModel().entityName,
            "api/jobrole",
            new ObjectMapperJobRoleModel(),
            new ObjectArrayMapperJobRoleModel()
        )
        return repository;
    }
}