import JobRoleSummaryModel                      from './JobRoleSummaryModel';

export default class JobRoleExtendedModel extends JobRoleSummaryModel {

    public static className = 'JobRoleExtendedModel';

    public get entityName(): string {
        return JobRoleExtendedModel.className;
    }
}
