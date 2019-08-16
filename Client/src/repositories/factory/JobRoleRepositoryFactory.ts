import GenericApiExtendedRepository                     from '@/repositories/apiBase/GenericApiExtendedRepository';
import JobRoleExtendedModel                     from '@/repositories/models/jobRole/JobRoleExtendedModel';
import JobRoleSummaryModel                      from '@/repositories/models/jobRole/JobRoleSummaryModel';
import ListFilterWithArchiveFlag                from '@/repositories/models/listFilter/ListFilterWithArchiveFlag';
import ModelFactoryJobRoleExtended              from '@/repositories/modelFactories/jobRole/ModelFactoryJobRoleExtended';
import ModelFactoryJobRoleSummary               from '@/repositories/modelFactories/jobRole/ModelFactoryJobRoleSummary';

export default class JobRoleRepositoryFactory {

    //
    // create a Job Role Repository using the generic base repository class
    //  this repository supports all the basic CRUD operations as well
    //  as providing a filtered object list ( providing the server supports the functionality )
    public static getRepository(): GenericApiExtendedRepository<JobRoleSummaryModel, JobRoleExtendedModel, ListFilterWithArchiveFlag> {
        const repository = new GenericApiExtendedRepository<JobRoleSummaryModel, JobRoleExtendedModel, ListFilterWithArchiveFlag>(
            'api/jobrole',
            new ModelFactoryJobRoleSummary(),
            new ModelFactoryJobRoleExtended());
        return repository;
    }
}
