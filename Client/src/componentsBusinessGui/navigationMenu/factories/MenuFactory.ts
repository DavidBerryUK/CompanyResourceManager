import ComponentIconConstants                   from '@/constants/ComponentIconConstants';
import MenuItem                                 from '../models/MenuItem';

export default class MenuFactory {

    public static getMenuItems(): Array<MenuItem> {

        const menuItems: Array<MenuItem> = new Array<MenuItem>();

        menuItems.push(new MenuItem('Home', 'home', `fa-2x ${ComponentIconConstants.HomeIcon}`));
        menuItems.push(new MenuItem('About', 'about', `fa-2x ${ComponentIconConstants.AboutIcon}`));
        menuItems.push(this.peopleMenu());
        menuItems.push(this.assetMenu());
        menuItems.push(this.securityMenu());
        menuItems.push(this.developmentMenu());

        return menuItems;
    }

    private static peopleMenu(): MenuItem {
        const menuItem = new MenuItem('People', '', '');
        menuItem.subMenus.push(new MenuItem('List', 'person', `fa-2x ${ComponentIconConstants.StaffListIcon}`));
        menuItem.subMenus.push(new MenuItem('Roles', 'jobrole', `fa-2x ${ComponentIconConstants.StaffListIcon}`));
        menuItem.subMenus.push(new MenuItem('Skills', 'skill', `fa-2x ${ComponentIconConstants.SkillListIcon}`));
        menuItem.subMenus.push(new MenuItem('Teams', 'team', `fa-2x ${ComponentIconConstants.TeamListIcon}`));
        menuItem.active = true;
        return menuItem;
    }

    private static securityMenu(): MenuItem {
        const menuItem = new MenuItem('Security', '', '');
        menuItem.subMenus.push(new MenuItem('Groups', 'securitygroup', `fa-2x ${ComponentIconConstants.SecurityGroupListIcon}`));
        menuItem.active = false;
        return menuItem;
    }

    private static assetMenu(): MenuItem {
        const menuItem = new MenuItem('Assets', '', '');
        menuItem.subMenus.push(new MenuItem('Types', 'AssetType', `fa-2x ${ComponentIconConstants.AssetTypesListIcon}`));
        menuItem.subMenus.push(new MenuItem('Assets', 'Asset', `fa-2x ${ComponentIconConstants.AssetsListIcon}`));
        menuItem.active = false;
        return menuItem;
    }

    private static developmentMenu(): MenuItem {
        const menuItem = new MenuItem('Development', '', '');
        menuItem.subMenus.push(new MenuItem('Development', 'development', `fa-2x ${ComponentIconConstants.DevelopmentListIcon}`));
        menuItem.active = false;
        return menuItem;
    }

}
