import SecurityGroupSummaryModel                from './SecurityGroupSummaryModel';

export default class SecurityGroupExtendedModel extends SecurityGroupSummaryModel {

    public static className = 'SecurityGroupExtendedModel';

    public get entityName(): string {
        return SecurityGroupExtendedModel.className;
    }
}
