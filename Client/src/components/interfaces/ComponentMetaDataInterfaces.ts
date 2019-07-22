export interface IComponentMetaData {

    componentName: string;
    componentDescription: string;

}

export default class ComponentMetaDataInterfaceGuards {

    public static doesSupportIComponentMetaData(classInstance: any): classInstance is IComponentMetaData {
        const doesUseInterface = classInstance.componentName !== undefined;
        return doesUseInterface;
    }
}
