// import MappingConfig from './MappingConfig';

// export default class ObjectMapperRegistry {

//     private static configurationRegistry: Map<string, MappingConfig<any>> = new Map<string, MappingConfig<any>>();

//     public static register(modelName: string, configuration: MappingConfig<any>) {
//         this.configurationRegistry.set(modelName, configuration);
//     }

//     /** get a object mapper configuration if it exists, if an
//      * entry does not exist then null will be returned
//      */
//     public static get(modelName: string): MappingConfig<any> | null {
//         if ( this.configurationRegistry.has(modelName) ) {
//             const entry = this.configurationRegistry.get(modelName);
//             if ( entry !== undefined ) {
//                 return entry;
//             }
//         }
//         return null;
//     }
// }
