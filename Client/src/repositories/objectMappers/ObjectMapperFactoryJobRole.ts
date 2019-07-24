import { IObjectGenericMapper }                 from './interfaces/IObjectGenericMapper';
import EntityFactoryJobRoleExtended             from '../modelFactories/EntityFactoryJobRoleExtended';
import EntityFactoryJobRoleSummary              from '../modelFactories/EntityFactoryJobRoleSummary';
import JobRoleExtendedModel                     from '@/repositories/models/jobRole/JobRoleExtendedModel';
import JobRoleSummaryModel                      from '../models/jobRole/JobRoleSummaryModel';
import ObjectGenericMapper                      from './generic/ObjectGenericMapper';

export default class ObjectMapperFactoryJobRole {

    public static createSummaryMapper(): IObjectGenericMapper<JobRoleSummaryModel> {
        return new ObjectGenericMapper<JobRoleSummaryModel> (
            new EntityFactoryJobRoleSummary());
    }

    public static createExtendedMapper(): IObjectGenericMapper<JobRoleExtendedModel> {
        return new ObjectGenericMapper<JobRoleExtendedModel> (
            new EntityFactoryJobRoleExtended());
    }
}
