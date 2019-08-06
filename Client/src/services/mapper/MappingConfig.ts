import { IApiModel }                    from '@/repositories/models/interfaces/IApiModel';
import { IModelFactory }                from '@/repositories/modelFactories/interfaces/IModelFactory';
import PropertyConfig                   from './PropertyConfig';

export default class MappingConfig<T extends IApiModel> {

    public propertyConfig: Map<string, PropertyConfig>;
    public baseModelFactory: IModelFactory<T>;

    constructor(
        baseModelFactory: IModelFactory<T>,
        propertyConfig?: Array<PropertyConfig>) {

        this.baseModelFactory = baseModelFactory;
        this.propertyConfig = new Map<string, PropertyConfig>();

        if ( propertyConfig !== undefined && propertyConfig !== null) {
            propertyConfig.forEach((item: PropertyConfig) => {
                this.propertyConfig.set(item.propertyName, item);
            });
        }
    }
}
