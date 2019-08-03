export enum EnumRepositoryDataSource {
    None,
    Skill,
    SkillPerson,
    Team,
    TeamPerson,
    SecurityGroup,
    SecurityGroupPerson,
}

export enum EnumRepositoryListMode {
    Default,
    All,
    Selected,
    UnSelected,
}

export default class ListRepositoryEnum {

    /**
     *  @param listMode - show all, show only selected items, show only unselected items
     */
    public static getListMode(listMode: EnumRepositoryListMode) {

        switch (listMode) {
            case EnumRepositoryListMode.Default:
            return '';

            case EnumRepositoryListMode.All:
                return 'all';

            case EnumRepositoryListMode.Selected:
                return 'selected';

            case EnumRepositoryListMode.UnSelected:
                return 'unselected';
        }

        return '';
    }

    /**
     * @param dataSource the primary entity that is used to create the list
     */
    public static getListEntity(dataSource: EnumRepositoryDataSource): string {
        switch (dataSource) {

            case EnumRepositoryDataSource.Skill:
            case EnumRepositoryDataSource.SkillPerson:
                return 'Skill';

            case EnumRepositoryDataSource.Team:
            case EnumRepositoryDataSource.TeamPerson:
                return 'Team';

            case EnumRepositoryDataSource.SecurityGroup:
            case EnumRepositoryDataSource.SecurityGroupPerson:
                return 'Security/Group';
        }

        return '';
    }

    /**
     * @param dataSource reference entity - determines what list items are selected
     */
    public static getListReference(dataSource: EnumRepositoryDataSource): string {

        switch (dataSource) {
            case EnumRepositoryDataSource.TeamPerson:
            case EnumRepositoryDataSource.SkillPerson:
            case EnumRepositoryDataSource.SecurityGroupPerson:
                return 'Person';
        }

        return '';
    }
}
