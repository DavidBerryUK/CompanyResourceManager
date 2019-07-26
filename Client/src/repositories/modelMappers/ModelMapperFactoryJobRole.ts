import { IModelGenericMapper }                  from './interfaces/IModelGenericMapper';
import ModelFactoryJobRoleExtended             from '../modelFactories/ModelFactoryJobRoleExtended';
import ModelFactoryJobRoleSummary              from '../modelFactories/ModelFactoryJobRoleSummary';
import JobRoleExtendedModel                     from '@/repositories/models/jobRole/JobRoleExtendedModel';
import JobRoleSummaryModel                      from '../models/jobRole/JobRoleSummaryModel';
import ModelGenericMapper                       from './generic/ModelGenericMapper';

export default class ModelMapperFactoryJobRole {

    public static createSummaryMapper(): IModelGenericMapper<JobRoleSummaryModel> {
        return new ModelGenericMapper<JobRoleSummaryModel> (
            new ModelFactoryJobRoleSummary());
    }

    public static createExtendedMapper(): IModelGenericMapper<JobRoleExtendedModel> {
        return new ModelGenericMapper<JobRoleExtendedModel> (
            new ModelFactoryJobRoleExtended());
    }
}
