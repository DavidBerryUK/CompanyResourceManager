// import { IApiModel }                  from '@/repositories/models/interfaces/IApiModel';
// import { IModelFactory }              from '@/repositories/modelFactories/interfaces/IModelFactory';
// import MappingConfig                  from './MappingConfig';

// export default class ObjectMapper2 {

//     public static MapItem<TDestination extends IApiModel>(
//         data: any,
//         config: MappingConfig<TDestination>): TDestination {

//         if (data === null || data === undefined) {
//             throw new Error('No data supplied to the object mapper');
//         }

//         if (config === null || config === undefined) {
//             throw new Error('No config supplied to the object mapper');
//         }

//         if (config.baseModelFactory === null || config.baseModelFactory === undefined) {
//             throw new Error('No config base model factory supplied to the object mapper');
//         }

//         const result = this.map(data, config.baseModelFactory, config);

//         return result;
//     }

//     private static map(
//         source: any,
//         factory: IModelFactory<any>,
//         config: MappingConfig<any>): any {

//         const data = factory.create();

//         // tslint:disable-next-line:forin
//         for (const key in data) {

//             const value = source[key];

//             if (value !== undefined) {

//                 if (Array.isArray(value)) {

//                     //
//                     // map an array
//                     //
//                     data[key] = this.mapPropertyArray(key, value, config);

//                 } else {
//                     //
//                     // map single property
//                     //
//                     data[key] = value;
//                 }
//             }
//         }

//         return data;
//     }

//     private static mapPropertyArray(
//         key: string,
//         source: Array<any>,
//         config: MappingConfig<any>): Array<any> {

//         const data: any[] = [];

//         if (config.propertyConfig.has(key) === false) {
//             throw new Error (`property ${key} is an array  - NOT -> mapper config exists`);
//         }

//         // console.log(`property ${key} is an array - mapper config exists`);
//         const objFactory = config.propertyConfig.get(key);
//         if (objFactory === undefined) {
//             throw new Error (`could not find object factory for ${key}`);
//         }

//         source.forEach((item) => {
//             const mappedItem = ObjectMapper2.map(item, objFactory.modelFactory, config);
//             data.push(mappedItem);
//         });

//         return data;
//     }
// }
