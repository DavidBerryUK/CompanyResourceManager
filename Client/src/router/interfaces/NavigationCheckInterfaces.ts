export interface IRouteBeforeNavigationCheck {
    canCloseComponentBeforeNavigation(): boolean;
}

export default class NavigationCheckInterfaceGuards {

    public static doesSupportIRouteBeforeNavigationCheck(classInstance: any): classInstance is IRouteBeforeNavigationCheck {
        const doesUseInterface = classInstance.canCloseComponentBeforeNavigation !== undefined;
        return doesUseInterface;
    }
}
